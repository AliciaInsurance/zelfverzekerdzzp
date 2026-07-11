import { Clock, MessageSquare, Target, Zap } from "lucide-react";
import { whyUsFeatures } from "@/content/faq";

const icons = [Clock, MessageSquare, Target, Zap];

export function FeatureGrid() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {whyUsFeatures.map((feature, index) => {
        const Icon = icons[index] ?? Clock;
        return (
          <div
            key={feature.title}
            className="rounded-xl border border-navy/10 bg-white p-6 shadow-sm"
          >
            <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10">
              <Icon className="h-5 w-5 text-blue" aria-hidden />
            </div>
            <h3 className="mb-2 font-semibold text-navy">{feature.title}</h3>
            <p className="text-sm leading-relaxed text-muted">
              {feature.description}
            </p>
          </div>
        );
      })}
    </div>
  );
}
