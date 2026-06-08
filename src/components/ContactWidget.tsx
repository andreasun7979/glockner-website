"use client";

import { useState } from "react";

type FormState = {
  name: string;
  email: string;
  message: string;
  /** Honeypot — must stay empty; bots that fill it are silently dropped. */
  hp: string;
};

export default function ContactWidget() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
    hp: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const canSubmit =
    form.name.trim().length > 1 &&
    /^\S+@\S+\.\S+$/.test(form.email) &&
    form.message.trim().length > 4;

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;
    setSubmitting(true);
    setError(null);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          hp: form.hp,
          source: "lux3-contact",
        }),
      });
      if (!res.ok) {
        const text = await res.text();
        throw new Error(text || "Etwas ist schiefgegangen.");
      }
      setDone(true);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Etwas ist schiefgegangen."
      );
    } finally {
      setSubmitting(false);
    }
  }

  function reset() {
    setForm({ name: "", email: "", message: "", hp: "" });
    setDone(false);
    setError(null);
  }

  if (done) {
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
            <svg width="48" height="48" viewBox="0 0 100 100" fill="none" aria-hidden="true">
              <circle cx="40" cy="50" r="22" stroke="#c9a86a" strokeWidth="0.9" opacity="0.85" />
              <circle cx="60" cy="50" r="22" stroke="#06b6d4" strokeWidth="0.9" opacity="0.85" />
            </svg>
          </div>
          <h3 className="font-serif-display text-white text-3xl md:text-4xl tracking-[-0.02em] m-0">
            Nachricht erhalten<span className="text-aurum">.</span>
          </h3>
          <p className="text-slate-400 text-sm mt-5 max-w-md mx-auto leading-relaxed">
            Danke, {form.name.split(" ")[0] || "vielmals"}. Wir melden uns
            innerhalb eines Werktages an{" "}
            <span className="text-aurum font-semibold">{form.email}</span>.
          </p>
          <button
            type="button"
            onClick={reset}
            className="mt-7 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-slate-300 border border-white/15 hover:border-aurum/50 hover:text-aurum transition-all"
          >
            Neue Nachricht
          </button>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="relative rounded-2xl border border-white/10 bg-brand-card p-6 md:p-8 overflow-hidden"
    >
      <span
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-aurum/60 to-transparent opacity-50"
      />

      <header className="mb-6">
        <span className="font-mono text-[10.5px] tracking-[0.24em] uppercase text-aurum/85 font-semibold">
          Oder einfach direkt
        </span>
        <h3 className="font-serif-display font-medium text-white text-2xl md:text-3xl tracking-[-0.02em] mt-2">
          Schreiben Sie uns<span className="text-aurum">.</span>
        </h3>
      </header>

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
      <div className="mt-5">
        <FieldArea
          label="Nachricht"
          required
          value={form.message}
          onChange={(v) => setForm({ ...form, message: v })}
          placeholder="Wobei können wir helfen?"
          rows={5}
        />
      </div>

      {error && (
        <div className="mt-5 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
          {error}
        </div>
      )}

      <div className="mt-6 flex flex-col-reverse sm:flex-row sm:items-center sm:justify-between gap-4">
        <p className="font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate-500">
          Antwort innerhalb eines Werktages
        </p>
        <button
          type="submit"
          disabled={!canSubmit || submitting}
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft transition-all shadow-[0_6px_22px_-8px_rgba(201,168,106,0.55)] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span>{submitting ? "Wird gesendet …" : "Nachricht senden"}</span>
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
  );
}

/* ---------- shared field components (mirroring BookingWidget style) ---------- */

function Field({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  autoComplete,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  autoComplete?: string;
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
    </label>
  );
}

function FieldArea({
  label,
  value,
  onChange,
  placeholder,
  rows = 4,
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="block font-mono text-[10.5px] tracking-[0.18em] uppercase text-slate-400 font-semibold mb-2">
        {label}
        {required && <span className="text-aurum ml-1">*</span>}
      </span>
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-white/[0.03] px-4 py-3 text-white text-[15px] placeholder:text-slate-600 focus:outline-none focus:border-aurum/60 focus:bg-aurum/[0.03] transition-all resize-none"
      />
    </label>
  );
}
