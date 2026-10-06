import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

/* Desktop par custom cursor: chhota dot + peeche follow karta ring */
export default function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hover, setHover] = useState(false);
  const x = useMotionValue(-100), y = useMotionValue(-100);
  const rx = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const ry = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches) return;
    setEnabled(true);
    const move = e => {
      x.set(e.clientX); y.set(e.clientY);
      setHover(!!e.target.closest("a, button, [data-cursor]"));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;
  return (
    <>
      <motion.div className="cursor-dot" style={{ x, y }} />
      <motion.div className={`cursor-ring ${hover ? "is-hover" : ""}`} style={{ x: rx, y: ry }} />
    </>
  );
}
