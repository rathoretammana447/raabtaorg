import { cn } from "@/lib/utils";

export function Logo({ className, inverted = false }: { className?: string; inverted?: boolean }) {
  return (
    <span className={cn("inline-flex items-center gap-3", className)}>
      <svg viewBox="0 0 40 40" className="h-9 w-9 shrink-0" aria-hidden="true">
        <circle cx="20" cy="20" r="19" fill="none" stroke="currentColor" strokeOpacity="0.35" />
        <path d="M8 26c4-1.5 8-1.5 12 1 4-2.5 8-2.5 12-1V13c-4-1.5-8-1.5-12 1-4-2.5-8-2.5-12-1z" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
        <path d="M20 14v13" stroke="currentColor" strokeWidth="1.4" />
        <path d="M20 13c0-3 2-5.5 5-6.5-.2 3-2.2 5.6-5 6.5z" className="fill-gold" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className={cn("font-deva text-lg", inverted ? "text-primary-foreground" : "text-primary")}>राबता</span>
        <span className={cn("mt-0.5 text-[0.65rem] font-semibold tracking-[0.35em]", inverted ? "text-primary-foreground/70" : "text-muted-foreground")}>RABTA</span>
      </span>
    </span>
  );
}
