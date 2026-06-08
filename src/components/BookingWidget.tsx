"use client";

import { useEffect, useMemo, useState } from "react";

const SLOTS_MORNING = ["10:00", "10:30", "11:00", "11:30"];
const SLOTS_AFTERNOON = ["14:00", "14:30", "15:00", "15:30"];
const ALL_SLOTS = [...SLOTS_MORNING, ...SLOTS_AFTERNOON];

/** Minimum lead time in minutes — slots earlier than now+LEAD_TIME_MIN are hidden. */
const LEAD_TIME_MIN = 120;

const WEEKDAYS_DE = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];
const MONTHS_DE = [
  "Januar",
  "Februar",
  "März",
  "April",
  "Mai",
  "Juni",
  "Juli",
  "August",
  "September",
  "Oktober",
  "November",
  "Dezember",
];

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

function isSameDay(a: Date | null, b: Date | null) {
  if (!a || !b) return false;
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function formatDateLong(d: Date) {
  const wd = WEEKDAYS_DE[(d.getDay() + 6) % 7];
  return `${wd}, ${d.getDate()}. ${MONTHS_DE[d.getMonth()]} ${d.getFullYear()}`;
}

type FormState = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  /** Honeypot — must stay empty; bots that fill it are silently dropped. */
  hp: string;
};

type BookingWidgetProps = {
  /** Sidebar eyebrow label, e.g. "Klarheitsgespräch" or "Erstberatung". */
  eyebrow?: string;
  /** Sidebar host line, e.g. "mit Glockner AI" / "mit Glockner Digital". */
  hostName?: string;
  /** Italic line at the bottom of the sidebar. */
  promise?: string;
};

export default function BookingWidget({
  eyebrow = "Klarheitsgespräch",
  hostName = "Glockner AI",
  promise = "Wir analysieren in 20 Minuten, welche Säule bei Ihnen den schnellsten Hebel auf Umsatz hat.",
}: BookingWidgetProps = {}) {
  const today = useMemo(() => startOfDay(new Date()), []);
  // `now` reflects the current wall-clock; we re-tick every minute so a slot
  // that has just crossed the LEAD_TIME_MIN threshold disappears without a reload.
  const [now, setNow] = useState<Date>(() => new Date());
  useEffect(() => {
    const id = setInterval(() => setNow(new Date()), 60_000);
    return () => clearInterval(id);
  }, []);
  const [viewMonth, setViewMonth] = useState<Date>(
    new Date(today.getFullYear(), today.getMonth(), 1)
  );
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [step, setStep] = useState<"pick" | "details" | "success">("pick");
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    topic: "",
    hp: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const monthLabel = `${MONTHS_DE[viewMonth.getMonth()]} ${viewMonth.getFullYear()}`;

  // Build calendar grid: weeks × 7 days, with leading/trailing days from neighbour months
  const monthGrid = useMemo(() => {
    const firstOfMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth(), 1);
    const lastOfMonth = new Date(viewMonth.getFullYear(), viewMonth.getMonth() + 1, 0);
    // (getDay + 6) % 7 → 0=Mo, 6=So
    const startWeekday = (firstOfMonth.getDay() + 6) % 7;
    const totalCells = Math.ceil((startWeekday + lastOfMonth.getDate()) / 7) * 7;
    const cells: { date: Date; inMonth: boolean }[] = [];
    for (let i = 0; i < totalCells; i++) {
      const offset = i - startWeekday;
      const d = new Date(
        viewMonth.getFullYear(),
        viewMonth.getMonth(),
        1 + offset
      );
      cells.push({ date: d, inMonth: d.getMonth() === viewMonth.getMonth() });
    }
    return cells;
  }, [viewMonth]);

  function slotDateTime(d: Date, time: string) {
    const [h, m] = time.split(":").map(Number);
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m, 0, 0);
  }

  function isSlotAvailable(d: Date, time: string) {
    return slotDateTime(d, time).getTime() - now.getTime() >= LEAD_TIME_MIN * 60_000;
  }

  function availableSlots(d: Date, slots: string[]) {
    if (!isSameDay(d, today)) return slots;
    return slots.filter((t) => isSlotAvailable(d, t));
  }

  function isDateBookable(d: Date) {
    const day = d.getDay();
    if (day === 0 || day === 6) return false; // Weekend
    if (d < today) return false; // Past
    // For today: at least one slot must still satisfy the lead-time buffer.
    if (isSameDay(d, today) && availableSlots(d, ALL_SLOTS).length === 0) return false;
    return true;
  }

  // If the user picked today and a previously-selected slot has expired, clear it.
  useEffect(() => {
    if (selectedDate && selectedTime && !isSlotAvailable(selectedDate, selectedTime)) {
      setSelectedTime(null);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [now]);

  function shiftMonth(delta: number) {
    setViewMonth(
      new Date(viewMonth.getFullYear(), viewMonth.getMonth() + delta, 1)
    );
  }

  const canShiftBack =
    viewMonth.getFullYear() > today.getFullYear() ||
    (viewMonth.getFullYear() === today.getFullYear() &&
      viewMonth.getMonth() > today.getMonth());

  const canProceedToDetails = selectedDate && selectedTime;
  const canSubmit =
    canProceedToDetails &&
    form.name.trim().length > 1 &&
    /^\S+@\S+\.\S+$/.test(form.email);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          date: selectedDate!.toISOString(),
          time: selectedTime,
          ...form,
        }),
        // note: `hp` (honeypot) is part of `form` and gets sent along.
      });

      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Buchung fehlgeschlagen.");
      }
      setStep("success");
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Etwas ist schiefgegangen."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setSelectedDate(null);
    setSelectedTime(null);
    setForm({ name: "", email: "", phone: "", topic: "", hp: "" });
    setStep("pick");
    setError(null);
  }

  /* ---------- success screen ---------- */
  if (step === "success") {
    return (
      <div className="relative rounded-2xl border border-aurum/30 bg-brand-card p-10 md:p-14 text-center overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum to-transparent opacity-60"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none aurum-breathe opacity-50"
          style={{
            background:
              "radial-gradient(circle at center, rgba(201,168,106,0.18), transparent 60%)",
          }}
        />
        <div className="relative">
          <div className="flex justify-center mb-6">
            <svg width="56" height="56" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <circle cx="50" cy="38" r="22" stroke="url(#sg)" strokeWidth="0.9" opacity="0.85" />
              <circle cx="34" cy="62" r="22" stroke="url(#sg)" strokeWidth="0.9" opacity="0.85" />
              <circle cx="66" cy="62" r="22" stroke="url(#sg)" strokeWidth="0.9" opacity="0.85" />
              <defs>
                <linearGradient id="sg" x1="0" y1="0" x2="100" y2="100">
                  <stop offset="0%" stopColor="#d8bd8a" />
                  <stop offset="55%" stopColor="#c9a86a" />
                  <stop offset="100%" stopColor="#06b6d4" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <h3 className="font-serif-display text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
            Termin reserviert<span className="text-aurum">.</span>
          </h3>
          <p className="font-serif-display italic text-slate-300 text-lg mt-4 max-w-md mx-auto">
            {selectedDate && formatDateLong(selectedDate)} &middot; {selectedTime}{" "}
            Uhr
          </p>
          <p className="text-slate-400 text-sm mt-6 max-w-md mx-auto leading-relaxed">
            Sie erhalten in Kürze eine Bestätigung an{" "}
            <span className="text-aurum font-semibold">{form.email}</span> mit
            Kalendereinladung und Meeting-Link.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-8 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-300 border border-white/15 hover:border-aurum/50 hover:text-aurum transition-all"
          >
            Weiteren Termin buchen
          </button>
        </div>
      </div>
    );
  }

  /* ---------- main 2-column layout ---------- */
  return (
    <div className="grid lg:grid-cols-[1fr_320px] gap-5 md:gap-6">
      {/* MAIN */}
      <div className="relative rounded-2xl border border-white/10 bg-brand-card p-6 md:p-8 overflow-hidden">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50"
        />

        {step === "pick" ? (
          <>
            <header className="mb-6">
              <span className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-aurum/85 font-semibold">
                Schritt 1 von 2
              </span>
              <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] mt-2">
                Datum &amp; Zeit wählen<span className="text-aurum">.</span>
              </h3>
            </header>

            <div className="grid md:grid-cols-[1fr_auto] gap-6 md:gap-8 items-start">
              {/* Calendar */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <button
                    type="button"
                    onClick={() => shiftMonth(-1)}
                    disabled={!canShiftBack}
                    aria-label="Vorheriger Monat"
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-300 hover:text-aurum hover:border-aurum/40 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <span className="font-serif-display text-white text-lg md:text-xl tracking-tight">
                    {monthLabel}
                  </span>
                  <button
                    type="button"
                    onClick={() => shiftMonth(1)}
                    aria-label="Nächster Monat"
                    className="w-9 h-9 rounded-full border border-white/10 bg-white/[0.02] flex items-center justify-center text-slate-300 hover:text-aurum hover:border-aurum/40 transition-all"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 18l6-6-6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>

                <div className="grid grid-cols-7 gap-1 mb-2">
                  {WEEKDAYS_DE.map((wd) => (
                    <div
                      key={wd}
                      className="text-center font-mono text-[10px] tracking-[0.16em] uppercase text-slate-500 font-semibold py-1"
                    >
                      {wd}
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-7 gap-1">
                  {monthGrid.map(({ date, inMonth }) => {
                    const bookable = inMonth && isDateBookable(date);
                    const selected = isSameDay(date, selectedDate);
                    const isToday = isSameDay(date, today);
                    return (
                      <button
                        key={date.toISOString()}
                        type="button"
                        disabled={!bookable}
                        onClick={() => {
                          setSelectedDate(date);
                          setSelectedTime(null);
                        }}
                        className={[
                          "aspect-square w-full rounded-full text-sm font-semibold transition-all relative",
                          !inMonth
                            ? "text-slate-700"
                            : !bookable
                              ? "text-slate-600 cursor-not-allowed"
                              : selected
                                ? "bg-gradient-to-br from-aurum-soft via-aurum to-aurum-deep text-brand-dark shadow-[0_4px_18px_-4px_rgba(201,168,106,0.7)]"
                                : "text-slate-200 hover:bg-aurum/10 hover:text-aurum cursor-pointer",
                        ].join(" ")}
                      >
                        <span className="relative">{date.getDate()}</span>
                        {isToday && !selected && (
                          <span
                            aria-hidden="true"
                            className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-aurum"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>

                <p className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 mt-4 text-center">
                  Mitteleuropäische Zeit · GMT+02:00
                </p>
              </div>

              {/* Time slots */}
              <div className="md:w-44 lg:w-48">
                {selectedDate ? (
                  (() => {
                    const morning = availableSlots(selectedDate, SLOTS_MORNING);
                    const afternoon = availableSlots(selectedDate, SLOTS_AFTERNOON);
                    return (
                      <>
                        {morning.length > 0 && (
                          <>
                            <div className="font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold mb-3">
                              Vormittag
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                              {morning.map((t) => {
                                const sel = selectedTime === t;
                                return (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => setSelectedTime(t)}
                                    className={[
                                      "px-4 py-2.5 rounded-lg font-mono text-sm font-semibold transition-all border",
                                      sel
                                        ? "bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border-aurum text-brand-dark shadow-[0_4px_18px_-6px_rgba(201,168,106,0.6)]"
                                        : "border-white/10 bg-white/[0.02] text-slate-200 hover:border-aurum/40 hover:text-aurum",
                                    ].join(" ")}
                                  >
                                    {t}
                                  </button>
                                );
                              })}
                            </div>
                          </>
                        )}

                        {afternoon.length > 0 && (
                          <>
                            <div className={`font-mono text-[10.5px] tracking-[0.22em] uppercase text-aurum/85 font-semibold mb-3 ${morning.length > 0 ? "mt-5" : ""}`}>
                              Nachmittag
                            </div>
                            <div className="grid grid-cols-2 md:grid-cols-1 gap-2">
                              {afternoon.map((t) => {
                                const sel = selectedTime === t;
                                return (
                                  <button
                                    key={t}
                                    type="button"
                                    onClick={() => setSelectedTime(t)}
                                    className={[
                                      "px-4 py-2.5 rounded-lg font-mono text-sm font-semibold transition-all border",
                                      sel
                                        ? "bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border-aurum text-brand-dark shadow-[0_4px_18px_-6px_rgba(201,168,106,0.6)]"
                                        : "border-white/10 bg-white/[0.02] text-slate-200 hover:border-aurum/40 hover:text-aurum",
                                    ].join(" ")}
                                  >
                                    {t}
                                  </button>
                                );
                              })}
                            </div>
                          </>
                        )}

                        {morning.length === 0 && afternoon.length === 0 && (
                          <div className="rounded-xl border border-dashed border-white/10 p-5 text-center">
                            <p className="font-serif-display italic text-slate-500 text-sm">
                              Für heute sind keine Termine mehr verfügbar.
                            </p>
                          </div>
                        )}
                      </>
                    );
                  })()
                ) : (
                  <div className="rounded-xl border border-dashed border-white/10 p-5 text-center">
                    <p className="font-serif-display italic text-slate-500 text-sm">
                      Wählen Sie zunächst ein Datum.
                    </p>
                  </div>
                )}
              </div>
            </div>

            {canProceedToDetails && (
              <div className="flex justify-end mt-7 pt-5 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setStep("details")}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_6px_22px_-8px_rgba(201,168,106,0.55)]"
                >
                  <span>Weiter</span>
                  <svg width="14" height="10" viewBox="0 0 18 14" aria-hidden="true">
                    <path
                      d="M1 7h15m0 0L10 1m6 6l-6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
              </div>
            )}
          </>
        ) : (
          /* ---------- DETAILS FORM ---------- */
          <>
            <header className="mb-6">
              <span className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-aurum/85 font-semibold">
                Schritt 2 von 2
              </span>
              <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] mt-2">
                Ihre Kontaktdaten<span className="text-aurum">.</span>
              </h3>
            </header>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Honeypot — hidden from humans, off the tab order. Bots that fill it get dropped. */}
              <div aria-hidden="true" className="absolute left-[-9999px] top-[-9999px] h-0 w-0 overflow-hidden opacity-0">
                <label>
                  Bitte dieses Feld leer lassen
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={form.hp}
                    onChange={(e) => setForm({ ...form, hp: e.target.value })}
                  />
                </label>
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <Field
                  label="Name"
                  required
                  value={form.name}
                  onChange={(v) => setForm({ ...form, name: v })}
                  placeholder="Max Mustermann"
                  type="text"
                  autoComplete="name"
                />
                <Field
                  label="E-Mail"
                  required
                  value={form.email}
                  onChange={(v) => setForm({ ...form, email: v })}
                  placeholder="ihre@email.at"
                  type="email"
                  autoComplete="email"
                />
              </div>
              <Field
                label="Telefon"
                value={form.phone}
                onChange={(v) => setForm({ ...form, phone: v })}
                placeholder="+43 660 123 456"
                type="tel"
                autoComplete="tel"
                hint="Optional &mdash; nur falls wir Sie erreichen müssen"
              />
              <FieldArea
                label="Worum geht's?"
                value={form.topic}
                onChange={(v) => setForm({ ...form, topic: v })}
                placeholder="Kurze Beschreibung Ihres Anliegens (optional)"
                rows={3}
              />

              {error && (
                <div className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              )}

              <div className="flex flex-col-reverse sm:flex-row sm:justify-between gap-3 pt-3 border-t border-white/5">
                <button
                  type="button"
                  onClick={() => setStep("pick")}
                  className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-lg text-sm font-semibold text-slate-300 border border-white/15 hover:border-aurum/40 hover:text-aurum transition-all"
                >
                  <svg width="14" height="10" viewBox="0 0 18 14" aria-hidden="true">
                    <path
                      d="M17 7H2m0 0l6-6m-6 6l6 6"
                      stroke="currentColor"
                      strokeWidth="2"
                      fill="none"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span>Zurück</span>
                </button>

                <button
                  type="submit"
                  disabled={!canSubmit || submitting}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_6px_22px_-8px_rgba(201,168,106,0.55)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <span>{submitting ? "Wird gebucht …" : "Termin sichern"}</span>
                  {!submitting && (
                    <svg width="14" height="10" viewBox="0 0 18 14" aria-hidden="true">
                      <path
                        d="M1 7h15m0 0L10 1m6 6l-6 6"
                        stroke="currentColor"
                        strokeWidth="2"
                        fill="none"
                        strokeLinecap="round"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </form>
          </>
        )}
      </div>

      {/* SIDEBAR — meeting summary */}
      <aside className="relative rounded-2xl border border-white/10 bg-brand-card p-6 md:p-7 overflow-hidden h-fit">
        <span
          aria-hidden="true"
          className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50"
        />
        <div className="font-mono text-[10px] tracking-[0.24em] uppercase text-aurum/85 font-semibold mb-3">
          {eyebrow}
        </div>
        <h4 className="font-serif-display font-medium text-white text-xl md:text-2xl tracking-[-0.02em] m-0">
          mit {hostName}<span className="text-aurum">.</span>
        </h4>

        <div className="mt-5 space-y-4 text-sm">
          <SummaryRow
            label="Dauer"
            value="30 Minuten"
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 7v5l3 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
          />
          <SummaryRow
            label="Format"
            value="Online · Google Meet"
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="6" width="14" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M17 10l4-2v8l-4-2" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            }
          />
          <SummaryRow
            label="Datum"
            value={selectedDate ? formatDateLong(selectedDate) : "—"}
            highlight={!!selectedDate}
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="3" y="5" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.5" />
                <path d="M3 9h18M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
          />
          <SummaryRow
            label="Uhrzeit"
            value={
              selectedTime
                ? `${selectedTime} – ${addMinutes(selectedTime, 30)} Uhr`
                : "—"
            }
            highlight={!!selectedTime}
            icon={
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
                <path d="M12 8v4l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
          />
        </div>

        <div className="aurum-rule mt-7 mb-5" />

        <p className="font-serif-display italic text-slate-400 text-sm leading-relaxed">
          {promise}
        </p>
      </aside>
    </div>
  );
}

/* ---------- helpers ---------- */

function addMinutes(time: string, mins: number) {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + mins;
  const nh = Math.floor(total / 60);
  const nm = total % 60;
  return `${String(nh).padStart(2, "0")}:${String(nm).padStart(2, "0")}`;
}

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  autoComplete,
  hint,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
  hint?: string;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate-400 font-semibold mb-2">
        {label}
        {required && <span className="text-aurum ml-1">*</span>}
      </span>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        autoComplete={autoComplete}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white text-[15px] placeholder:text-slate-600 focus:outline-none focus:border-aurum/60 focus:bg-aurum/[0.03] transition-all"
      />
      {hint && (
        <span
          className="block text-[11px] text-slate-500 mt-1.5 leading-snug"
          dangerouslySetInnerHTML={{ __html: hint }}
        />
      )}
    </label>
  );
}

function FieldArea({
  label,
  value,
  onChange,
  placeholder,
  rows = 3,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate-400 font-semibold mb-2">
        {label}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white text-[15px] placeholder:text-slate-600 focus:outline-none focus:border-aurum/60 focus:bg-aurum/[0.03] transition-all resize-none"
      />
    </label>
  );
}

function SummaryRow({
  label,
  value,
  highlight = false,
  icon,
}: {
  label: string;
  value: string;
  highlight?: boolean;
  icon?: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-3">
      <span
        aria-hidden="true"
        className={`flex-shrink-0 mt-0.5 ${highlight ? "text-aurum" : "text-slate-500"}`}
      >
        {icon}
      </span>
      <div className="flex-1 min-w-0">
        <div className="font-mono text-[10px] tracking-[0.18em] uppercase text-slate-500 font-semibold">
          {label}
        </div>
        <div
          className={`font-medium text-[14px] leading-snug mt-0.5 ${highlight ? "text-aurum" : "text-slate-300"}`}
        >
          {value}
        </div>
      </div>
    </div>
  );
}
