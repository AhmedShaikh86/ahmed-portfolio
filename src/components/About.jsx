import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Label, Reveal, SplitText, ease } from "./Reveal";
import Magnetic from "./Magnetic";
import { Download, Mail, Pin } from "./Icons";
import { education, experience, profile } from "../data";
import { scrollToId } from "../scroll";

function TimelineItem({ period, title, sub, text, note, i }) {
  return (
    <motion.div
      className="tl-item"
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-10% 0px" }}
      transition={{ duration: 0.9, ease, delay: i * 0.1 }}
    >
      <span className="tl-period">{period}</span>
      <h3>{title}</h3>
      <p className="tl-sub">{sub}{note && <b> · {note}</b>}</p>
      {text && <p className="tl-text">{text}</p>}
    </motion.div>
  );
}

// CV ki PDF public/ mein ho tabhi download button dikhao
function useFileExists(url) {
  const [ok, setOk] = useState(false);
  useEffect(() => {
    fetch(url, { method: "HEAD" })
      .then(r => setOk(r.ok && (r.headers.get("content-type") || "").includes("pdf")))
      .catch(() => setOk(false));
  }, [url]);
  return ok;
}

export default function About() {
  const hasResume = useFileExists(profile.resume);
  return (
    <section className="section about" id="about">
      <div className="container about-grid">
        <div className="about-left">
          <Label index="01">The Profile</Label>
          <h2 className="big-title">
            <SplitText text={profile.firstName.toUpperCase()} />
            <br />
            <SplitText text={`${profile.lastName.toUpperCase()}.`} className="orange" delay={0.1} />
          </h2>
          {profile.bio.map((p, i) => (
            <Reveal as="p" className="about-bio" key={i} delay={0.1 * i}>{p}</Reveal>
          ))}
          <Reveal className="about-actions" delay={0.2}>
            {hasResume && (
              <Magnetic>
                <a className="btn btn-primary" href={profile.resume} download>
                  <Download /> Download Resume
                </a>
              </Magnetic>
            )}
            <Magnetic>
              <button className={`btn ${hasResume ? "btn-ghost" : "btn-primary"}`} onClick={() => scrollToId("contact")}>
                <Mail /> Get in touch
              </button>
            </Magnetic>
          </Reveal>
          <Reveal className="about-loc" delay={0.3}>
            <Pin /> {profile.location}
          </Reveal>
        </div>

        <div className="about-right">
          <Label>Experience</Label>
          <div className="timeline">
            {experience.map((x, i) => (
              <TimelineItem key={x.role} i={i} period={x.period} title={x.role} sub={x.company} text={x.text} />
            ))}
          </div>

          <Label>Education</Label>
          <div className="timeline">
            {education.map((e, i) => (
              <TimelineItem key={e.degree} i={i} period={e.period} title={e.degree} sub={e.school} note={e.note} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
