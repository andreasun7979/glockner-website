import { NextResponse } from "next/server";
import { Resend } from "resend";
import { rateLimit, clientIp } from "@/lib/rateLimit";

// Allowed booking slots — mirror of BookingWidget. Server rejects anything else.
const ALLOWED_SLOTS = new Set([
  "10:00", "10:30", "11:00", "11:30",
  "14:00", "14:30", "15:00", "15:30",
]);

const HOST_EMAIL = "a.unterkofler@glocknerdigital.at";
// Reply-To für Kundenmails: Antworten sollen ins Support-Postfach.
const SUPPORT_EMAIL = "support@glocknerdigital.at";
const HOST_NAME = "Andreas Unterkofler";
const MEETING_URL = "https://meet.glocknerdigital.at/";
const SENDER =
  process.env.RESEND_FROM_EMAIL || "Glockner AI <onboarding@resend.dev>";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const WEEKDAYS = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
const MONTHS = [
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

function formatDateLong(d: Date) {
  return `${WEEKDAYS[d.getDay()]}, ${d.getDate()}. ${MONTHS[d.getMonth()]} ${d.getFullYear()}`;
}

function addMinutes(time: string, mins: number) {
  const [h, m] = time.split(":").map(Number);
  const total = h * 60 + m + mins;
  const nh = Math.floor(total / 60);
  const nm = total % 60;
  return `${String(nh).padStart(2, "0")}:${String(nm).padStart(2, "0")}`;
}

function esc(input: unknown) {
  if (input == null) return "";
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Booking = {
  name: string;
  email: string;
  phone: string;
  topic: string;
  dateLong: string;
  time: string;
  endTime: string;
};

function customerEmail(b: Booking) {
  const name = esc(b.name);
  const dateLong = esc(b.dateLong);
  return `<!doctype html>
<html lang="de">
  <body style="margin:0;padding:0;background:#f5f5f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#020617">
    <div style="max-width:560px;margin:32px auto;padding:0 16px">
      <div style="background:#020617;padding:32px 32px 28px;border-radius:16px 16px 0 0">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.28em;text-transform:uppercase;color:#c9a86a;margin-bottom:18px">
          Glockner AI
        </div>
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-weight:600;font-size:30px;line-height:1.2;color:#ffffff;letter-spacing:-0.02em">
          Termin bestätigt<span style="color:#c9a86a">.</span>
        </h1>
      </div>
      <div style="background:#ffffff;padding:32px;border-radius:0 0 16px 16px;border:1px solid #e7e5e4;border-top:none">
        <p style="margin:0 0 18px;font-size:16px;line-height:1.6">Hallo ${name},</p>
        <p style="margin:0 0 24px;font-size:16px;line-height:1.6">
          Ihr 30-minütiges Erstgespräch ist fix eingetragen. Hier die Details:
        </p>
        <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%;margin:0 0 24px;border:1px solid #e7e5e4;border-radius:12px;overflow:hidden">
          <tr>
            <td style="padding:14px 18px;background:#fafaf9;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;width:32%">Datum</td>
            <td style="padding:14px 18px;background:#fafaf9;font-size:15px;font-weight:600">${dateLong}</td>
          </tr>
          <tr>
            <td style="padding:14px 18px;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c">Uhrzeit</td>
            <td style="padding:14px 18px;font-size:15px;font-weight:600">${esc(b.time)} – ${esc(b.endTime)} Uhr</td>
          </tr>
          <tr>
            <td style="padding:14px 18px;background:#fafaf9;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c">Format</td>
            <td style="padding:14px 18px;background:#fafaf9;font-size:15px;font-weight:600">Online &middot; Google Meet</td>
          </tr>
          <tr>
            <td style="padding:14px 18px;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c">Mit</td>
            <td style="padding:14px 18px;font-size:15px;font-weight:600">${HOST_NAME}</td>
          </tr>
          <tr>
            <td style="padding:14px 18px;background:#fafaf9;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c">Meeting</td>
            <td style="padding:14px 18px;background:#fafaf9;font-size:15px;font-weight:600"><a href="${MEETING_URL}" style="color:#06b6d4;text-decoration:none">${MEETING_URL.replace(/^https?:\/\//, "").replace(/\/$/, "")}</a></td>
          </tr>
        </table>
        <table cellpadding="0" cellspacing="0" role="presentation" style="margin:0 0 24px">
          <tr>
            <td style="border-radius:10px;background:linear-gradient(135deg,#d8bd8a 0%,#c9a86a 50%,#a88845 100%)">
              <a href="${MEETING_URL}" style="display:inline-block;padding:14px 28px;font-family:inherit;font-size:15px;font-weight:700;color:#020617;text-decoration:none;border-radius:10px;letter-spacing:0.01em">
                Zum Meeting beitreten &rarr;
              </a>
            </td>
          </tr>
        </table>
        <p style="margin:0 0 16px;font-size:15px;line-height:1.6;color:#44403c">
          Speichern Sie sich den Termin am besten gleich im Kalender. Sollte etwas dazwischenkommen, antworten Sie einfach auf diese E-Mail.
        </p>
        <div style="height:1px;background:#e7e5e4;margin:28px 0"></div>
        <p style="margin:0;font-size:14px;line-height:1.7;color:#78716c">
          Freue mich auf das Gespräch.<br>
          <strong style="color:#020617">${HOST_NAME}</strong><br>
          <span style="color:#a8a29e">Glockner Digital · glockner.ai · +43 650 660 5000</span>
        </p>
      </div>
    </div>
  </body>
</html>`;
}

function hostEmail(b: Booking) {
  const phoneRow = b.phone
    ? `<tr><td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;width:32%">Telefon</td><td style="padding:8px 0;font-size:15px">${esc(b.phone)}</td></tr>`
    : "";
  const topicRow = b.topic
    ? `<tr><td colspan="2" style="padding:18px 0 0"><div style="font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;margin-bottom:6px">Anliegen</div><div style="font-size:14px;line-height:1.6;color:#44403c;background:#fafaf9;border:1px solid #e7e5e4;border-radius:8px;padding:12px 14px">${esc(b.topic).replace(/\n/g, "<br>")}</div></td></tr>`
    : "";

  return `<!doctype html>
<html lang="de">
  <body style="margin:0;padding:0;background:#f5f5f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#020617">
    <div style="max-width:560px;margin:32px auto;padding:0 16px">
      <div style="background:#020617;padding:24px 32px;border-radius:16px 16px 0 0">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.28em;text-transform:uppercase;color:#c9a86a;margin-bottom:10px">
          Neue Buchung
        </div>
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-weight:600;font-size:22px;line-height:1.3;color:#ffffff;letter-spacing:-0.02em">
          ${esc(b.name)} · ${esc(b.dateLong)} · ${esc(b.time)} Uhr
        </h1>
      </div>
      <div style="background:#ffffff;padding:24px 32px 28px;border-radius:0 0 16px 16px;border:1px solid #e7e5e4;border-top:none">
        <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%">
          <tr>
            <td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;width:32%">Name</td>
            <td style="padding:8px 0;font-size:15px">${esc(b.name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c">E-Mail</td>
            <td style="padding:8px 0;font-size:15px"><a href="mailto:${esc(b.email)}" style="color:#06b6d4;text-decoration:none">${esc(b.email)}</a></td>
          </tr>
          ${phoneRow}
          <tr>
            <td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c">Datum</td>
            <td style="padding:8px 0;font-size:15px;font-weight:600">${esc(b.dateLong)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c">Uhrzeit</td>
            <td style="padding:8px 0;font-size:15px;font-weight:600">${esc(b.time)} &ndash; ${esc(b.endTime)} Uhr</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c">Meeting</td>
            <td style="padding:8px 0;font-size:15px"><a href="${MEETING_URL}" style="color:#06b6d4;text-decoration:none">${MEETING_URL.replace(/^https?:\/\//, "").replace(/\/$/, "")}</a></td>
          </tr>
          ${topicRow}
        </table>
      </div>
    </div>
  </body>
</html>`;
}

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "Invalid JSON" },
      { status: 400 }
    );
  }

  // Honeypot: a hidden field no human fills. If present, silently accept and drop.
  if (typeof body.hp === "string" && body.hp.trim() !== "") {
    return NextResponse.json({ ok: true });
  }

  // Rate limit: max 5 bookings / 10 min per IP (best-effort, see lib/rateLimit).
  if (!rateLimit(`booking:${clientIp(request)}`)) {
    return NextResponse.json(
      { ok: false, error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 }
    );
  }

  const date = typeof body.date === "string" ? body.date : "";
  const time = typeof body.time === "string" ? body.time : "";
  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const topic = typeof body.topic === "string" ? body.topic.trim() : "";

  if (
    !date ||
    !time ||
    name.length < 2 ||
    !/^\S+@\S+\.\S+$/.test(email) ||
    !ALLOWED_SLOTS.has(time)
  ) {
    return NextResponse.json(
      { ok: false, error: "Pflichtfelder fehlen oder ungültig." },
      { status: 400 }
    );
  }

  const dateObj = new Date(date);
  if (Number.isNaN(dateObj.getTime())) {
    return NextResponse.json(
      { ok: false, error: "Ungültiges Datum." },
      { status: 400 }
    );
  }

  // Plausibility window: not in the (real) past, not more than a year ahead.
  // Kept TZ-tolerant (24 h back-buffer) so legit bookings near midnight aren't rejected.
  const nowMs = Date.now();
  const dateMs = dateObj.getTime();
  if (dateMs < nowMs - 24 * 60 * 60_000 || dateMs > nowMs + 365 * 24 * 60 * 60_000) {
    return NextResponse.json(
      { ok: false, error: "Datum außerhalb des buchbaren Zeitraums." },
      { status: 400 }
    );
  }

  const dateLong = formatDateLong(dateObj);
  const endTime = addMinutes(time, 30);
  const booking: Booking = {
    name,
    email,
    phone,
    topic,
    dateLong,
    time,
    endTime,
  };

  if (!resend) {
    console.warn(
      "[booking] RESEND_API_KEY not set — booking received but no mail sent",
      booking
    );
    return NextResponse.json({ ok: true, mode: "dev" });
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: SENDER,
        to: email,
        replyTo: SUPPORT_EMAIL,
        subject: `Termin bestätigt · ${dateLong} um ${time} Uhr`,
        html: customerEmail(booking),
      }),
      resend.emails.send({
        from: SENDER,
        to: HOST_EMAIL,
        replyTo: email,
        subject: `Neue Buchung: ${name} · ${dateLong} · ${time} Uhr`,
        html: hostEmail(booking),
      }),
    ]);
  } catch (err) {
    console.error("[booking] resend error", err);
    return NextResponse.json(
      { ok: false, error: "E-Mail-Versand fehlgeschlagen." },
      { status: 500 }
    );
  }

  return NextResponse.json({ ok: true });
}
