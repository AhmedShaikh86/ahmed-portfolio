import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

/* Lafz lagatar chalte rehte hain; scroll karne par speed/direction ka feel badalta hai */
export default function Marquee({ words, reverse = false, outline = false }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const x = useTransform(scrollYProgress, [0, 1], reverse ? ["-20%", "0%"] : ["0%", "-20%"]);
  const list = [...words, ...words, ...words];

  return (
    <div className={`marquee ${outline ? "outline" : ""}`} ref={ref} aria-hidden="true">
      <motion.div className="marquee-shift" style={{ x }}>
        <div className={`marquee-track ${reverse ? "rev" : ""}`}>
          {[0, 1].map(k => (
            <div className="marquee-group" key={k}>
              {list.map((w, i) => (
                <span key={i}>{w}<i>✦</i></span>
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
