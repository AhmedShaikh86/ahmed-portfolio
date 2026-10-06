import { useState } from "react";
import { motion } from "framer-motion";
import { Reveal, SplitText, ease } from "./Reveal";
import Magnetic from "./Magnetic";
import { ArrowUpRight, Copy } from "./Icons";
import { contact, profile } from "../data";
import { scrollToId } from "../scroll";

export default function Contact() {
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      location.href = `mailto:${contact.email}`;
    }
  };

  const links = [
    { label: "Email", href: `mailto:${contact.email}`, value: contact.email },
    { label: "WhatsApp", href: `https://wa.me/${contact.whatsapp}`, value: contact.phone },
    { label: "GitHub", href: contact.github, value: "AhmedShaikh86" },
    { label: "LinkedIn", href: contact.linkedin, value: "in/shaikh02" },
  ];

  return (
    <section className="contact" id="contact">
      <div className="container contact-grid">
        <div>
          <h2 className="contact-title">
            <SplitText text="LET'S" /> <SplitText text="BUILD" className="stroke" delay={0.08} />
            <br />
            <SplitText text="SOMETHING." className="orange" delay={0.16} />
          </h2>
          <Reveal as="p" className="contact-sub" delay={0.2}>
            I'm currently open to full-time roles, freelance projects and full-stack builds. Have an idea? Let's talk.
          </Reveal>
          <Reveal className="contact-actions" delay={0.3}>
            <Magnetic>
              <button className="btn btn-primary" onClick={copyEmail}>
                <Copy /> {copied ? "Email copied!" : "Copy email"}
              </button>
            </Magnetic>
            <Magnetic>
              <a className="btn btn-ghost" href={`mailto:${contact.email}`}>Say hello</a>
            </Magnetic>
          </Reveal>
        </div>

        <ul className="contact-links">
          {links.map((l, i) => (
            <motion.li
              key={l.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease, delay: i * 0.08 }}
            >
              <a href={l.href} target="_blank" rel="noreferrer">
                <span className="cl-label">{l.label}</span>
                <span className="cl-value">{l.value}</span>
                <ArrowUpRight />
              </a>
            </motion.li>
          ))}
        </ul>
      </div>

      <footer className="footer container">
        <span>© {new Date().getFullYear()} {profile.fullName}. All rights reserved.</span>
        <button onClick={() => scrollToId("home")}>Back to top ↑</button>
        <span>Engineered in Karachi.</span>
      </footer>
    </section>
  );
}
