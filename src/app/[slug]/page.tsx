import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen, GraduationCap, MapPin, Phone, Clock3, CheckCircle2, ExternalLink } from "lucide-react";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/reveal";
import { AcademicHero, type HeroVariant } from "@/components/academic-hero";
import { galleryImages, historyTimeline, pageContent, school } from "@/lib/site-data";
import { currentGalleryImages } from "@/lib/current-gallery";

const validSlugs = ["about", "history", "academics", "student-life", "admissions", "gallery", "contact"] as const;
type Slug = (typeof validSlugs)[number];

const seoMap: Record<Slug, {
  title: string;
  description: string;
  keywords: string[];
  image: string;
}> = {
  about: {
    title: "About The Oasis School",
    description: "Learn about The Oasis School in Panjgur, its educational purpose, community, leadership and long connection with learning in Balochistan.",
    keywords: ["about The Oasis School", "The Oasis Panjgur", "school leadership Panjgur"],
    image: "/gallery/1000065066.webp",
  },
  history: {
    title: "History of The Oasis School",
    description: "Explore the history of The Oasis School Panjgur, from its English-language beginnings to a wider educational institution serving generations of learners.",
    keywords: ["The Oasis School history", "Oasis Academy history Panjgur", "Sir Zahir Hussain"],
    image: "/gallery/1000065065.webp",
  },
  academics: {
    title: "Academics & Learning",
    description: "Explore academics at The Oasis School Panjgur, including English-medium learning, science, arts, computer education, communication and library-based study.",
    keywords: ["The Oasis academics", "computer education Panjgur", "English medium school Panjgur", "school library Panjgur"],
    image: "/gallery/1000065059.webp",
  },
  "student-life": {
    title: "Student Life",
    description: "Discover student life at The Oasis School Panjgur, including public speaking, school programmes, educational visits, friendships and participation beyond the classroom.",
    keywords: ["student life The Oasis", "school activities Panjgur", "student programmes Panjgur"],
    image: "/gallery/1000065063.webp",
  },
  admissions: {
    title: "Admissions",
    description: "Admissions information for The Oasis School Panjgur, including how to visit, ask about placement, prepare documents and contact the school.",
    keywords: ["The Oasis School admissions", "school admissions Panjgur", "admission Panjgur school"],
    image: "/gallery/1000065064.webp",
  },
  gallery: {
    title: "School Gallery",
    description: "View photographs from The Oasis School Panjgur showing academics, student activities, educational visits, facilities and moments from the school archive.",
    keywords: ["The Oasis School gallery", "Oasis Panjgur photos", "school photos Panjgur"],
    image: "/gallery/1000065063.webp",
  },
  contact: {
    title: "Contact The Oasis School",
    description: "Contact The Oasis School in Panjgur, Balochistan. Find location, telephone details, school hours and directions.",
    keywords: ["The Oasis School contact", "The Oasis School Panjgur phone", "school location Panjgur"],
    image: "/oasis-logo-v2.webp",
  },
};

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

  const key = slug as Slug;
  const seo = seoMap[key];

  return {
    title: seo.title,
    description: seo.description,
    keywords: seo.keywords,
    alternates: {
      canonical: `/${slug}`,
    },
    openGraph: {
      title: seo.title,
      description: seo.description,
      url: `/${slug}`,
      type: "website",
      images: [
        {
          url: seo.image,
          alt: `${seo.title} — The Oasis School Panjgur`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [seo.image],
    },
  };
}

function PageHero({
  eyebrow,
  title,
  intro,
  variant,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  variant: HeroVariant;
}) {
  return (
    <AcademicHero
      eyebrow={eyebrow}
      title={title}
      description={intro}
      variant={variant}
    />
  );
}

function StandardPage({ slug }: { slug: keyof typeof pageContent }) {
  const content = pageContent[slug];
  const currentPhotoSets = {
    about: [currentGalleryImages[0], currentGalleryImages[3], currentGalleryImages[5]],
    academics: [currentGalleryImages[4], currentGalleryImages[8], currentGalleryImages[1]],
    "student-life": [currentGalleryImages[2], currentGalleryImages[5], currentGalleryImages[6]],
    admissions: [currentGalleryImages[0], currentGalleryImages[4], currentGalleryImages[8]],
    contact: [],
  } as const;
  const photoSet = currentPhotoSets[slug as keyof typeof currentPhotoSets] ?? [];

  return (
    <>
      <PageHero eyebrow={content.eyebrow} title={content.title} intro={content.intro} variant={slug as HeroVariant} />

      <section className="section">
        <div className="content-grid">
          <aside className="content-aside">
            <Reveal>
              <p>The Oasis School</p>
              <h2>
                {slug === "about" && "Education with roots, purpose and community."}
                {slug === "academics" && "Learning that builds skill, confidence and curiosity."}
                {slug === "student-life" && "A place to learn, belong and grow."}
                {slug === "admissions" && "A simple path to joining The Oasis community."}
                {slug === "contact" && "We look forward to welcoming you."}
              </h2>
            </Reveal>
          </aside>

          <div>
            {content.blocks.map(([title, text], index) => (
              <Reveal className="info-block" delay={index * 0.04} key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {slug === "about" && (
        <section className="principal-section">
          <div className="section principal-section__inner">
            <Reveal className="principal-section__intro">
              <p className="section-kicker">Leadership today</p>
              <h2 className="section-title">Meet the Principal.</h2>
              <p className="section-intro">
                The Oasis continues its educational journey under Principal {school.principal.name}.
              </p>
            </Reveal>

            <Reveal className="principal-profile" delay={0.07}>
              <span className="principal-profile__monogram">NB</span>
              <div className="principal-profile__content">
                <small>{school.principal.title} · The Oasis School</small>
                <h3>{school.principal.name}</h3>
                <p>
                  Leading the school community in Panjgur while building on The Oasis tradition of academic
                  opportunity, communication, student confidence and educational access.
                </p>
                <a href={school.principal.linkedin} target="_blank" rel="noreferrer">
                  View professional profile <ExternalLink size={15}/>
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {slug !== "contact" && photoSet.length > 0 && (
        <section className="page-photo-band">
          <div className="section page-photo-band__grid">
            {photoSet.map((image, i) => (
              <Reveal className="page-photo-band__item" delay={i * .05} key={image.src}>
                <Image src={image.src} alt={image.alt} fill sizes="(max-width:760px) 100vw, 33vw" />
                <span>{image.caption}</span>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {slug === "admissions" && (
        <section className="section section--tight">
          <Reveal>
            <p className="section-kicker">How to get started</p>
            <h2 className="section-title">Four simple steps for families.</h2>
          </Reveal>
          <div className="admission-steps">
            {[
              ["01", "Visit the school", "Come to the campus during school hours and meet the school team."],
              ["02", "Ask about placement", "Discuss the appropriate class, current intake and learning expectations."],
              ["03", "Prepare documents", "Bring the required student and parent or guardian documents."],
              ["04", "Complete enrollment", "Finish the school admission process and receive the next instructions."],
            ].map(([number, title, text], index) => (
              <Reveal className="admission-step" delay={index * .05} key={number}>
                <span>{number}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {slug === "admissions" && (
        <section className="admissions-action-band">
          <div className="section admissions-action-band__inner">
            <Reveal>
              <p className="section-kicker">Ready to ask about admission?</p>
              <h2 className="section-title">Speak with the school or plan a visit.</h2>
              <p className="section-intro">{school.contactNote}</p>
            </Reveal>
            <Reveal className="admissions-action-band__buttons" delay={0.06}>
              <a className="button button--primary" href={school.phoneHref}>
                <Phone size={16}/> Call the school
              </a>
              <a className="button button--outline" href={school.mapsUrl} target="_blank" rel="noreferrer">
                <MapPin size={16}/> Get directions
              </a>
              <Link className="button button--outline" href="/contact">
                Contact information <ArrowRight size={15}/>
              </Link>
            </Reveal>
          </div>
        </section>
      )}

      {slug === "contact" && <ContactDetails />}
    </>
  );
}

function HistoryPage() {
  return (
    <>
      <PageHero
        eyebrow="Our History"
        title="From a small language centre to a Panjgur institution."
        intro="The Oasis story began with English-language teaching and grew into a wider school community that helped shape educational ambition in Panjgur."
        variant="history"
      />

      <section className="section">
        <div className="content-grid">
          <aside className="content-aside">
            <Reveal>
              <p>The Oasis journey</p>
              <h2>Years of teaching, growth and determination.</h2>
            </Reveal>
          </aside>

          <div className="timeline">
            {historyTimeline.map((item, index) => (
              <Reveal className="timeline__row" delay={index * .03} key={item.title}>
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
              After studying in the United States in the early 1990s, Sir Zahir Hussain returned to Panjgur with a determination to improve educational opportunity in his community.
            </p>
            <p>
              He identified English as a major obstacle for talented students seeking admission to competitive professional and higher-education pathways. The answer was to begin with language teaching and build from there.
            </p>
            <p>
              What started in two rented rooms developed into a much wider institution offering school education, English-language learning, computer training, a library and science and arts subjects.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="history-band">
        <div className="section">
          <Reveal>
            <p className="section-kicker">A lasting contribution</p>
            <h2 className="section-title">The Oasis helped make education part of a bigger conversation.</h2>
            <p className="section-intro">
              The school's growth coincided with a wider rise of private education and English-language learning across Makran. Its support for girls' education and its focus on language, computing and reading became central parts of that legacy.
            </p>
          </Reveal>

          <div className="legacy-grid">
            {[
              ["English first", "The Oasis began by addressing the language barrier that held many strong students back."],
              ["Girls in the classroom", "Female participation grew from a small first group into a major part of the school community."],
              ["Technology & books", "Computer learning and a library widened what students could explore beyond regular lessons."],
              ["Learning for more families", "The school's history includes efforts to support students who could not easily afford private education."],
            ].map(([title, text], index) => (
              <Reveal className="legacy-card" delay={index * .05} key={title}>
                <CheckCircle2 size={20}/>
                <h3>{title}</h3>
                <p>{text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <Reveal>
          <p className="section-kicker">Through the years</p>
          <h2 className="section-title">People and moments from The Oasis community.</h2>
        </Reveal>
        <div className="gallery-preview gallery-preview--expanded">
          {[currentGalleryImages[9], ...galleryImages.slice(1,8)].map((image, index) => (
            <Reveal className="gallery-tile" delay={index * .03} key={image.src}>
              <Image src={image.src} alt={image.alt} fill sizes="(max-width:760px) 50vw, 23vw" unoptimized={image.src.startsWith("http")} />
              <span>{image.caption}</span>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}

function GalleryPage() {
  const currentGroups = [
    {
      kicker: "Academics & facilities",
      title: "Learning spaces in use.",
      intro: "The computer lab and library show practical digital learning, reading and independent study in the current school environment.",
      images: currentGalleryImages.filter((image) => image.context === "Academics"),
    },
    {
      kicker: "Student activities",
      title: "Participation, confidence and school life.",
      intro: "Public speaking, school programmes and student gatherings reflect the social and expressive side of learning at The Oasis.",
      images: currentGalleryImages.filter((image) => image.context === "Student life" || image.context === "School life"),
    },
    {
      kicker: "Educational visits",
      title: "Learning beyond the campus.",
      intro: "These photographs show The Oasis students during an educational visit to the University of Makran, Panjgur.",
      images: currentGalleryImages.filter((image) => image.context === "Educational visit"),
    },
  ] as const;

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="The Oasis story in photographs."
        intro="Teachers, students, school gatherings, learning spaces and memories from The Oasis community in Panjgur."
        variant="gallery"
      />

      {currentGroups.map((group, groupIndex) => (
        <section className={groupIndex % 2 === 1 ? "history-band" : ""} key={group.kicker}>
          <div className="section">
            <Reveal>
              <p className="section-kicker">{group.kicker}</p>
              <h2 className="section-title">{group.title}</h2>
              <p className="section-intro">{group.intro}</p>
            </Reveal>
            <div className="gallery-grid gallery-grid--current" style={{marginTop: 42}}>
              {group.images.map((image, index) => (
                <Reveal className="gallery-card" delay={(index % 3) * .025} key={image.src}>
                  <div className="gallery-card__image">
                    <Image src={image.src} alt={image.alt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                  </div>
                  <p>{image.caption}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="history-band">
        <div className="section">
          <Reveal>
            <p className="section-kicker">From the archives</p>
            <h2 className="section-title">Earlier chapters of The Oasis story.</h2>
            <p className="section-intro">
              Older photographs preserved from The Oasis community, including the school campus,
              teachers, farewell events and school life from earlier years.
            </p>
          </Reveal>
          <div className="gallery-grid" style={{marginTop: 42}}>
            {[currentGalleryImages[9], ...galleryImages].map((image, index) => (
              <Reveal className="gallery-card" delay={(index % 3) * .025} key={image.src}>
                <div className="gallery-card__image">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 760px) 100vw, 33vw"
                    unoptimized={image.src.startsWith("http")}
                  />
                </div>
                <p>{image.caption}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ContactDetails() {
  return (
    <section className="contact-panel">
      <div className="section contact-panel__grid">
        <Reveal className="contact-panel__logo">
          <img
            src="/oasis-logo-v2.webp"
            alt="The Oasis School Panjgur logo"
            width="250"
            height="282"
            loading="lazy"
            decoding="async"
          />
          <p>{school.contactNote}</p>
        </Reveal>

        <div className="contact-cards">
          <Reveal className="contact-card">
            <MapPin size={24}/>
            <h3>Visit The Oasis</h3>
            <p>{school.location}</p>
            <a href={school.mapsUrl} target="_blank" rel="noreferrer">Open in Maps <ArrowRight size={14}/></a>
          </Reveal>
          <Reveal className="contact-card" delay={.04}>
            <Phone size={24}/>
            <h3>Telephone</h3>
            <p>{school.phone}</p>
            <a href={school.phoneHref}>Call the school <ArrowRight size={14}/></a>
          </Reveal>
          <Reveal className="contact-card" delay={.08}>
            <Clock3 size={24}/>
            <h3>School hours</h3>
            <p>{school.hours}<br/>Sunday · Closed</p>
            <small>Please confirm current timings before visiting.</small>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default async function ContentPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  if (!validSlugs.includes(slug as Slug)) notFound();

  const key = slug as Slug;
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? school.website;
  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: siteUrl,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: seoMap[key].title,
        item: `${siteUrl}/${slug}`,
      },
    ],
  };

  const page =
    slug === "history"
      ? <HistoryPage />
      : slug === "gallery"
        ? <GalleryPage />
        : <StandardPage slug={slug as keyof typeof pageContent} />;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />
      {page}
    </>
  );
}
