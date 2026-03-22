// ─────────────────────────────────────────────
//  Shared Utilities & Hooks
// ─────────────────────────────────────────────
import { useState, useEffect, useRef } from "react";

/** Fires once when the referenced element enters the viewport */
export function useIntersection(ref, options = {}) {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.15, ...options }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return visible;
}

/** Wraps children in a fade-up reveal animation triggered by scroll */
export function FadeIn({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  const visible = useIntersection(ref);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {children}
    </div>
  );
}