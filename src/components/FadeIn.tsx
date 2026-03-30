"use client";

import { useEffect, useRef, type ReactNode } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  className?: string;
  as?: "div" | "section" | "span";
}

export default function FadeIn({ children, delay = 0, className = "", as: Tag = "div" }: FadeInProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (delay) {
            setTimeout(() => el.classList.add("fade-in-visible"), delay);
          } else {
            el.classList.add("fade-in-visible");
          }
          observer.unobserve(el);
        }
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <Tag ref={ref as never} className={`fade-in-hidden ${className}`}>
      {children}
    </Tag>
  );
}
