import Image from "next/image";

/**
 * Geteilte Aurum-Ornamente & UI-Primitive für die neue glockner.ai-Version
 * (/v2, /training, /produkt). Reine Präsentationskomponenten — server-safe.
 * Bewusst NICHT in die bestehenden lux-Seiten zurückportiert (die bleiben
 * self-contained).
 */

export function Triquetra({
  size = 36,
  className = "",
  glowing = false,
}: {
  size?: number;
  className?: string;
  glowing?: boolean;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <defs>
        <linearGradient id="aur-grad" x1="0" y1="0" x2="100" y2="100">
          <stop offset="0%" stopColor="#d8bd8a" />
          <stop offset="55%" stopColor="#c9a86a" />
          <stop offset="100%" stopColor="#06b6d4" />
        </linearGradient>
        {glowing && (
          <radialGradient id="aur-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f0e0b8" stopOpacity="0.95" />
            <stop offset="35%" stopColor="#d8bd8a" stopOpacity="0.55" />
            <stop offset="100%" stopColor="#c9a86a" stopOpacity="0" />
          </radialGradient>
        )}
      </defs>
      <circle cx="50" cy="38" r="22" stroke="url(#aur-grad)" strokeWidth="0.9" opacity="0.85" />
      <circle cx="34" cy="62" r="22" stroke="url(#aur-grad)" strokeWidth="0.9" opacity="0.85" />
      <circle cx="66" cy="62" r="22" stroke="url(#aur-grad)" strokeWidth="0.9" opacity="0.85" />
      {glowing && (
        <>
          <circle cx="50" cy="50" r="14" fill="url(#aur-core)" className="aurum-pulse-halo" />
          <circle cx="50" cy="50" r="2.5" fill="#f0e0b8" className="aurum-pulse-core" />
        </>
      )}
    </svg>
  );
}

export function VesicaSeal({ size = 28, className = "" }: { size?: number; className?: string }) {
  return (
    <svg
      width={size * 1.6}
      height={size}
      viewBox="0 0 80 50"
      fill="none"
      aria-hidden="true"
      className={className}
    >
      <circle cx="32" cy="25" r="18" stroke="#c9a86a" strokeWidth="0.7" opacity="0.75" />
      <circle cx="48" cy="25" r="18" stroke="#06b6d4" strokeWidth="0.7" opacity="0.75" />
    </svg>
  );
}

export function GoldDivider({ width = "narrow" }: { width?: "narrow" | "wide" }) {
  const w = width === "wide" ? "w-24 md:w-40" : "w-12 md:w-20";
  return (
    <div className="flex items-center justify-center gap-3" aria-hidden="true">
      <span className={`block ${w} h-px bg-gradient-to-r from-transparent to-aurum/55`} />
      <span className="block w-1.5 h-1.5 rounded-full bg-aurum shadow-[0_0_12px_rgba(201,168,106,0.6)]" />
      <span className={`block ${w} h-px bg-gradient-to-l from-transparent to-aurum/55`} />
    </div>
  );
}

export function FlowerOfLifeBackdrop({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 600 600"
      fill="none"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid meet"
    >
      <g stroke="#c9a86a" strokeWidth="0.4" opacity="0.18">
        {(() => {
          const r = 60;
          const dx = r * Math.sqrt(3);
          const dy = r * 1.5;
          const circles: { cx: number; cy: number }[] = [];
          for (let row = -3; row <= 3; row++) {
            for (let col = -3; col <= 3; col++) {
              const cx = 300 + col * dx + (row % 2 === 0 ? 0 : dx / 2);
              const cy = 300 + row * dy;
              circles.push({ cx, cy });
            }
          }
          return circles.map((c, i) => <circle key={i} cx={c.cx} cy={c.cy} r={r} />);
        })()}
      </g>
    </svg>
  );
}

export function ArrowRight() {
  return (
    <svg width="14" height="10" viewBox="0 0 18 14" aria-hidden="true">
      <path
        d="M1 7h15m0 0L10 1m6 6l-6 6"
        stroke="currentColor"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Check({ className = "text-aurum" }: { className?: string }) {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      className={`flex-shrink-0 mt-0.5 ${className}`}
    >
      <path
        d="M5 12.5l4 4L19 6.5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Zirkuläres, gold-gerahmtes Bild-Siegel (rotierender Ring + Glow). */
export function PillarSeal({
  src,
  alt,
  size = "w-32 md:w-40",
}: {
  src: string;
  alt: string;
  size?: string;
}) {
  return (
    <div className={`relative ${size} aspect-square`}>
      <div aria-hidden="true" className="absolute inset-[-10px] aurum-ring aurum-rotate-slow opacity-80" />
      <div
        aria-hidden="true"
        className="absolute inset-0 rounded-full"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(201,168,106,0.35), rgba(201,168,106,0.9), rgba(6,182,212,0.6), rgba(201,168,106,0.35))",
          padding: "1px",
          WebkitMask: "linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
        }}
      />
      <div className="absolute inset-1 rounded-full overflow-hidden border border-white/10 bg-brand-card">
        <Image
          src={src}
          alt={alt}
          width={360}
          height={360}
          className="h-full w-full object-cover"
          sizes="(min-width: 768px) 160px, 128px"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 rounded-full blur-3xl aurum-breathe"
        style={{ background: "radial-gradient(circle, rgba(201,168,106,0.25), transparent 65%)" }}
      />
    </div>
  );
}

/** Standard-Gold-Button-Klassen (CTA). */
export const goldBtn =
  "inline-flex items-center justify-center gap-2.5 rounded-xl font-bold text-brand-dark bg-gradient-to-r from-aurum-soft via-aurum to-aurum-deep border border-aurum/60 hover:from-aurum hover:via-aurum-soft hover:to-aurum hover:border-aurum-soft hover:-translate-y-0.5 transition-all duration-500 shadow-[0_8px_28px_-8px_rgba(201,168,106,0.55)] hover:shadow-[0_14px_40px_-10px_rgba(201,168,106,0.7)]";

/** Sekundär-Button (Outline). */
export const ghostBtn =
  "inline-flex items-center justify-center gap-2 rounded-xl font-semibold text-slate-200 border border-white/15 hover:border-aurum/45 hover:text-aurum transition-all";
