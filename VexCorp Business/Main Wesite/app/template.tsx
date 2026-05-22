/**
 * template.tsx — re-mounts on every navigation, giving each page a
 * smooth, subtle fade-in. Kept CSS-only to avoid an animation library.
 */
export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="animate-fadeIn">{children}</div>;
}
