import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: "white" | "soft" | "navy";
};

export function Section({
  children,
  className,
  id,
  background = "white",
}: SectionProps) {
  const bgClass = {
    white: "bg-white",
    soft: "bg-soft-bg",
    navy: "bg-navy text-white",
  }[background];

  return (
    <section id={id} className={cn("py-16 md:py-20", bgClass, className)}>
      <Container>{children}</Container>
    </section>
  );
}
