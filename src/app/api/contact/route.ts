import { NextResponse } from "next/server";
import { Resend } from "resend";
import { supabase } from "@/lib/supabase";
import { rateLimit, clientIp } from "@/lib/rateLimit";

const HOST_EMAIL = "a.unterkofler@glocknerdigital.at";
// Reply-To für Kundenmails: Antworten sollen ins Support-Postfach.
const SUPPORT_EMAIL = "support@glocknerdigital.at";
const SENDER =
  process.env.RESEND_FROM_EMAIL || "Glockner AI <onboarding@resend.dev>";

const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

function esc(input: unknown) {
  if (input == null) return "";
  return String(input)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

type Lead = {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  source: string;
};

function hostEmail(l: Lead) {
  const phoneRow = l.phone
    ? `<tr><td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;width:32%">Telefon</td><td style="padding:8px 0;font-size:15px">${esc(l.phone)}</td></tr>`
    : "";
  const companyRow = l.company
    ? `<tr><td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;width:32%">Firma</td><td style="padding:8px 0;font-size:15px">${esc(l.company)}</td></tr>`
    : "";
  const sourceRow = l.source
    ? `<tr><td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;width:32%">Quelle</td><td style="padding:8px 0;font-size:13px;font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:#78716c">${esc(l.source)}</td></tr>`
    : "";

  return `<!doctype html>
<html lang="de">
  <body style="margin:0;padding:0;background:#f5f5f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#020617">
    <div style="max-width:560px;margin:32px auto;padding:0 16px">
      <div style="background:#020617;padding:24px 32px;border-radius:16px 16px 0 0">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.28em;text-transform:uppercase;color:#c9a86a;margin-bottom:10px">
          Neue Anfrage
        </div>
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-weight:600;font-size:22px;line-height:1.3;color:#ffffff;letter-spacing:-0.02em">
          ${esc(l.name)}
        </h1>
      </div>
      <div style="background:#ffffff;padding:24px 32px 28px;border-radius:0 0 16px 16px;border:1px solid #e7e5e4;border-top:none">
        <table cellpadding="0" cellspacing="0" role="presentation" style="width:100%">
          <tr>
            <td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;width:32%">Name</td>
            <td style="padding:8px 0;font-size:15px">${esc(l.name)}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c">E-Mail</td>
            <td style="padding:8px 0;font-size:15px"><a href="mailto:${esc(l.email)}" style="color:#06b6d4;text-decoration:none">${esc(l.email)}</a></td>
          </tr>
          ${phoneRow}
          ${companyRow}
          ${sourceRow}
        </table>
        <div style="margin-top:18px">
          <div style="font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;margin-bottom:8px">Nachricht</div>
          <div style="font-size:14px;line-height:1.6;color:#44403c;background:#fafaf9;border:1px solid #e7e5e4;border-radius:8px;padding:14px 16px;white-space:pre-wrap">${esc(l.message)}</div>
        </div>
      </div>
    </div>
  </body>
</html>`;
}

function customerEmail(l: Lead) {
  return `<!doctype html>
<html lang="de">
  <body style="margin:0;padding:0;background:#f5f5f4;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;color:#020617">
    <div style="max-width:560px;margin:32px auto;padding:0 16px">
      <div style="background:#020617;padding:32px 32px 28px;border-radius:16px 16px 0 0">
        <div style="font-size:11px;font-weight:600;letter-spacing:0.28em;text-transform:uppercase;color:#c9a86a;margin-bottom:18px">
          Glockner AI
        </div>
        <h1 style="margin:0;font-family:Georgia,'Times New Roman',serif;font-weight:600;font-size:28px;line-height:1.2;color:#ffffff;letter-spacing:-0.02em">
          Nachricht erhalten<span style="color:#c9a86a">.</span>
        </h1>
      </div>
      <div style="background:#ffffff;padding:32px;border-radius:0 0 16px 16px;border:1px solid #e7e5e4;border-top:none">
        <p style="margin:0 0 18px;font-size:16px;line-height:1.6">Hallo ${esc(l.name)},</p>
        <p style="margin:0 0 22px;font-size:16px;line-height:1.6">
          Vielen Dank f&uuml;r Ihre Anfrage. Wir melden uns innerhalb eines Werktages bei Ihnen.
        </p>
        <div style="font-size:11px;font-weight:600;letter-spacing:0.18em;text-transform:uppercase;color:#78716c;margin-bottom:8px">Ihre Nachricht</div>
        <div style="font-size:14px;line-height:1.6;color:#44403c;background:#fafaf9;border:1px solid #e7e5e4;border-radius:8px;padding:14px 16px;white-space:pre-wrap">${esc(l.message)}</div>
        <div style="height:1px;background:#e7e5e4;margin:28px 0"></div>
        <p style="margin:0;font-size:14px;line-height:1.7;color:#78716c">
          <strong style="color:#020617">Andreas Unterkofler</strong><br>
          <span style="color:#a8a29e">Glockner Digital &middot; glockner.ai &middot; +43 650 660 5000</span>
        </p>
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
      { error: "Invalid JSON" },
      { status: 400 }
    );
  }

  // Honeypot: a hidden field no human fills. If present, silently accept and drop.
  if (typeof body.hp === "string" && body.hp.trim() !== "") {
    return NextResponse.json({ success: true });
  }

  // Rate limit: max 5 submissions / 10 min per IP (best-effort, see lib/rateLimit).
  if (!rateLimit(`contact:${clientIp(request)}`)) {
    return NextResponse.json(
      { error: "Zu viele Anfragen. Bitte versuchen Sie es später erneut." },
      { status: 429 }
    );
  }

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const phone = typeof body.phone === "string" ? body.phone.trim() : "";
  const company = typeof body.company === "string" ? body.company.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";
  const source = typeof body.source === "string" ? body.source.trim() : "website";

  if (!name || !email || !message || !/^\S+@\S+\.\S+$/.test(email)) {
    return NextResponse.json(
      { error: "Name, gültige E-Mail und Nachricht sind Pflichtfelder." },
      { status: 400 }
    );
  }

  const lead: Lead = { name, email, phone, company, message, source };

  // 1) Persist lead in Supabase (best-effort — we don't fail the request if this fails)
  try {
    if (supabase) {
      const { error } = await supabase.from("leads").insert({
        name,
        email,
        phone: phone || null,
        company: company || null,
        message,
        source,
      });
      if (error) console.error("[contact] supabase insert error", error);
    }
  } catch (err) {
    console.error("[contact] supabase exception", err);
  }

  // 2) Send mails via Resend (notification + confirmation)
  if (!resend) {
    console.warn("[contact] RESEND_API_KEY missing — lead saved but no mail sent", lead);
    return NextResponse.json({ success: true, mode: "dev" });
  }

  try {
    await Promise.all([
      resend.emails.send({
        from: SENDER,
        to: HOST_EMAIL,
        replyTo: email,
        subject: `Neue Anfrage: ${name}`,
        html: hostEmail(lead),
      }),
      resend.emails.send({
        from: SENDER,
        to: email,
        replyTo: SUPPORT_EMAIL,
        subject: "Wir haben Ihre Nachricht erhalten",
        html: customerEmail(lead),
      }),
    ]);
  } catch (err) {
    console.error("[contact] resend error", err);
    // Lead was saved already — don't fail the user-facing request just because mail failed
    return NextResponse.json({
      success: true,
      mailWarning: "Lead gespeichert, E-Mail konnte nicht versendet werden.",
    });
  }

  return NextResponse.json({ success: true });
}
