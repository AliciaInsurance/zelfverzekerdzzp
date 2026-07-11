import { cn } from "@/lib/utils";
import { Container } from "@/components/Container";

type HeroProps = {
  title: string;
  subtitle: string;
  children?: React.ReactNode;
  className?: string;
  align?: "left" | "center";
  size?: "default" | "large";
};

export function Hero({
  title,
  subtitle,
  children,
  className,
  align = "left",
  size = "default",
}: HeroProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-gradient-to-br from-soft-bg via-white to-blue/5 py-16 md:py-24",
        className,
      )}
    >
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-aqua/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-32 h-96 w-96 rounded-full bg-blue/10 blur-3xl" />
      <Container>
        <div
          className={cn(
            "relative max-w-3xl",
            align === "center" && "mx-auto text-center",
          )}
        >
          <h1
            className={cn(
              "mb-4 font-semibold tracking-tight text-navy",
              size === "large"
                ? "text-4xl md:text-5xl lg:text-6xl"
                : "text-3xl md:text-4xl lg:text-5xl",
            )}
          >
            {title}
          </h1>
          <p className="mb-8 text-lg leading-relaxed text-muted md:text-xl">
            {subtitle}
          </p>
          {children && (
            <div
              className={cn(
                "flex flex-wrap gap-4",
                align === "center" && "justify-center",
              )}
            >
              {children}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
}
