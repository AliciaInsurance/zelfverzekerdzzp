"use client";

import { useState } from "react";
import { Check, Sparkles } from "lucide-react";
import { CTAButton } from "@/components/CTAButton";
import { Button } from "@/components/ui/button";

const professions = [
  "Consultant",
  "IT-specialist",
  "Accountant",
  "Projectmanager",
];

const activities = [
  "Advies en projectmanagement",
  "Softwareontwikkeling",
  "Financiële dienstverlening",
  "Operationeel management",
];

export function AdviceDemo() {
  const [step, setStep] = useState<"form" | "result">("form");
  const [profession, setProfession] = useState("Consultant");
  const [revenue, setRevenue] = useState("85000");
  const [activity, setActivity] = useState("Advies en projectmanagement");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStep("result");
  };

  const handleReset = () => {
    setStep("form");
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-navy/10 bg-white shadow-lg">
      <div className="border-b border-navy/10 bg-gradient-to-r from-navy to-blue px-6 py-4">
        <div className="flex items-center gap-2 text-white">
          <Sparkles className="h-5 w-5" aria-hidden />
          <span className="font-medium">Verzekeringsindicatie</span>
        </div>
      </div>

      <div className="p-6 md:p-8">
        {step === "form" ? (
          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label
                htmlFor="profession"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                Beroep
              </label>
              <select
                id="profession"
                value={profession}
                onChange={(e) => setProfession(e.target.value)}
                className="w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              >
                {professions.map((p) => (
                  <option key={p} value={p}>
                    {p}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label
                htmlFor="revenue"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                Jaaromzet
              </label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-muted">
                  €
                </span>
                <input
                  id="revenue"
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="w-full rounded-lg border border-navy/15 bg-white py-2.5 pl-8 pr-4 text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
                  placeholder="85000"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="activity"
                className="mb-1.5 block text-sm font-medium text-navy"
              >
                Werkzaamheden
              </label>
              <select
                id="activity"
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full rounded-lg border border-navy/15 bg-white px-4 py-2.5 text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue"
              >
                {activities.map((a) => (
                  <option key={a} value={a}>
                    {a}
                  </option>
                ))}
              </select>
            </div>

            <Button type="submit" className="w-full">
              Toon indicatie
            </Button>
          </form>
        ) : (
          <div className="space-y-6">
            <div>
              <h3 className="mb-4 text-lg font-semibold text-navy">
                Mogelijk relevant voor jou
              </h3>
              <ul className="space-y-3">
                {["AVB", "BAV", "Cyber"].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 rounded-lg border border-aqua/20 bg-aqua/5 px-4 py-3"
                  >
                    <Check className="h-5 w-5 text-aqua" aria-hidden />
                    <span className="font-medium text-navy">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-sm text-muted">
              Dit is een algemene indicatie en geen persoonlijk
              verzekeringsadvies.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <CTAButton campaign="homepage" content="advice-demo" className="flex-1">
                Bereken premie
              </CTAButton>
              <Button
                type="button"
                variant="secondary"
                onClick={handleReset}
                className="flex-1"
              >
                Opnieuw invullen
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
