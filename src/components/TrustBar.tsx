import { CheckCircle2 } from "lucide-react";
import { trustBarItems } from "@/content/faq";

export function TrustBar() {
  return (
    <div className="border-y border-navy/10 bg-white py-6">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 sm:px-6 lg:px-8">
        {trustBarItems.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-2 text-sm font-medium text-navy"
          >
            <CheckCircle2 className="h-4 w-4 text-aqua" aria-hidden />
            {item.label}
          </div>
        ))}
      </div>
    </div>
  );
}
