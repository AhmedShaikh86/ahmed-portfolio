import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Lenis from "lenis";
import Preloader from "./components/Preloader";
import Cursor from "./components/Cursor";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Philosophy from "./components/Philosophy";
import Contact from "./components/Contact";
import { marqueeWords } from "./data";
import { lenisRef } from "./scroll";

export default function App() {
  const [loading, setLoading] = useState(true);
  const done = useCallback(() => setLoading(false), []);

  // Page ke upar orange progress line
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 25 });

  // Smooth scrolling (Lenis)
  useEffect(() => {
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ duration: 1.15, smoothWheel: true });
    lenisRef.current = lenis;
    let id;
    const raf = t => { lenis.raf(t); id = requestAnimationFrame(raf); };
    id = requestAnimationFrame(raf);
    return () => { cancelAnimationFrame(id); lenis.destroy(); lenisRef.current = null; };
  }, []);

  // Preloader ke dauran scroll band
  useEffect(() => {
    document.documentElement.classList.toggle("is-loading", loading);
    if (loading) lenisRef.current?.stop(); else lenisRef.current?.start();
  }, [loading]);

  return (
    <>
      <AnimatePresence>{loading && <Preloader onDone={done} />}</AnimatePresence>
      <Cursor />
      <motion.div className="progress" style={{ scaleX: progress }} />
      <div className="noise" aria-hidden="true" />

      <Header ready={!loading} />
      <main>
        <Hero ready={!loading} />
        <Marquee words={marqueeWords} />
        <About />
        <Services />
        <Projects />
        <Marquee words={marqueeWords} reverse outline />
        <Skills />
        <Philosophy />
        <Contact />
      </main>
    </>
  );
}
