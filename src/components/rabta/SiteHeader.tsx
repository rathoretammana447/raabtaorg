import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { cn } from "@/lib/utils";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About Us" },
  { href: "#programmes", label: "Our Programmes" },
  { href: "#impact", label: "Our Impact" },
  { href: "#approach", label: "Our Approach" },
  { href: "#founder", label: "Founder" },
  { href: "#get-involved", label: "Get Involved" },
  { href: "#contact", label: "Contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 24);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    const k = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", k);
    return () => window.removeEventListener("keydown", k);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-colors",
        scrolled ? "border-border bg-background/95 backdrop-blur" : "border-transparent bg-background",
      )}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-6 px-5 py-3 lg:px-8">
        <a href="#home" aria-label="Rabta home" className="text-primary">
          <Logo />
        </a>
        <nav aria-label="Main" className="hidden xl:block">
          <ul className="flex items-center gap-6 text-sm text-foreground/80">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} className="transition-colors hover:text-primary">{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#get-involved"
            className="hidden rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground transition hover:brightness-95 sm:inline-flex"
          >
            Partner With Us
          </a>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-sm border border-border text-primary xl:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>
      {open && (
        <nav id="mobile-nav" aria-label="Mobile" className="border-t border-border bg-background xl:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col px-5 py-4">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="block border-b border-border/60 py-3 font-serif text-xl text-primary">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-4">
              <a href="#get-involved" onClick={() => setOpen(false)} className="inline-flex rounded-sm bg-accent px-4 py-2.5 text-sm font-semibold text-accent-foreground">
                Partner With Us
              </a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
