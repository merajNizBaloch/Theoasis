"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { nav, school } from "@/lib/site-data";

export function OasisMark({ compact = false }: { compact?: boolean }) {
  return (
    <span className={compact ? "brand brand--compact" : "brand"}>
      <span className="brand__mark" aria-hidden="true">
        <svg viewBox="0 0 64 64" role="img">
          <path d="M12 44c7-5 14-7 20-7s13 2 20 7v8c-7-4-14-6-20-6s-13 2-20 6z" />
          <path d="M32 15c-8 2-14 8-16 16 7-5 12-6 16-4-1-6 0-10 0-12z" />
          <path d="M34 15c8 2 14 8 16 16-7-5-12-6-16-4 1-6 0-10 0-12z" />
          <path d="M32 23v21" />
          <circle cx="32" cy="11" r="3.5" />
        </svg>
      </span>
      <span className="brand__text">
        <strong>OASIS</strong>
        {!compact && <small>THE ACADEMY · PANJGUR</small>}
      </span>
    </span>
  );
}

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link href="/" aria-label="The Oasis Academy home">
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
          Admissions <ArrowUpRight size={16} />
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
            <Link className={pathname === item.href ? "mobile-nav__link active" : "mobile-nav__link"} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
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
            A modern concept website celebrating the documented educational legacy of The Oasis Academy, Panjgur.
          </p>
        </div>
        <div>
          <p className="footer-label">Explore</p>
          <div className="footer-links">
            {nav.slice(1, 6).map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
          </div>
        </div>
        <div>
          <p className="footer-label">Location</p>
          <p className="footer-location"><MapPin size={17} /> {school.location}</p>
          <p className="footer-small">Archival public phone listing: {school.archivalPhone}</p>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} {school.name}</span>
        <span>Historical facts are sourced from public records; current operational details should be confirmed with the academy.</span>
      </div>
    </footer>
  );
}
