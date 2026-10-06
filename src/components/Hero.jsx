import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ease } from "./Reveal";
import { Github, Linkedin } from "./Icons";
import { contact, profile } from "../data";

const up = (ready, delay) => ({
  initial: { y: "110%" },
  animate: ready ? { y: "0%" } : {},
  transition: { duration: 1.1, ease, delay },
});
const fade = (ready, delay, y = 20) => ({
  initial: { opacity: 0, y },
  animate: ready ? { opacity: 1, y: 0 } : {},
  transition: { duration: 1, ease, delay },
});

export default function Hero({ ready }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const photoY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const photoScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["0%", "-25%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-40%"]);
  const fadeOut = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section className="hero" id="home" ref={ref}>
      {/* Peeche bada halka lafz */}
      <motion.div className="hero-word" style={{ x: wordX }} aria-hidden="true">
        <motion.span {...fade(ready, 0.2, 80)}>{profile.heroWord}</motion.span>
      </motion.div>

      {/* Orange glow + photo (photo par koi card nahi) */}
      <motion.div className="hero-glow" {...fade(ready, 0.3, 0)} />
      <motion.div className="hero-photo-wrap" style={{ y: photoY, scale: photoScale }}>
        <motion.img
          src={profile.photo}
          alt={profile.fullName}
          className="hero-photo"
          initial={{ opacity: 0, y: 120, filter: "blur(10px)" }}
          animate={ready ? { opacity: 1, y: 0, filter: "blur(0px)" } : {}}
          transition={{ duration: 1.4, ease, delay: 0.15 }}
        />
      </motion.div>

      <motion.div className="hero-ui" style={{ y: textY, opacity: fadeOut }}>
        <div className="hero-top">
          <div className="hero-name">
            <h1>
              <span className="mask"><motion.span className="orange" {...up(ready, 0.35)}>{profile.firstName}</motion.span></span>{" "}
              <span className="mask"><motion.span {...up(ready, 0.45)}>{profile.lastName}</motion.span></span>
            </h1>
            <motion.p {...fade(ready, 0.7)}>{profile.title}</motion.p>
          </div>
          <motion.div className="hero-tagline" {...fade(ready, 0.8)}>
            <em>{profile.taglineTop}</em>
            <span>{profile.taglineBottom}</span>
          </motion.div>
        </div>

        <div className="hero-bottom">
          <motion.div className="hero-socials" {...fade(ready, 1)}>
            <a href={contact.linkedin} target="_blank" rel="noreferrer"><i><Linkedin /></i>LinkedIn</a>
            <a href={contact.github} target="_blank" rel="noreferrer"><i><Github /></i>GitHub</a>
          </motion.div>
          <h2 className="hero-role">
            <span className="mask"><motion.span className="orange" {...up(ready, 0.6)}>Full Stack</motion.span></span>
            <span className="mask"><motion.span {...up(ready, 0.7)}>Developer</motion.span></span>
          </h2>
        </div>

        <motion.div className="hero-line" initial={{ scaleX: 0 }} animate={ready ? { scaleX: 1 } : {}} transition={{ duration: 1.4, ease, delay: 0.9 }} />
        <motion.p className="hero-intro" {...fade(ready, 1.1)}>{profile.intro}</motion.p>
      </motion.div>
    </section>
  );
}
