"use client";

import { motion } from "framer-motion";
import {
  BookOpen,
  GraduationCap,
  Image as ImageIcon,
  Languages,
  Library,
  MapPin,
  Microscope,
  MonitorUp,
  Sparkles,
  UsersRound,
} from "lucide-react";
import type { ReactNode } from "react";

export type HeroVariant =
  | "home"
  | "about"
  | "history"
  | "academics"
  | "student-life"
  | "gallery"
  | "admissions"
  | "contact";

function HomeVisual() {
  return (
    <div className="hero-visual hero-visual--home">
      <div className="home-core-ring home-core-ring--one" />
      <div className="home-core-ring home-core-ring--two" />
      <div className="home-core-ring home-core-ring--three" />
      <div className="home-core">
        <BookOpen size={54} strokeWidth={1.35} />
      </div>
      <span className="home-topic home-topic--one">EN</span>
      <span className="home-topic home-topic--two">SCI</span>
      <span className="home-topic home-topic--three">ICT</span>
      <span className="home-topic home-topic--four">ART</span>
      <i className="home-ray home-ray--one" />
      <i className="home-ray home-ray--two" />
      <i className="home-ray home-ray--three" />
      <i className="home-ray home-ray--four" />
    </div>
  );
}

function AboutVisual() {
  return (
    <div className="hero-visual hero-visual--about">
      <div className="about-shield">
        <div className="about-shield__inner">
          <Sparkles size={42} strokeWidth={1.35} />
        </div>
      </div>
      <div className="about-layer about-layer--one"><span>Purpose</span></div>
      <div className="about-layer about-layer--two"><span>Community</span></div>
      <div className="about-layer about-layer--three"><span>Growth</span></div>
      <i className="about-axis about-axis--x" />
      <i className="about-axis about-axis--y" />
    </div>
  );
}

function HistoryVisual() {
  return (
    <div className="hero-visual hero-visual--history">
      <div className="history-path" />
      <div className="history-node history-node--one">
        <span>1990s</span><i />
      </div>
      <div className="history-node history-node--two">
        <span>Growth</span><i />
      </div>
      <div className="history-node history-node--three">
        <span>2014</span><i />
      </div>
      <div className="history-node history-node--four">
        <span>Today</span><i />
      </div>
      <div className="history-pulse" />
      <div className="history-year">30+</div>
      <small>years of educational impact</small>
    </div>
  );
}

function AcademicsVisual() {
  return (
    <div className="hero-visual hero-visual--academics">
      <svg className="academic-network-lines" viewBox="0 0 400 400" aria-hidden="true">
        <path d="M200 200 L82 92 M200 200 L322 86 M200 200 L334 292 M200 200 L76 304" />
        <circle cx="200" cy="200" r="94" />
      </svg>
      <div className="academic-network-core"><GraduationCap size={48} strokeWidth={1.35}/></div>
      <div className="academic-node academic-node--one"><Languages size={24}/><span>English</span></div>
      <div className="academic-node academic-node--two"><Microscope size={24}/><span>Science</span></div>
      <div className="academic-node academic-node--three"><MonitorUp size={24}/><span>ICT</span></div>
      <div className="academic-node academic-node--four"><Library size={24}/><span>Reading</span></div>
      <span className="academic-data academic-data--one">01</span>
      <span className="academic-data academic-data--two">A+</span>
    </div>
  );
}

function StudentLifeVisual() {
  return (
    <div className="hero-visual hero-visual--student-life">
      <div className="student-community-ring" />
      <div className="student-community-core"><UsersRound size={52} strokeWidth={1.35}/></div>
      <div className="student-avatar student-avatar--one"><span /></div>
      <div className="student-avatar student-avatar--two"><span /></div>
      <div className="student-avatar student-avatar--three"><span /></div>
      <div className="student-bubble student-bubble--one">Learn</div>
      <div className="student-bubble student-bubble--two">Belong</div>
      <div className="student-bubble student-bubble--three">Grow</div>
      <i className="student-star student-star--one">✦</i>
      <i className="student-star student-star--two">✦</i>
    </div>
  );
}

function GalleryVisual() {
  return (
    <div className="hero-visual hero-visual--gallery">
      <div className="gallery-frame gallery-frame--back" />
      <div className="gallery-frame gallery-frame--middle" />
      <div className="gallery-frame gallery-frame--front">
        <ImageIcon size={48} strokeWidth={1.3}/>
        <span>The Oasis</span>
      </div>
      <div className="gallery-scanline" />
      <span className="gallery-index gallery-index--one">01</span>
      <span className="gallery-index gallery-index--two">02</span>
      <span className="gallery-index gallery-index--three">03</span>
    </div>
  );
}

function AdmissionsVisual() {
  return (
    <div className="hero-visual hero-visual--admissions">
      <svg className="admission-route" viewBox="0 0 420 360" aria-hidden="true">
        <path d="M46 282 C88 282 92 205 144 205 C198 205 192 105 250 105 C310 105 308 52 372 52" />
      </svg>
      <div className="admission-route-node admission-route-node--one"><b>01</b><span>Visit</span></div>
      <div className="admission-route-node admission-route-node--two"><b>02</b><span>Placement</span></div>
      <div className="admission-route-node admission-route-node--three"><b>03</b><span>Documents</span></div>
      <div className="admission-route-node admission-route-node--four"><b>04</b><span>Enroll</span></div>
      <div className="admission-runner" />
    </div>
  );
}

function ContactVisual() {
  return (
    <div className="hero-visual hero-visual--contact">
      <div className="contact-radar contact-radar--one" />
      <div className="contact-radar contact-radar--two" />
      <div className="contact-radar contact-radar--three" />
      <div className="contact-pin"><MapPin size={54} strokeWidth={1.35}/></div>
      <span className="contact-signal contact-signal--one" />
      <span className="contact-signal contact-signal--two" />
      <span className="contact-signal contact-signal--three" />
      <div className="contact-coordinates">PANJGUR<br/><b>27.81° N</b></div>
    </div>
  );
}

function HeroVisual({ variant }: { variant: HeroVariant }) {
  if (variant === "about") return <AboutVisual />;
  if (variant === "history") return <HistoryVisual />;
  if (variant === "academics") return <AcademicsVisual />;
  if (variant === "student-life") return <StudentLifeVisual />;
  if (variant === "gallery") return <GalleryVisual />;
  if (variant === "admissions") return <AdmissionsVisual />;
  if (variant === "contact") return <ContactVisual />;
  return <HomeVisual />;
}

export function AcademicHero({
  eyebrow,
  title,
  description,
  actions,
  variant = "home",
}: {
  eyebrow: string;
  title: ReactNode;
  description: ReactNode;
  actions?: ReactNode;
  variant?: HeroVariant;
}) {
  return (
    <section className={`academic-hero academic-hero--${variant}`}>
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

        <motion.div
          className="academic-hero__art"
          aria-hidden="true"
          initial={{ opacity: 0, scale: .94, x: 18 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: .8, delay: .08, ease: [0.22, 1, 0.36, 1] }}
        >
          <HeroVisual variant={variant} />
        </motion.div>
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
