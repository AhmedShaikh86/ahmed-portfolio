import { motion } from "framer-motion";
import { ease } from "./Reveal";
import { ArrowUpRight } from "./Icons";
import { services } from "../data";

/* Hover par row orange se bhar jati hai */
export default function Services() {
  return (
    <section className="services">
      <div className="container">
        {services.map((s, i) => (
          <motion.div
            className="service-row"
            key={s.title}
            data-cursor
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10% 0px" }}
            transition={{ duration: 0.9, ease, delay: i * 0.08 }}
          >
            <span className="service-num">0{i + 1}</span>
            <h3>{s.title}</h3>
            <p>{s.text}</p>
            <ArrowUpRight className="service-arrow" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
