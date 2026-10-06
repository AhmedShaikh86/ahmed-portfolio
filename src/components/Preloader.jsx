import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ease } from "./Reveal";
import { profile } from "../data";

/* Shuru mein 0 → 100 counter, phir parda upar uth jata hai */
export default function Preloader({ onDone }) {
  const [n, setN] = useState(0);

  useEffect(() => {
    let v = 0;
    const id = setInterval(() => {
      v = Math.min(100, v + Math.ceil(Math.random() * 9));
      setN(v);
      if (v === 100) { clearInterval(id); setTimeout(onDone, 350); }
    }, 45);
    return () => clearInterval(id);
  }, [onDone]);

  return (
    <motion.div className="preloader" exit={{ y: "-100%" }} transition={{ duration: 1, ease }}>
      <div className="pre-name">
        <motion.span initial={{ y: "100%" }} animate={{ y: 0 }} transition={{ duration: 0.8, ease }}>
          {profile.firstName} <em>{profile.lastName}</em>
        </motion.span>
      </div>
      <div className="pre-bar"><motion.i style={{ scaleX: n / 100 }} /></div>
      <div className="pre-count">{String(n).padStart(3, "0")}</div>
    </motion.div>
  );
}
