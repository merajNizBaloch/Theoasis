import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { galleryImages, historyTimeline, pageContent, sources } from "@/lib/site-data";

const validSlugs = ["about", "history", "academics", "admissions", "gallery", "contact"] as const;
type Slug = (typeof validSlugs)[number];

export function generateStaticParams() {
  return validSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  if (!validSlugs.includes(slug as Slug)) return {};
  const titleMap: Record<Slug, string> = {
    about: "About",
    history: "History",
    academics: "Academics",
    admissions: "Admissions",
    gallery: "Gallery",
    contact: "Contact",
  };
  return {
    title: titleMap[slug as Slug],
    description: `${titleMap[slug as Slug]} — The Oasis Academy, Panjgur, Balochistan.`,
  };
}

function PageHero({ eyebrow, title, intro }: { eyebrow: string; title: string; intro: string }) {
  return (
    <section className="page-hero">
      <div className="page-hero__inner">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1>{title}</h1>
          <p>{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}

function StandardPage({ slug }: { slug: keyof typeof pageContent }) {
  const content = pageContent[slug];
  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} />
      <section className="section">
        <div className="content-grid">
          <aside className="content-aside">
            <Reveal>
              <p>The Oasis Academy</p>
              <h2>{slug === "contact" ? "Publicly documented details." : "Education grounded in place and purpose."}</h2>
            </Reveal>
          </aside>
          <div>
            {content.blocks.map(([title, text], index) => (
              <Reveal className="info-block" delay={index * 0.05} key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
            {slug === "contact" && (
              <Reveal className="info-block">
                <h3>Historical sources</h3>
                <p>For transparency, this site keeps its research trail visible. Older phone and hours information is labelled archival rather than presented as verified current operating information.</p>
                <div className="source-list">
                  {sources.slice(0,2).map((source) => (
                    <a className="source-link" href={source.href} target="_blank" rel="noreferrer" key={source.href}>
                      <span>{source.label}</span><ExternalLink size={15}/>
                    </a>
                  ))}
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="History"
        title="From two rooms to an educational legacy."
        intro="The documented history of Oasis is closely tied to Panjgur's modern private-education movement, the spread of English-language learning, and the expansion of educational opportunity for girls."
      />

      <section className="section">
        <div className="content-grid">
          <aside className="content-aside">
            <Reveal>
              <p>A documented timeline</p>
              <h2>The story behind the name Oasis.</h2>
            </Reveal>
          </aside>
          <div className="timeline">
            {historyTimeline.map((item, index) => (
              <Reveal className="timeline__row" delay={index * .035} key={item.title}>
                <div className="timeline__era">{item.era}</div>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal className="founder-feature">
          <div className="founder-feature__image">
            <Image
              src={galleryImages[1].src}
              alt={galleryImages[1].alt}
              fill
              sizes="(max-width: 760px) 100vw, 34vw"
              unoptimized
            />
          </div>
          <div>
            <p className="section-kicker" style={{color:"#e3c77e"}}>Founder</p>
            <h3>Sir Zahir Hussain</h3>
            <p>
              Archived Oasis material says Hussain returned after studying in the United States and focused first on English because it was a major barrier for students aiming at civil service, medical and engineering pathways.
            </p>
            <p>
              Other reporting on Panjgur&apos;s education history identifies the earlier American English Language Center as a project associated with Sir Zahir Hussain and Sir Saleh, after which Hussain continued the work and the institution developed into The Oasis Academy.
            </p>
            <p>
              Historical coverage also emphasizes his role in widening girls&apos; participation in education — a change that became influential well beyond one classroom.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="history-band">
        <div className="section section--tight">
          <Reveal>
            <p className="section-kicker">Research trail</p>
            <h2 className="section-title">Sources behind this history.</h2>
            <p className="section-intro">Where public sources disagree or are old, the website avoids turning them into unsupported present-day claims.</p>
          </Reveal>
          <div className="source-list">
            {sources.map((source) => (
              <Reveal key={source.href}>
                <a className="source-link" href={source.href} target="_blank" rel="noreferrer">
                  <span>{source.label}</span><ExternalLink size={15}/>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function GalleryPage() {
  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The Oasis archive."
        intro="A selection of public photographs preserved on the academy's older web gallery, showing the school, founder, staff and school-life moments from around 2013–2014."
      />
      <section className="section">
        <p className="notice">
          These images are historical and sourced from the public Oasis Academy Panjgur WordPress archive. Captions identify what the archive itself labels or what can be safely described from the image context; they are not presented as current campus photography.
        </p>
        <div className="gallery-grid">
          {galleryImages.map((image, index) => (
            <Reveal className="gallery-card" delay={(index % 3) * .03} key={image.src}>
              <div className="gallery-card__image">
                <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" unoptimized />
              </div>
              <p>{image.caption}</p>
            </Reveal>
          ))}
        </div>
        <div style={{marginTop:36}}>
          <a className="button button--outline" href="https://oasis3academy.wordpress.com/pictures/" target="_blank" rel="noreferrer">
            Open original archive <ArrowUpRight size={16}/>
          </a>
        </div>
      </section>
    </>
  );
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!validSlugs.includes(slug as Slug)) notFound();

  if (slug === "history") return <HistoryPage />;
  if (slug === "gallery") return <GalleryPage />;

  return <StandardPage slug={slug as keyof typeof pageContent} />;
}
