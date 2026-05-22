/**
 * SectionLabel — a small, monospaced technical label.
 *
 * Used to title sections of the site, echoing the panel-and-placard
 * language of aerospace instrumentation.
 */
export default function SectionLabel({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-[0.22em] text-mist-muted">
      <span className="h-px w-8 bg-crimson/70" aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
