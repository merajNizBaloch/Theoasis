import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  Languages,
  Library,
  MonitorUp,
  Microscope,
  UsersRound,
  GraduationCap,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { AcademicHero } from "@/components/academic-hero";
import { galleryImages, historyTimeline, school } from "@/lib/site-data";
import { currentGalleryImages } from "@/lib/current-gallery";

export const metadata: Metadata = {
  title: "The Oasis School Panjgur | Education in Balochistan",
  description:
    "The Oasis School in Panjgur, Balochistan — English-medium learning, science, arts, computing, reading, student activities and a long educational legacy.",
  keywords: [
    "The Oasis School Panjgur",
    "The Oasis Panjgur",
    "Oasis Academy Panjgur",
    "school in Panjgur",
    "English medium school Panjgur",
    "education in Balochistan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    title: "The Oasis School Panjgur",
    description:
      "Learning, confidence and opportunity at The Oasis School in Panjgur, Balochistan.",
    url: "/",
    type: "website",
    images: [
      {
        url: "/gallery/1000065063.webp",
        alt: "Students at The Oasis School, Panjgur",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Oasis School Panjgur",
    description:
      "Learning, confidence and opportunity at The Oasis School in Panjgur, Balochistan.",
    images: ["/gallery/1000065063.webp"],
  },
};


export default function HomePage() {
  const academicCards = [
    [Languages, "English & communication", "The foundation of The Oasis story — building the language confidence students need for further study and wider opportunity."],
    [BookOpen, "English-medium schooling", "A broad school environment built around disciplined learning, communication and strong academic foundations."],
    [Microscope, "Science & arts", "Balanced learning that supports analytical thinking, creativity and preparation for higher education."],
    [MonitorUp, "Computer learning", "Practical exposure to technology became an important part of the school's growth."],
    [Library, "Library & reading", "Independent reading and study help students grow beyond the classroom and develop lifelong learning habits."],
    [UsersRound, "A strong community", "Teachers, students and families have shaped a school culture remembered for respect, guidance and belonging."],
  ] as const;

  return (
    <>
      <AcademicHero
        variant="home"
        eyebrow="The Oasis School · Panjgur"
        title={<>Where learning became a <em>movement</em>.</>}
        description="The Oasis School grew from a small English language centre into a school community that helped widen educational opportunity in Panjgur."
        actions={
          <>
            <Link className="button button--light" href="/about">Discover The Oasis <ArrowRight size={16} /></Link>
            <Link className="button button--ghost" href="/admissions">Admissions</Link>
          </>
        }
      />

      <section className="welcome-strip">
        <div className="welcome-strip__inner">
          <Reveal>
            <p className="section-kicker">Welcome to The Oasis</p>
            <h2 className="welcome-strip__title">A school with deep roots in Panjgur.</h2>
          </Reveal>
          <Reveal delay={0.08}>
            <p className="welcome-strip__copy">
              The Oasis began with a practical challenge: capable students needed stronger English to compete in higher education. From that starting point came a wider academic institution, an English-medium school, computer learning, a library and a growing culture of educational ambition.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="leadership-strip">
        <div className="section leadership-strip__inner">
          <Reveal className="leadership-strip__visual">
            <Image
              src={currentGalleryImages[0].src}
              alt={currentGalleryImages[0].alt}
              fill
              sizes="(max-width: 760px) 100vw, 45vw"
            />
            <span>Teachers at The Oasis School</span>
          </Reveal>

          <Reveal className="leadership-strip__copy" delay={0.07}>
            <p className="section-kicker">Current leadership</p>
            <h2 className="section-title">Guiding The Oasis forward.</h2>
            <div className="principal-card">
              <span className="principal-card__monogram">NB</span>
              <div>
                <small>{school.principal.title}</small>
                <h3>{school.principal.name}</h3>
                <p>
                  Leading The Oasis School in Panjgur and carrying forward its commitment to academic learning,
                  communication, student confidence, technology and opportunity.
                </p>
                <a
                  className="principal-card__link"
                  href={school.principal.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  Professional profile <ExternalLink size={14} />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <div className="story-grid">
          <Reveal className="story-image">
            <Image src={galleryImages[1].src} alt={galleryImages[1].alt} fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized />
            <div className="story-image__badge">
              <strong>Sir Zahir Hussain</strong>
              <span>Founder and educator at the heart of The Oasis story.</span>
            </div>
          </Reveal>

          <Reveal className="story-copy" delay={0.08}>
            <p className="section-kicker">Our beginning</p>
            <h2 className="section-title">A two-room idea that grew far beyond two rooms.</h2>
            <p>
              After studying in the United States, Sir Zahir Hussain returned to Panjgur and focused first on English-language teaching. The work began in a rented two-room building as the American English Language Center.
            </p>
            <p>
              Strong student results brought growing trust from families. The language centre became The Oasis Academy, and the institution expanded into a broader school environment serving boys and girls from Panjgur and the wider Makran region.
            </p>
            <p className="story-copy__quote">
              The Oasis became part of a larger change in how families in Panjgur imagined education, especially for girls.
            </p>
            <Link className="button button--outline" href="/history">Explore the full history <ArrowRight size={15}/></Link>
          </Reveal>
        </div>
      </section>

      <section className="stat-strip">
        <div className="stat-strip__inner">
          <Reveal className="stat">
            <strong>20,000+</strong>
            <span>Students reported to have benefited from The Oasis during its early decades of growth.</span>
          </Reveal>
          <Reveal className="stat" delay={0.05}>
            <strong>2 rooms</strong>
            <span>The early language centre began in a small rented building before expanding.</span>
          </Reveal>
          <Reveal className="stat" delay={0.1}>
            <strong>50%</strong>
            <span>Girls were reported to make up roughly half of the students reached by the early 2010s.</span>
          </Reveal>
          <Reveal className="stat" delay={0.15}>
            <strong>4 pillars</strong>
            <span>School learning, English, computer education and reading became central parts of the institution.</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="section-kicker">Learning at The Oasis</p>
          <h2 className="section-title">More than one subject. More than one kind of growth.</h2>
          <p className="section-intro">
            The Oasis developed around the idea that students need strong academics, communication skills, access to technology and the confidence to keep learning beyond school.
          </p>
        </Reveal>

        <div className="cards cards--six">
          {academicCards.map(([Icon, title, text], index) => {
            const C = Icon;
            return (
              <Reveal className="card" delay={index * 0.04} key={title}>
                <span className="card__number"><C size={18}/></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            );
          })}
        </div>

        <div style={{marginTop: 30}}>
          <Link className="button button--primary" href="/academics">Explore academics <ArrowRight size={16}/></Link>
        </div>
      </section>

      <section className="facilities-section">
        <div className="section">
          <Reveal>
            <p className="section-kicker">Learning spaces today</p>
            <h2 className="section-title">Technology and books alongside classroom learning.</h2>
            <p className="section-intro">
              Current photographs show students using the computer lab and browsing the school library —
              two spaces that reflect The Oasis tradition of practical learning and independent study.
            </p>
          </Reveal>

          <div className="facilities-grid">
            <Reveal className="facility-card">
              <div className="facility-card__image">
                <Image src={currentGalleryImages[4].src} alt={currentGalleryImages[4].alt} fill sizes="(max-width:760px) 100vw, 50vw" />
              </div>
              <div className="facility-card__copy">
                <MonitorUp size={21}/>
                <h3>Computer Lab</h3>
                <p>Hands-on digital learning and practical computer skills.</p>
              </div>
            </Reveal>
            <Reveal className="facility-card" delay={0.06}>
              <div className="facility-card__image">
                <Image src={currentGalleryImages[8].src} alt={currentGalleryImages[8].alt} fill sizes="(max-width:760px) 100vw, 50vw" />
              </div>
              <div className="facility-card__copy">
                <Library size={21}/>
                <h3>School Library</h3>
                <p>Reading, research and independent exploration beyond textbooks.</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="photo-story">
        <div className="section photo-story__inner">
          <Reveal className="photo-story__copy">
            <p className="section-kicker">Education for girls</p>
            <h2 className="section-title">Opening doors that had once been difficult to open.</h2>
            <p>
              The first female class at the original language centre was small. Over time, participation grew and girls became a major part of The Oasis learning community. That shift became one of the school's most important contributions to Panjgur's educational culture.
            </p>
            <p>
              Former students have remembered The Oasis as a place of teachers, friendships, confidence, respect and opportunity — a school experience that stayed with them long after Class 10.
            </p>
            <Link className="button button--outline" href="/student-life">Student life at The Oasis <ArrowRight size={15}/></Link>
          </Reveal>

          <Reveal className="photo-story__visual" delay={0.08}>
            <div className="photo-stack photo-stack--a">
              <Image src={currentGalleryImages[5].src} alt={currentGalleryImages[5].alt} fill sizes="(max-width:760px) 55vw, 30vw" />
            </div>
            <div className="photo-stack photo-stack--b">
              <Image src={currentGalleryImages[2].src} alt={currentGalleryImages[2].alt} fill sizes="(max-width:760px) 48vw, 24vw" />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="history-band">
        <div className="section">
          <Reveal>
            <p className="section-kicker">Our journey</p>
            <h2 className="section-title">A story built over years of teaching and persistence.</h2>
          </Reveal>
          <div className="timeline-preview">
            {historyTimeline.slice(0,4).map((item, index) => (
              <Reveal className="timeline-preview__item" delay={index * .05} key={item.title}>
                <span className="timeline-preview__era">{item.era}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
          <div style={{marginTop: 34}}>
            <Link className="button button--primary" href="/history">Read our history <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="section-kicker">School life</p>
          <h2 className="section-title">A school is made of moments as much as lessons.</h2>
          <p className="section-intro">
            Teachers, students, farewell gatherings and everyday school memories are part of The Oasis story. Explore photographs preserved from the school community.
          </p>
        </Reveal>

        <div className="gallery-preview gallery-preview--expanded">
          {currentGalleryImages.slice(0,8).map((image, index) => (
            <Reveal className="gallery-tile" delay={index * .03} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 38vw" : "(max-width: 760px) 50vw, 22vw"} />
              <span>{image.caption}</span>
            </Reveal>
          ))}
        </div>

        <div style={{marginTop: 26}}>
          <Link className="button button--outline" href="/gallery">See the full gallery <ArrowRight size={15}/></Link>
        </div>
      </section>

      <section className="student-highlight">
        <div className="section student-highlight__inner">
          <Reveal>
            <p className="section-kicker">Student voice beyond campus</p>
            <h2 className="section-title">Writing that reached a wider audience.</h2>
            <p className="section-intro">
              In 2025, Makran Times credited Haqiq Ali Baloch of The Oasis Academy, Panjgur,
              for the articles “The Beauty of Panjgur” and “Knowledge” — an example of student
              expression extending beyond the classroom.
            </p>
          </Reveal>
          <Reveal className="student-highlight__links" delay={0.06}>
            <a href="https://www.scribd.com/document/913205092/Makran-Times-July-2025" target="_blank" rel="noreferrer">
              July 2025 publication <ExternalLink size={15}/>
            </a>
            <a href="https://www.scribd.com/document/967612597/Nomber-October-2025" target="_blank" rel="noreferrer">
              Oct–Nov 2025 publication <ExternalLink size={15}/>
            </a>
          </Reveal>
        </div>
      </section>

      <section className="values-section">
        <div className="section">
          <Reveal>
            <p className="section-kicker">What The Oasis stands for</p>
            <h2 className="section-title">Knowledge, confidence, respect and opportunity.</h2>
          </Reveal>
          <div className="values-grid">
            {[
              [GraduationCap, "Knowledge", "Serious learning that helps students build strong foundations for the future."],
              [Sparkles, "Confidence", "Communication and participation that help students believe in their own ability."],
              [UsersRound, "Respect", "A school culture shaped by respect for teachers, classmates, families and community."],
              [BookOpen, "Opportunity", "Education that aims to widen the choices available to every capable learner."],
            ].map(([Icon, title, text], index) => {
              const C = Icon as typeof GraduationCap;
              return (
                <Reveal className="value-card" delay={index * .05} key={String(title)}>
                  <C size={24}/>
                  <h3>{String(title)}</h3>
                  <p>{String(text)}</p>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <Reveal className="cta-band__inner">
          <img className="cta-band__logo" src="/oasis-logo-v2.webp" alt="The Oasis School logo" width="145" height="165" loading="lazy" decoding="async" />
          <p className="eyebrow" style={{justifyContent:"center"}}>The Oasis School · Panjgur</p>
          <h2>Your next chapter can begin here.</h2>
          <p>Visit the school to learn about available classes, admission requirements and the learning environment at The Oasis.</p>
          <div className="hero__actions" style={{justifyContent:"center"}}>
            <Link className="button button--light" href="/admissions">Admissions information <ArrowRight size={16}/></Link>
            <Link className="button button--ghost" href="/contact">Contact & location</Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
