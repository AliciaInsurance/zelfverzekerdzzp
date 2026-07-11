import Link from "next/link";
import {
  ArrowRight,
  Briefcase,
  Calculator,
  Code,
  Kanban,
} from "lucide-react";
import type { Profession } from "@/content/professions";

const iconMap = {
  briefcase: Briefcase,
  code: Code,
  calculator: Calculator,
  kanban: Kanban,
};

type ProfessionCardProps = {
  profession: Profession;
};

export function ProfessionCard({ profession }: ProfessionCardProps) {
  const Icon = iconMap[profession.icon];

  return (
    <Link
      href={profession.href}
      className="group flex h-full flex-col rounded-xl border border-navy/10 bg-white p-6 shadow-sm transition-all hover:border-blue/30 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
    >
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-navy/5 transition-colors group-hover:bg-blue/10">
        <Icon className="h-5 w-5 text-navy transition-colors group-hover:text-blue" aria-hidden />
      </div>
      <h3 className="mb-2 text-lg font-semibold text-navy group-hover:text-blue">
        {profession.name}
      </h3>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-muted">
        {profession.description}
      </p>
      <span className="inline-flex items-center gap-1 text-sm font-medium text-blue">
        Bekijk verzekeringen
        <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
