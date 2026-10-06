import { motion } from "framer-motion";
import { Label, Reveal, SplitText, ease } from "./Reveal";
import { skills } from "../data";

export default function Skills() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <div className="skills-head">
          <div>
            <Label index="03">My Digital Toolkit</Label>
            <h2 className="big-title">
              <SplitText text="THE" />
              <br />
              <SplitText text="ENGINE." className="orange" delay={0.1} />
            </h2>
          </div>
          <Reveal as="p" className="projects-sub" delay={0.2}>
            The technologies I rely on to ship products that work well and look sharp.
          </Reveal>
        </div>

        <div className="skills-grid">
          {skills.map((g, gi) => (
            <motion.div
              className="skill-card"
              key={g.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10% 0px" }}
              transition={{ duration: 0.9, ease, delay: gi * 0.1 }}
              onMouseMove={e => {
                const r = e.currentTarget.getBoundingClientRect();
                e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
                e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
              }}
            >
              <div className="skill-top">
                <span>0{gi + 1}</span>
                <h3>{g.title}</h3>
              </div>
              <ul>
                {g.items.map((s, i) => (
                  <motion.li
                    key={s}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease, delay: gi * 0.1 + i * 0.05 + 0.2 }}
                  >
                    {s}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
