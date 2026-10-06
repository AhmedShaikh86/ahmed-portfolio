import { motion } from "framer-motion";

export const ease = [0.22, 1, 0.36, 1];

/* Har lafz neeche se upar slide ho kar aata hai (mask ke andar) */
export function SplitText({ text, className = "", delay = 0, stagger = 0.06, as: Tag = "span", once = true }) {
  const words = text.split(" ");
  return (
    <Tag className={className} aria-label={text}>
      {words.map((w, i) => (
        <span className="split-mask" key={i} aria-hidden="true">
          <motion.span
            className="split-word"
            initial={{ y: "110%", rotate: 4 }}
            whileInView={{ y: "0%", rotate: 0 }}
            viewport={{ once, margin: "-8% 0px" }}
            transition={{ duration: 1, ease, delay: delay + i * stagger }}
          >
            {w}
          </motion.span>
          {i < words.length - 1 && " "}
        </span>
      ))}
    </Tag>
  );
}

/* Simple fade + slide-up jab element screen par aaye */
export function Reveal({ children, delay = 0, y = 40, className = "", as = "div", ...rest }) {
  const M = motion[as];
  return (
    <M
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-8% 0px" }}
      transition={{ duration: 0.9, ease, delay }}
      {...rest}
    >
      {children}
    </M>
  );
}

/* Section ka chhota label: "THE PROFILE / 01" */
export function Label({ children, index }) {
  return (
    <Reveal className="label" y={16}>
      <span className="label-dot" />
      {children}
      {index && <span className="label-index"> / {index}</span>}
    </Reveal>
  );
}
