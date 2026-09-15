"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MapPin, Phone, Clock3 } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, school } from "@/lib/site-data";

export function OasisMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand brand--compact" : "brand"}>
      <img
        className="school-crest"
        src="/oasis-logo.webp"
        alt="The Oasis School Panjgur"
        width="94"
        height="106"
        loading="eager"
        decoding="async"
      />
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header site-header--refined">
      <div className="site-header__inner">
        <Link className="header-brand" href="/" aria-label="The Oasis School home">
          <OasisMark />
        </Link>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link className={active ? "nav-link nav-link--active" : "nav-link"} href={item.href} key={item.href}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <Link className="header-cta" href="/admissions">
          Admissions <ArrowUpRight size={15} />
        </Link>

        <button
          className="menu-button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={23} /> : <Menu size={23} />}
        </button>
      </div>

      {open && (
        <nav className="mobile-nav" aria-label="Mobile navigation">
          {nav.map((item) => (
            <Link
              className={pathname === item.href ? "mobile-nav__link active" : "mobile-nav__link"}
              href={item.href}
              key={item.href}
            >
              {item.label}
            </Link>
          ))}
          <Link className="mobile-nav__cta" href="/admissions">
            Admissions <ArrowUpRight size={15}/>
          </Link>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <OasisMark />
          <p className="footer-note">
            The Oasis School has been part of Panjgur&apos;s educational journey for generations — growing from English-language teaching into a wider school community.
          </p>
        </div>

        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            {nav.slice(1).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>

        <div>
          <p className="footer-label">School information</p>
          <p className="footer-location"><MapPin size={17} /> {school.location}</p>
          <p className="footer-location"><Phone size={16} /> {school.phone}</p>
          <p className="footer-location"><Clock3 size={16} /> {school.hours}</p>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {school.name}</span>
        <span>Developed by <a href="https://techcraftsolution.com" target="_blank" rel="noreferrer">TechCraft</a></span>
      </div>
    </footer>
  );
}
