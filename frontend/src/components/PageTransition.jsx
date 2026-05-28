import { useLocation } from "react-router-dom";
import { useEffect, useRef } from "react";

export default function PageTransition({ children }) {
  const location = useLocation();
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(12px)";
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        el.style.opacity = "1";
        el.style.transform = "translateY(0)";
      });
    });
  }, [location.pathname]);

  return (
    <div
      ref={ref}
      style={{
        transition: "opacity 0.4s ease, transform 0.4s ease",
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  );
}