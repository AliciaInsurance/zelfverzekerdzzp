const DIRECT_BASE_URL = "https://direct.alicia.insure";

export function buildDirectUrl(campaign: string, content?: string): string {
  const url = new URL(DIRECT_BASE_URL);

  url.searchParams.set("utm_source", "zelfverzekerdzzp");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", campaign);

  if (content) {
    url.searchParams.set("utm_content", content);
  }

  return url.toString();
}
