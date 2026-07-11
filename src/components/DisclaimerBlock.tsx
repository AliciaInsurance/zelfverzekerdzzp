import { cn } from "@/lib/utils";

type DisclaimerBlockProps = {
  className?: string;
  variant?: "default" | "compact";
};

export function DisclaimerBlock({
  className,
  variant = "default",
}: DisclaimerBlockProps) {
  return (
    <aside
      className={cn(
        "rounded-lg border border-navy/10 bg-soft-bg text-sm text-muted leading-relaxed",
        variant === "compact" ? "p-4" : "p-6",
        className,
      )}
    >
      <p>
        De informatie op deze pagina is algemeen van aard en geen persoonlijk
        advies. Aan deze informatie kunnen geen rechten worden ontleend. De
        polisvoorwaarden van de betreffende verzekering zijn leidend.
      </p>
    </aside>
  );
}
