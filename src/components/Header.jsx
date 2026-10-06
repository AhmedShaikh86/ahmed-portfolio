import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ease } from "./Reveal";
import Magnetic from "./Magnetic";
import { Spark } from "./Icons";
import { contact, profile } from "../data";
import { scrollToId } from "../scroll";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "Profile" },
  { id: "work", label: "Works" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Header({ ready }) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    const onKey = e => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const go = id => {
    const wasOpen = open;
    setOpen(false);
    setTimeout(() => scrollToId(id), wasOpen ? 450 : 0);
  };

  return (
    <>
      <motion.header
        className={`header ${scrolled ? "scrolled" : ""}`}
        initial={{ opacity: 0, y: -30 }}
        animate={ready ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1, ease, delay: 0.6 }}
      >
        <Magnetic>
          <button className={`menu-btn ${open ? "open" : ""}`} onClick={() => setOpen(o => !o)} aria-label="Menu" aria-expanded={open}>
            <span /><span /><span />
          </button>
        </Magnetic>

        <ul className="header-roles">
          {profile.roles.slice(0, 3).map(r => <li key={r}>{r}</li>)}
        </ul>

        <Magnetic>
          <button className="contact-pill" onClick={() => go("contact")}>
            Contact <Spark />
          </button>
        </Magnetic>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="menu"
            initial={{ clipPath: "circle(0% at 56px 56px)" }}
            animate={{ clipPath: "circle(150% at 56px 56px)" }}
            exit={{ clipPath: "circle(0% at 56px 56px)" }}
            transition={{ duration: 0.8, ease }}
          >
            <ul>
              {links.map((l, i) => (
                <li key={l.id}>
                  <motion.button
                    onClick={() => go(l.id)}
                    initial={{ y: "110%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "110%" }}
                    transition={{ duration: 0.7, ease, delay: 0.15 + i * 0.06 }}
                  >
                    <small>0{i + 1}</small>{l.label}
                  </motion.button>
                </li>
              ))}
            </ul>
            <motion.div className="menu-foot" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }}>
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
              <div>
                <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a>
                <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
                <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp</a>
              </div>
            </motion.div>
          </motion.nav>
        )}
      </AnimatePresence>
    </>
  );
}
