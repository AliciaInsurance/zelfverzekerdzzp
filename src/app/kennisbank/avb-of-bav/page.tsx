import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CTAButton } from "@/components/CTAButton";
import { DisclaimerBlock } from "@/components/DisclaimerBlock";
import { JsonLd } from "@/components/JsonLd";
import { Section } from "@/components/Section";
import { getArticleBySlug } from "@/content/knowledge";
import { siteConfig } from "@/content/site";
import { articleJsonLd, breadcrumbJsonLd } from "@/lib/json-ld";
import { createPageMetadata } from "@/lib/metadata";

export function generateMetadata() {
  const article = getArticleBySlug("avb-of-bav");
  if (!article) return {};
  return createPageMetadata({
    title: article.title,
    description: article.description,
    path: article.href,
    ogType: "article",
  });
}

export default function AvbOfBavArticlePage() {
  const article = getArticleBySlug("avb-of-bav");
  if (!article) notFound();

  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Kennisbank", href: "/kennisbank" },
    { label: "AVB of BAV" },
  ];

  return (
    <>
      <JsonLd
        data={[
          articleJsonLd({
            title: article.title,
            description: article.description,
            url: `${siteConfig.url}${article.href}`,
            publishedAt: article.publishedAt,
          }),
          breadcrumbJsonLd(
            breadcrumbs.map((b) => ({
              name: b.label,
              url: b.href
                ? `${siteConfig.url}${b.href}`
                : `${siteConfig.url}${article.href}`,
            })),
          ),
        ]}
      />

      <Section background="soft" className="py-12 md:py-16">
        <article className="mx-auto max-w-3xl">
          <Breadcrumbs items={breadcrumbs} />
          <header className="mb-10">
            <h1 className="mb-4 text-3xl font-semibold tracking-tight text-navy md:text-4xl">
              {article.title}
            </h1>
            <p className="text-muted leading-relaxed">{article.description}</p>
            <p className="mt-2 text-sm text-muted">
              {article.readingTime} leestijd
            </p>
          </header>

          <div className="space-y-10">
            {article.sections.map((section) => (
              <section key={section.id} id={section.id}>
                {section.id !== "intro" && (
                  <h2 className="mb-4 text-xl font-semibold text-navy">
                    {section.title}
                  </h2>
                )}
                {Array.isArray(section.content) ? (
                  <div className="space-y-2 text-muted leading-relaxed">
                    {section.content.map((paragraph, i) => (
                      <p key={i}>{paragraph}</p>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted leading-relaxed">{section.content}</p>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-xl border border-navy/10 bg-white p-6 text-center">
            <h2 className="mb-3 text-lg font-semibold text-navy">
              Wil je weten welke verzekering bij jou past?
            </h2>
            <p className="mb-6 text-sm text-muted">
              Bereken online je premie en ontdek welke dekking relevant kan zijn.
            </p>
            <CTAButton campaign="kennisbank" content="avb-of-bav" />
          </div>

          <div className="mt-8">
            <DisclaimerBlock />
          </div>
        </article>
      </Section>
    </>
  );
}
