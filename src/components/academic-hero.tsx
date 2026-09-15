"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function AcademicHero({
  eyebrow,
  title,
  description,
  actions,
  home = false,
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  home?: boolean;
}) {
  return (
    <section className={home ? "academic-hero academic-hero--home" : "academic-hero"}>
      <div className="academic-hero__grid" aria-hidden="true" />
      <div className="academic-hero__glow academic-hero__glow--one" aria-hidden="true" />
      <div className="academic-hero__glow academic-hero__glow--two" aria-hidden="true" />

      <div className="academic-hero__inner">
        <motion.div
          className="academic-hero__copy"
          initial={{ opacity: 0, y: 22 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="academic-hero__eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p className="academic-hero__description">{description}</p>
          {actions && <div className="academic-hero__actions">{actions}</div>}
        </motion.div>

        <div className="academic-hero__art" aria-hidden="true">
          <div className="academic-orbit academic-orbit--outer">
            <span className="academic-orbit__dot academic-orbit__dot--one" />
            <span className="academic-orbit__dot academic-orbit__dot--two" />
          </div>
          <div className="academic-orbit academic-orbit--middle">
            <span className="academic-orbit__dot academic-orbit__dot--three" />
          </div>
          <div className="academic-orbit academic-orbit--inner" />

          <div className="academic-symbol">
            <span className="academic-symbol__page academic-symbol__page--left" />
            <span className="academic-symbol__page academic-symbol__page--right" />
            <span className="academic-symbol__spine" />
          </div>

          <span className="academic-float academic-float--one">A</span>
          <span className="academic-float academic-float--two">01</span>
          <span className="academic-float academic-float--three">+</span>
          <span className="academic-line academic-line--one" />
          <span className="academic-line academic-line--two" />
          <span className="academic-line academic-line--three" />
        </div>
      </div>

      <div className="academic-hero__bottom">
        <span>Knowledge</span>
        <i />
        <span>Character</span>
        <i />
        <span>Opportunity</span>
      </div>
    </section>
  );
}
