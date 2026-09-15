import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, Languages, Library, MonitorUp } from "lucide-react";
import { HeroMotion, Reveal } from "@/components/reveal";
import { galleryImages, historyTimeline } from "@/lib/site-data";

const heroImage = galleryImages[0].src;

export default function HomePage() {
  return (
    <>
      <section className="hero" style={{ "--hero-image": `url("${heroImage}")` } as React.CSSProperties}>
        <div className="hero__inner">
          <div className="hero__content">
            <HeroMotion>
              <p className="eyebrow">Panjgur · Balochistan · Pakistan</p>
              <h1>A legacy of <em>learning</em>.</h1>
              <p className="hero__lead">
                From a small English language centre to a wider academic institution, The Oasis Academy became part of Panjgur&apos;s story of educational ambition, access and possibility.
              </p>
              <div className="hero__actions">
                <Link className="button button--light" href="/history">Explore our history <ArrowRight size={16} /></Link>
                <Link className="button button--ghost" href="/gallery">View the archive</Link>
              </div>
            </HeroMotion>
          </div>
          <div className="hero__seal">Education<br/>in Panjgur</div>
        </div>
      </section>

      <section className="section">
        <div className="story-grid">
          <Reveal className="story-image">
            <Image src={galleryImages[1].src} alt={galleryImages[1].alt} fill sizes="(max-width: 760px) 100vw, 50vw" unoptimized />
            <div className="story-image__badge">
              <strong>Sir Zahir Hussain</strong>
              <span>Founder and educator whose work helped shape modern private education in Panjgur.</span>
            </div>
          </Reveal>

          <Reveal className="story-copy" delay={0.08}>
            <p className="section-kicker">The Oasis story</p>
            <h2 className="section-title">Built around a barrier worth removing.</h2>
            <p>
              Public accounts trace Oasis to the American English Language Center, established after Sir Zahir Hussain returned from studies in the United States. He identified English as a major obstacle for capable students trying to advance into higher education and competitive examinations.
            </p>
            <p className="story-copy__quote">
              The response was practical: teach language well, widen access, and let achievement change expectations.
            </p>
            <p>
              Over time, the initiative expanded into an English-medium school with computer learning, science and arts subjects, and a library — while historical reporting particularly notes its role in opening educational opportunities for girls.
            </p>
            <Link className="button button--outline" href="/history">Read the documented history <ArrowRight size={15}/></Link>
          </Reveal>
        </div>
      </section>

      <section className="stat-strip">
        <div className="stat-strip__inner">
          <Reveal className="stat">
            <strong>20k+</strong>
            <span>Learners reported served in historical institutional coverage by the early 2010s.</span>
          </Reveal>
          <Reveal className="stat" delay={0.05}>
            <strong>1990s</strong>
            <span>The educational movement began with English-language learning in Panjgur.</span>
          </Reveal>
          <Reveal className="stat" delay={0.1}>
            <strong>50%</strong>
            <span>Historical founder material reported roughly half of past learners were Baloch girls.</span>
          </Reveal>
          <Reveal className="stat" delay={0.15}>
            <strong>2025</strong>
            <span>Recent Makran Times issues still identify contributors from The Oasis Academy, Panjgur.</span>
          </Reveal>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="section-kicker">Academic foundations</p>
          <h2 className="section-title">An institution that grew with its learners.</h2>
          <p className="section-intro">The public record describes a model that moved from language education into a broader school environment, while keeping communication, confidence and access at its core.</p>
        </Reveal>
        <div className="cards">
          {[
            [Languages, "English & communication", "The origin of the Oasis story: reducing the English-language barrier that limited talented students."],
            [BookOpen, "School academics", "English-medium learning alongside science and arts subjects as the institution expanded."],
            [MonitorUp, "Computer learning", "Historical accounts document an equipped computer facility as part of Oasis' growth."],
            [Library, "Reading culture", "A library supported independent learning, reading and wider intellectual development."],
          ].map(([Icon, title, text], index) => {
            const C = Icon as typeof BookOpen;
            return (
              <Reveal className="card" delay={index * 0.06} key={String(title)}>
                <span className="card__number"><C size={18}/></span>
                <h3>{String(title)}</h3>
                <p>{String(text)}</p>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section className="history-band">
        <div className="section">
          <Reveal>
            <p className="section-kicker">Across the years</p>
            <h2 className="section-title">A Panjgur educational timeline.</h2>
          </Reveal>
          <div className="timeline-preview">
            {historyTimeline.slice(0,3).map((item, index) => (
              <Reveal className="timeline-preview__item" delay={index * .07} key={item.title}>
                <span className="timeline-preview__era">{item.era}</span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </Reveal>
            ))}
          </div>
          <div style={{marginTop: 34}}>
            <Link className="button button--primary" href="/history">See the full timeline <ArrowRight size={16}/></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="section-kicker">Archive gallery</p>
          <h2 className="section-title">Faces, classrooms and moments from Oasis.</h2>
          <p className="section-intro">These public archival photographs come from the academy&apos;s older WordPress gallery and document school life around 2013–2014.</p>
        </Reveal>
        <div className="gallery-preview">
          {galleryImages.slice(0,5).map((image, index) => (
            <Reveal className="gallery-tile" delay={index * .04} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes={index === 0 ? "(max-width: 760px) 100vw, 45vw" : "(max-width: 760px) 50vw, 28vw"} unoptimized />
              <span>{image.caption}</span>
            </Reveal>
          ))}
        </div>
        <div style={{marginTop: 26}}>
          <Link className="button button--outline" href="/gallery">Open full gallery <ArrowRight size={15}/></Link>
        </div>
      </section>

      <section className="cta-band">
        <Reveal className="cta-band__inner">
          <p className="eyebrow" style={{justifyContent:"center"}}>The Oasis Academy</p>
          <h2>Education can change the horizon of a place.</h2>
          <p>Explore Oasis&apos; history, academic legacy and public archive — or use the admissions page to see what families should confirm directly with the academy today.</p>
          <Link className="button button--light" href="/admissions">Admissions information <ArrowRight size={16}/></Link>
        </Reveal>
      </section>
    </>
  );
}
