export type KnowledgeArticle = {
  slug: string;
  title: string;
  description: string;
  href: string;
  publishedAt: string;
  readingTime: string;
  sections: {
    id: string;
    title: string;
    content: string | string[];
  }[];
};

export const knowledgeArticles: KnowledgeArticle[] = [
  {
    slug: "avb-of-bav",
    title: "AVB of BAV: welke aansprakelijkheidsverzekering heb je als zzp'er nodig?",
    description:
      "Ontdek het verschil tussen AVB en BAV, wanneer beide relevant kunnen zijn en hoe je als zzp'er de juiste keuze maakt.",
    href: "/kennisbank/avb-of-bav",
    publishedAt: "2026-07-11",
    readingTime: "5 min",
    sections: [
      {
        id: "intro",
        title: "Intro",
        content:
          "Als zzp'er hoor je vaak over aansprakelijkheidsverzekeringen. Maar wat is nu het verschil tussen een AVB en een BAV? En heb je één van beide nodig, of soms allebei? In dit artikel leggen we het helder uit.",
      },
      {
        id: "avb",
        title: "Wat dekt een AVB?",
        content: [
          "Een aansprakelijkheidsverzekering voor bedrijven (AVB) richt zich op schade die jij als ondernemer veroorzaakt aan anderen. Denk aan:",
          "• Letselschade: een klant struikelt over jouw kabel op locatie",
          "• Materiële schade: je beschadigt per ongeluk spullen van een opdrachtgever",
          "• Schade door hulpmiddelen: schade veroorzaakt door apparatuur die je meeneemt",
          "Een AVB dekt doorgaans geen schade aan je eigen spullen en geen financiële schade door beroepsfouten.",
        ],
      },
      {
        id: "bav",
        title: "Wat dekt een BAV?",
        content: [
          "Een beroepsaansprakelijkheidsverzekering (BAV) richt zich op financiële schade door een beroepsfout. Denk aan:",
          "• Verkeerd of onvolledig advies dat financiële schade veroorzaakt",
          "• Een rekenfout of gemiste deadline met financiële gevolgen",
          "• Nalatigheid in je professionele werkzaamheden",
          "Een BAV dekt doorgaans geen fysieke schade aan spullen — dat valt onder een AVB.",
        ],
      },
      {
        id: "verschil",
        title: "Het belangrijkste verschil",
        content:
          "De kern: een AVB gaat over schade aan personen en spullen van anderen. Een BAV gaat over financiële schade door een fout in je beroepsmatige werk. Veel zzp'ers hebben baat bij één of beide verzekeringen, afhankelijk van hun werkzaamheden.",
      },
      {
        id: "voorbeelden",
        title: "Praktijkvoorbeelden",
        content: [
          "Consultant: geeft strategisch advies → BAV is relevant. Werkt op locatie met eigen materialen → AVB kan ook relevant zijn.",
          "IT-specialist: levert software met een bug → BAV. Laptop met klantdata gestolen → cyberverzekering kan relevant zijn.",
          "Schilder: verf op vloer van opdrachtgever → AVB. Geeft geen financieel advies → BAV doorgaans niet nodig.",
        ],
      },
      {
        id: "beide",
        title: "Wanneer kunnen beide verzekeringen relevant zijn?",
        content: [
          "Beide verzekeringen vullen elkaar aan. Relevant wanneer je:",
          "• Op locatie werkt én advies of specialistisch werk levert",
          "• Opdrachtgevers eisen dat je beide dekkingen hebt",
          "• Zowel fysieke als financiële risico's loopt in je werk",
          "Controleer altijd wat jouw opdrachtgevers en branche vereisen.",
        ],
      },
    ],
  },
];

export function getArticleBySlug(slug: string): KnowledgeArticle | undefined {
  return knowledgeArticles.find((a) => a.slug === slug);
}
