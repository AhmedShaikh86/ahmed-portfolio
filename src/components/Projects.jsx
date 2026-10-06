import { useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Label, Reveal, SplitText, ease } from "./Reveal";
import Magnetic from "./Magnetic";
import { ArrowUpRight, Github } from "./Icons";
import { contact, projects } from "../data";

// image khali ho to live site ka screenshot online service se aata hai
const autoShot = url =>
  `https://api.microlink.io/?url=${encodeURIComponent(url)}&screenshot=true&meta=false&embed=screenshot.url&viewport.width=1440&viewport.height=900`;

function Work({ p, index, total, onActive }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const src = p.image || (p.live ? autoShot(p.live) : "");

  return (
    <motion.article
      className="work"
      ref={ref}
      onViewportEnter={() => onActive(index)}
      viewport={{ margin: "-45% 0px -45% 0px" }}
    >
      <div className="work-info">
        <Reveal className="work-meta" y={20}>
          <span className="work-index">{String(index + 1).padStart(2, "0")}</span>
          <span className="work-cat">{p.category}</span>
        </Reveal>
        <h3 className="work-title">
          <SplitText text={p.title.toUpperCase()} />
          <br />
          <SplitText text={(p.subtitle || "").toUpperCase()} className="dim" delay={0.08} />
        </h3>
        <motion.div
          className="work-rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease, delay: 0.2 }}
        />
        <Reveal as="p" className="work-desc" delay={0.15}>{p.description}</Reveal>
        <Reveal className="work-stack" delay={0.2}>
          <small>Stack & Architecture</small>
          <span>{p.tags.join(" / ")}</span>
        </Reveal>
      </div>

      <div className="work-media">
        <motion.a
          href={p.live || p.code}
          target="_blank"
          rel="noreferrer"
          className="work-img"
          data-cursor
          initial={{ clipPath: "inset(100% 0% 0% 0% round 18px)" }}
          whileInView={{ clipPath: "inset(0% 0% 0% 0% round 18px)" }}
          viewport={{ once: true, margin: "-10% 0px" }}
          transition={{ duration: 1.3, ease }}
        >
          <motion.img src={src} alt={`${p.title} screenshot`} loading="lazy" style={{ y: imgY }} />
          <span className="work-img-hover">View live <ArrowUpRight /></span>
        </motion.a>
        <div className="work-links">
          {p.live && (
            <Magnetic>
              <a className="explore" href={p.live} target="_blank" rel="noreferrer">
                Explore live project <i><ArrowUpRight /></i>
              </a>
            </Magnetic>
          )}
          {p.code && (
            <a className="code-link" href={p.code} target="_blank" rel="noreferrer"><Github /> Code</a>
          )}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const featured = projects.filter(p => p.featured);
  const others = projects.filter(p => !p.featured);
  const [active, setActive] = useState(0);

  return (
    <section className="section projects" id="work">
      <div className="container">
        <div className="projects-head">
          <div>
            <Label index="02">Featured Projects</Label>
            <h2 className="big-title">
              <SplitText text="SELECTED" />
              <br />
              <SplitText text="WORKS." className="orange" delay={0.1} />
            </h2>
          </div>
          <Reveal as="p" className="projects-sub" delay={0.2}>
            Real, deployed products — from AI dashboards to e-commerce stores. Click any project to open it live.
          </Reveal>
        </div>

        <div className="works">
          <div className="works-counter" aria-hidden="true">
            <span className="cur">{String(active + 1).padStart(2, "0")}</span>
            <span className="sep">/</span>
            <span>{String(featured.length).padStart(2, "0")}</span>
            <div className="dots">
              {featured.map((_, i) => <i key={i} className={i === active ? "on" : ""} />)}
            </div>
          </div>
          {featured.map((p, i) => (
            <Work key={p.title} p={p} index={i} total={featured.length} onActive={setActive} />
          ))}
        </div>

        <div className="more-head">
          <Reveal as="h3">More on <span className="orange">GitHub</span></Reveal>
          <Reveal>
            <a className="link-line" href={`${contact.github}?tab=repositories`} target="_blank" rel="noreferrer">
              View all repositories <ArrowUpRight />
            </a>
          </Reveal>
        </div>
        <div className="more-grid">
          {others.map((p, i) => (
            <motion.a
              key={p.title}
              href={p.code || p.live || undefined}
              target="_blank"
              rel="noreferrer"
              className={`mini ${p.code || p.live ? "" : "no-link"}`}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-5% 0px" }}
              transition={{ duration: 0.8, ease, delay: (i % 3) * 0.08 }}
            >
              <div className="mini-top">
                <span className="mini-cat">{p.category}</span>
                {(p.code || p.live) && <ArrowUpRight className="mini-arrow" />}
              </div>
              <h4>{p.title}</h4>
              <p>{p.description}</p>
              <span className="mini-tags">{p.tags.join(" · ")}</span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
