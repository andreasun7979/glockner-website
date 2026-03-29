import { NextResponse } from "next/server";
import { supabase } from "@/lib/supabase";

export async function POST(request: Request) {
  const body = await request.json();

  const { name, email, phone, company, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, E-Mail und Nachricht sind Pflichtfelder." },
      { status: 400 }
    );
  }

  const { error } = await supabase.from("leads").insert({
    name,
    email,
    phone: phone || null,
    company: company || null,
    message,
    source: "website",
  });

  if (error) {
    return NextResponse.json(
      { error: "Fehler beim Speichern." },
      { status: 500 }
    );
  }

  return NextResponse.json({ success: true });
}
