import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button, type ButtonProps } from "@/components/ui/button";
import { buildDirectUrl } from "@/lib/direct-url";
import { cn } from "@/lib/utils";

type CTAButtonProps = Omit<ButtonProps, "asChild"> & {
  campaign: string;
  content?: string;
  showArrow?: boolean;
  href?: string;
  external?: boolean;
};

export function CTAButton({
  campaign,
  content,
  children = "Bereken premie",
  showArrow = true,
  href,
  external = true,
  className,
  variant = "default",
  size = "default",
  ...props
}: CTAButtonProps) {
  const url = href ?? buildDirectUrl(campaign, content);

  if (!external && href) {
    return (
      <Button asChild variant={variant} size={size} className={className} {...props}>
        <Link href={href}>
          {children}
          {showArrow && <ArrowRight className="h-4 w-4" />}
        </Link>
      </Button>
    );
  }

  return (
    <Button asChild variant={variant} size={size} className={cn(className)} {...props}>
      <a href={url}>
        {children}
        {showArrow && <ArrowRight className="h-4 w-4" />}
      </a>
    </Button>
  );
}
