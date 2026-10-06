import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Reveal, SplitText } from "./Reveal";
import { philosophy } from "../data";

/* Bade statement ke lafz scroll ke saath ek-ek karke roshan hote hain */
function ScrollWords({ text }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 85%", "end 45%"] });
  const words = text.split(" ");
  return (
    <p className="statement" ref={ref}>
      {words.map((w, i) => {
        const start = i / words.length;
        return <Word key={i} progress={scrollYProgress} range={[start, start + 1 / words.length]} accent={w.startsWith("*")}>{w.replace("*", "")}</Word>;
      })}
    </p>
  );
}
function Word({ children, progress, range, accent }) {
  const opacity = useTransform(progress, range, [0.12, 1]);
  return <motion.span style={{ opacity }} className={accent ? "orange" : ""}>{children} </motion.span>;
}

export default function Philosophy() {
  return (
    <section className="section philosophy">
      <div className="container">
        <ScrollWords text="Building *fast, *reliable and *human-centered digital experiences — one clean commit at a time." />

        <div className="phil-grid">
          {philosophy.map((p, i) => (
            <Reveal className="phil-col" key={p.title} delay={i * 0.12}>
              <span className="phil-label">0{i + 1} /// {p.label}</span>
              <h3><SplitText text={p.title.toUpperCase()} delay={0.1 + i * 0.12} /></h3>
              <p>{p.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
