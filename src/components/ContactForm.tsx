"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const data = {
      name: (form.elements.namedItem("name") as HTMLInputElement).value,
      email: (form.elements.namedItem("email") as HTMLInputElement).value,
      phone: (form.elements.namedItem("phone") as HTMLInputElement).value,
      company: (form.elements.namedItem("company") as HTMLInputElement).value,
      message: (form.elements.namedItem("message") as HTMLTextAreaElement).value,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error();
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="glass rounded-2xl p-8 text-center border border-brand-cyan/20">
        <div className="w-16 h-16 rounded-full bg-brand-cyan/10 flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-brand-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-white mb-2">
          Vielen Dank!
        </h3>
        <p className="text-slate-400">
          Wir haben Ihre Anfrage erhalten und melden uns in Kürze bei Ihnen.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1.5">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 outline-none transition"
            placeholder="Max Mustermann"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1.5">
            E-Mail *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 outline-none transition"
            placeholder="max@unternehmen.at"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1.5">
            Telefon
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 outline-none transition"
            placeholder="+43 ..."
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-slate-300 mb-1.5">
            Unternehmen
          </label>
          <input
            id="company"
            name="company"
            type="text"
            className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 outline-none transition"
            placeholder="Firma GmbH"
          />
        </div>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-1.5">
          Nachricht *
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          className="w-full px-4 py-2.5 bg-white/5 border border-white/10 rounded-lg text-white placeholder-slate-500 focus:ring-2 focus:ring-brand-cyan/50 focus:border-brand-cyan/50 outline-none transition resize-none"
          placeholder="Wie können wir Ihnen helfen?"
        />
      </div>
      {status === "error" && (
        <p className="text-red-400 text-sm">
          Es ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-gradient-to-r from-brand-blue to-brand-cyan text-white px-8 py-3 rounded-lg font-medium hover:shadow-lg hover:shadow-brand-cyan/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Wird gesendet..." : "Anfrage senden"}
      </button>
    </form>
  );
}
