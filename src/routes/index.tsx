import { createFileRoute } from "@tanstack/react-router";
import {
  BookOpen, MessagesSquare, Monitor, Briefcase, Compass, HeartHandshake,
  Users, GraduationCap, Sprout, Mic, Instagram, MapPin, ArrowRight, ArrowUpRight, Quote,
} from "lucide-react";
import heroImg from "@/assets/hero-learning.jpg";
import aboutImg from "@/assets/about-books.jpg";
import { SiteHeader } from "@/components/rabta/SiteHeader";
import { Logo } from "@/components/rabta/Logo";
import { ContactForm } from "@/components/rabta/ContactForm";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Rabta (राबता) — Education Beyond Circumstances | Derabassi, Punjab" },
      { name: "description", content: "Rabta is a grassroots initiative in Derabassi, Punjab offering free education, communication, digital, life and career-readiness skills to underprivileged children." },
      { property: "og:title", content: "Rabta (राबता) — Education Beyond Circumstances" },
      { property: "og:description", content: "Free educational support, life skills and career guidance for underprivileged children in Derabassi, Punjab." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const ORG_IG = "https://www.instagram.com/rabata._.official/";
const FOUNDER_IG = "https://www.instagram.com/rathore._.tammana/";

const snapshot = [
  { icon: Users, big: "~10–15", label: "Children currently supported", note: "Figure reported by Rabta" },
  { icon: BookOpen, big: "Free", label: "Educational support" },
  { icon: Sprout, label: "Academic & life-skills development" },
  { icon: Mic, label: "Communication & career-readiness guidance" },
  { icon: HeartHandshake, label: "Community-driven, direct-teaching model" },
];

const programmes = [
  { icon: GraduationCap, title: "Academic Education", text: "English, science, social sciences, general knowledge, homework and examination preparation." },
  { icon: MessagesSquare, title: "Communication Skills", text: "English communication, speaking confidence, conversation and public-speaking practice." },
  { icon: Monitor, title: "Digital Literacy", text: "Basic computer education and foundational digital skills." },
  { icon: Briefcase, title: "Career Readiness", text: "Career awareness, CV preparation, interview preparation and professional communication." },
  { icon: Compass, title: "Life Skills", text: "Decision-making, problem-solving, time management, responsibility and financial awareness." },
  { icon: HeartHandshake, title: "Guidance & Mentorship", text: "Individual learning support, confidence-building and guidance toward practical opportunities." },
];

const steps = [
  { n: "01", t: "Identify", d: "Understand each child's educational and developmental needs." },
  { n: "02", t: "Educate", d: "Provide free academic support." },
  { n: "03", t: "Develop", d: "Build communication, digital and life skills." },
  { n: "04", t: "Guide", d: "Provide career and employment guidance." },
  { n: "05", t: "Empower", d: "Help students become confident and self-reliant." },
];

const roadmap = [
  { stage: "Short-term", items: ["Increase student participation", "Introduce structured learning programmes", "Expand English and basic computer education", "Conduct career-awareness and interview-preparation sessions"] },
  { stage: "Medium-term", items: ["Build a volunteer educator network", "Develop structured skill programmes", "Establish partnerships with schools and organizations", "Organize career and employment workshops", "Expand food-support initiatives"] },
  { stage: "Long-term vision", items: ["Develop Rabta into a scalable community platform connecting children, education, skills, mentorship and opportunities"] },
];

function SectionHead({ eyebrow, title, intro, center }: { eyebrow: string; title: string; intro?: string; center?: boolean }) {
  return (
    <div className={center ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-4xl leading-[1.05] text-primary md:text-5xl">{title}</h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{intro}</p>}
    </div>
  );
}

function Index() {
  return (
    <>
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:bg-card focus:px-4 focus:py-2">Skip to content</a>
      <SiteHeader />
      <main id="main">
        {/* Hero */}
        <section id="home" className="relative isolate overflow-hidden bg-primary">
          <img src={heroImg} alt="Illustrative image: children seen from behind studying at a wooden desk while an educator points to a notebook" width={1600} height={1008} className="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div className="hero-overlay absolute inset-0 -z-10" />
          <div className="mx-auto flex min-h-[88vh] max-w-7xl flex-col justify-center px-5 py-24 lg:px-8">
            <p className="eyebrow rise">Education. Skills. Opportunity. Empowerment.</p>
            <h1 className="rise mt-6 max-w-3xl text-5xl leading-[0.98] text-primary-foreground sm:text-6xl lg:text-8xl">
              Education Beyond <em className="text-gold">Circumstances.</em>
            </h1>
            <p className="rise mt-8 max-w-xl text-lg leading-relaxed text-primary-foreground/85 md:text-xl">
              Creating pathways to learning, confidence, skills, and opportunity for children who deserve the chance to build a better future.
            </p>
            <div className="rise mt-10 flex flex-wrap gap-4">
              <a href="#about" className="inline-flex items-center gap-2 rounded-sm bg-accent px-6 py-3.5 font-semibold text-accent-foreground transition hover:brightness-95">
                Discover Rabta <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
              <a href="#impact" className="inline-flex items-center gap-2 rounded-sm border border-primary-foreground/40 px-6 py-3.5 font-semibold text-primary-foreground transition hover:bg-primary-foreground/10">
                Explore Our Impact
              </a>
            </div>
            <p className="mt-auto pt-16 text-xs text-primary-foreground/50">Illustrative image — not a photograph of Rabta students.</p>
          </div>
        </section>

        {/* Snapshot */}
        <section aria-label="Impact snapshot" className="border-b border-border bg-card">
          <div className="mx-auto grid max-w-7xl grid-cols-1 divide-y divide-border px-5 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-5 lg:divide-x lg:px-8">
            {snapshot.map((s, i) => (
              <div key={i} className={`flex flex-col gap-3 py-8 lg:px-6 ${i === 0 ? "sm:col-span-2 lg:col-span-1 lg:pl-0" : ""}`}>
                <s.icon className="h-5 w-5 text-gold" aria-hidden="true" />
                {s.big && <p className="font-serif text-5xl leading-none text-primary">{s.big}</p>}
                <p className={s.big ? "text-sm font-semibold text-foreground" : "font-serif text-xl leading-snug text-primary"}>{s.label}</p>
                {s.note && <p className="text-xs text-muted-foreground">{s.note}</p>}
              </div>
            ))}
          </div>
        </section>

        {/* About */}
        <section id="about" className="py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-2 lg:gap-20 lg:px-8">
            <div>
              <SectionHead eyebrow="About Rabta" title="Learning That Opens Doors" />
              <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
                <p>Rabta — <span className="font-deva text-primary">राबता</span>, meaning connection — is a grassroots educational initiative in Derabassi, Punjab, committed to making learning and developmental opportunities accessible to underprivileged children.</p>
                <p>We go beyond textbooks. Alongside academic support, Rabta helps children develop confidence, communication, practical abilities and an awareness of the opportunities their futures can hold.</p>
              </div>
              <div className="mt-8 border-l-2 border-gold pl-5">
                <p className="eyebrow">Our mission</p>
                <p className="mt-2 text-foreground">To provide free educational support and skills development so that a child's financial circumstances never limit their learning.</p>
              </div>
              <figure className="mt-10 rounded-sm bg-primary p-8 text-primary-foreground">
                <Quote className="h-6 w-6 text-gold" aria-hidden="true" />
                <blockquote className="mt-3 font-serif text-2xl italic leading-snug md:text-3xl">
                  “A future where every child has access to education, skills and the opportunity to build a better life.”
                </blockquote>
                <figcaption className="eyebrow mt-4">Our vision</figcaption>
              </figure>
            </div>
            <img src={aboutImg} alt="Open notebooks, textbooks and pencils on a wooden desk beside a small plant" width={1008} height={1200} loading="lazy" className="aspect-[4/5] w-full rounded-sm object-cover shadow-soft" />
          </div>
        </section>

        {/* Programmes */}
        <section id="programmes" className="bg-secondary py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHead eyebrow="Our Programmes" title="Six areas of growth" intro="Every child is supported across academics and the skills that turn learning into opportunity." />
            <div className="mt-14 grid gap-px overflow-hidden rounded-sm border border-border bg-border sm:grid-cols-2 lg:grid-cols-3">
              {programmes.map((p, i) => (
                <article key={p.title} className="group flex h-full flex-col bg-card p-8 transition-colors hover:bg-background">
                  <div className="flex items-center justify-between">
                    <p.icon className="h-7 w-7 text-primary transition-colors group-hover:text-gold" strokeWidth={1.4} aria-hidden="true" />
                    <span className="font-serif text-sm text-muted-foreground">0{i + 1}</span>
                  </div>
                  <h3 className="mt-8 text-2xl text-primary">{p.title}</h3>
                  <p className="mt-3 leading-relaxed text-muted-foreground">{p.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach */}
        <section id="approach" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHead eyebrow="Our Approach" title="A five-step journey" center />
            <ol className="relative mt-16 grid gap-10 lg:grid-cols-5 lg:gap-6">
              <div aria-hidden="true" className="absolute left-[1.15rem] top-2 bottom-2 w-px bg-border lg:left-0 lg:right-0 lg:top-[1.15rem] lg:bottom-auto lg:h-px lg:w-auto" />
              {steps.map((s) => (
                <li key={s.n} className="relative flex gap-5 lg:flex-col">
                  <span className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-gold bg-background font-serif text-sm text-primary">{s.n}</span>
                  <div>
                    <h3 className="text-sm font-semibold tracking-[0.25em] text-primary" style={{ fontFamily: "var(--font-sans)" }}>{s.t.toUpperCase()}</h3>
                    <p className="mt-2 leading-relaxed text-muted-foreground">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Impact */}
        <section id="impact" className="bg-primary py-24 text-primary-foreground md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[1fr_1.2fr] lg:px-8">
            <div>
              <p className="eyebrow">Our Impact</p>
              <h2 className="mt-4 text-4xl leading-[1.05] md:text-5xl">From Learning to Opportunity</h2>
              <p className="mt-6 text-lg leading-relaxed text-primary-foreground/80">
                Rabta currently supports approximately 10–15 children through direct, in-person teaching by its founder — a small, community-driven model built on personal attention.
              </p>
              <p className="mt-4 text-sm text-primary-foreground/60">Figures are reported by Rabta and have not been independently audited.</p>
            </div>
            <article className="rounded-sm border border-primary-foreground/15 p-8 md:p-10">
              <p className="eyebrow">A story from Rabta</p>
              <h3 className="mt-4 text-3xl leading-tight">Preparing for an interview</h3>
              <div className="mt-5 space-y-4 leading-relaxed text-primary-foreground/80">
                <p>One Rabta student has been preparing for an interview opportunity with Starbucks. Rabta has supported this journey through interview preparation, confidence-building and communication practice.</p>
                <p>This is an interview-preparation journey, not a confirmed job placement. The student's identity is kept private to protect their dignity and safety.</p>
              </div>
            </article>
          </div>
        </section>

        {/* Founder */}
        <section id="founder" className="py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 md:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div className="flex aspect-[4/5] items-center justify-center rounded-sm border border-border bg-secondary">
              <div className="text-center">
                <p className="font-serif text-8xl italic text-primary/80">TR</p>
                <p className="eyebrow mt-4">Founder &amp; Educator</p>
              </div>
            </div>
            <div>
              <SectionHead eyebrow="Founder" title="Tammana Rathore" />
              <p className="mt-2 font-serif text-xl italic text-muted-foreground">Founder &amp; Educator</p>
              <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
                Tammana founded Rabta and personally teaches and mentors its students. Her work focuses on academics, communication, confidence, practical skills and career readiness — giving each child individual attention.
              </p>
              <a href={FOUNDER_IG} target="_blank" rel="noopener noreferrer" className="mt-8 inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline">
                <Instagram className="h-4 w-4" aria-hidden="true" /> Follow Tammana on Instagram <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section aria-labelledby="future" className="bg-secondary py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <p className="eyebrow">Future Direction</p>
            <h2 id="future" className="mt-4 text-4xl leading-[1.05] text-primary md:text-5xl">Where Rabta hopes to go</h2>
            <p className="mt-5 max-w-2xl text-lg text-muted-foreground">These are future goals — plans Rabta is working toward, not completed achievements.</p>
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {roadmap.map((r, i) => (
                <div key={r.stage} className={`rounded-sm border p-8 ${i === 2 ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card"}`}>
                  <p className="eyebrow">Goal · {r.stage}</p>
                  <ul className="mt-6 space-y-3">
                    {r.items.map((it) => (
                      <li key={it} className={`flex gap-3 ${i === 2 ? "font-serif text-2xl leading-snug" : "text-foreground"}`}>
                        {i < 2 && <span className="mt-2.5 h-1 w-3 shrink-0 bg-gold" aria-hidden="true" />}
                        {it}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Get involved */}
        <section id="get-involved" className="py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <SectionHead eyebrow="Get Involved" title="Help Create More Pathways to Opportunity." intro="We welcome educators, volunteers, institutions, organizations and supporters who would like to contribute. Share your interest and the Rabta team will get in touch." center />
            <div className="mt-14 grid gap-6 md:grid-cols-3">
              {[
                { t: "Volunteer With Rabta", d: "Interested in teaching or mentoring? Tell us how you'd like to help." },
                { t: "Explore a Partnership", d: "Schools and organizations can start a conversation about working together." },
                { t: "Contact the Team", d: "Questions, ideas or support — we'd be glad to hear from you." },
              ].map((c) => (
                <a key={c.t} href="#contact" className="group flex flex-col justify-between rounded-sm border border-border bg-card p-8 shadow-soft transition hover:border-gold">
                  <div>
                    <h3 className="text-2xl text-primary">{c.t}</h3>
                    <p className="mt-3 text-muted-foreground">{c.d}</p>
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Express interest <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="border-t border-border bg-secondary py-24 md:py-32">
          <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
            <div>
              <SectionHead eyebrow="Contact" title="Start a conversation" />
              <ul className="mt-8 space-y-4 text-foreground">
                <li className="flex items-center gap-3"><MapPin className="h-5 w-5 text-gold" aria-hidden="true" /> Derabassi, Punjab, India</li>
                <li><a href={ORG_IG} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary"><Instagram className="h-5 w-5 text-gold" aria-hidden="true" /> @rabata._.official</a></li>
                <li><a href={FOUNDER_IG} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-primary"><Instagram className="h-5 w-5 text-gold" aria-hidden="true" /> @rathore._.tammana (Founder)</a></li>
              </ul>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>

      <footer className="bg-forest-deep py-14 text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 px-5 md:flex-row md:items-end md:justify-between lg:px-8">
          <div>
            <Logo inverted className="text-primary-foreground" />
            <p className="mt-4 font-serif text-xl italic text-primary-foreground/80">Education. Skills. Opportunity. Empowerment.</p>
            <p className="mt-2 text-sm text-primary-foreground/60">Rabta (राबता) · Derabassi, Punjab, India</p>
          </div>
          <div className="flex flex-col gap-2 text-sm text-primary-foreground/70">
            <a href={ORG_IG} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Rabta on Instagram</a>
            <a href={FOUNDER_IG} target="_blank" rel="noopener noreferrer" className="hover:text-gold">Founder on Instagram</a>
            <p className="mt-2 text-primary-foreground/50">© {new Date().getFullYear()} Rabta</p>
          </div>
        </div>
      </footer>
    </>
  );
}
