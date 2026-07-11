import type { FAQItem } from "@/content/insurance";

export type Profession = {
  slug: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  campaign: string;
  icon: "briefcase" | "code" | "calculator" | "kanban";
  metaDescription: string;
  risks: string[];
  recommendedInsurance: string[];
  example: {
    title: string;
    description: string;
  };
  faq: FAQItem[];
};

export const professions: Profession[] = [
  {
    slug: "consultant",
    name: "Consultant",
    title: "Verzekeringen voor consultants",
    subtitle: "Dekking die past bij advieswerk, projecten en opdrachtgevers.",
    description:
      "Als consultant geef je advies, begeleid je projecten en werk je intensief samen met opdrachtgevers. Dat brengt specifieke aansprakelijkheidsrisico's met zich mee.",
    href: "/beroepen/consultant",
    campaign: "consultant",
    icon: "briefcase",
    metaDescription:
      "Ontdek welke verzekeringen relevant zijn voor consultants: BAV, AVB en cyberverzekering uitgelegd voor zzp'ers.",
    risks: [
      "Verkeerd of onvolledig advies",
      "Financiële schade bij een opdrachtgever",
      "Discussie over projectresultaat of scope",
    ],
    recommendedInsurance: ["BAV", "AVB", "Cyber"],
    example: {
      title: "Advies met financiële gevolgen",
      description:
        "Een consultant adviseert over een reorganisatie. Door een misverstand over de scope ontstaat vertraging en extra kosten bij de opdrachtgever. De opdrachtgever houdt de consultant aansprakelijk voor de financiële schade.",
    },
    faq: [
      {
        question: "Welke verzekering is het belangrijkst voor consultants?",
        answer:
          "Dat hangt af van je werkzaamheden. Geef je veel advies? Dan is een BAV doorgaans relevant. Werk je op locatie? Dan kan een AVB ook belangrijk zijn.",
      },
      {
        question: "Moet ik als consultant verzekerd zijn?",
        answer:
          "Dat is niet altijd verplicht, maar veel opdrachtgevers eisen aansprakelijkheidsdekking in het contract. Controleer wat jouw opdrachtgevers vragen.",
      },
    ],
  },
  {
    slug: "it-specialist",
    name: "IT-specialist",
    title: "Verzekeringen voor IT-specialisten",
    subtitle: "Bescherming bij softwarefouten, datalekken en systeemuitval.",
    description:
      "IT-specialisten werken met systemen, code en gevoelige data. Een kleine fout of een cyberincident kan grote gevolgen hebben voor opdrachtgevers.",
    href: "/beroepen/it-specialist",
    campaign: "it-specialist",
    icon: "code",
    metaDescription:
      "Welke verzekeringen passen bij IT-specialisten? BAV, cyber en AVB uitgelegd voor zzp'ers in IT.",
    risks: [
      "Softwarefout of bug met financiële gevolgen",
      "Datalek of verlies van klantdata",
      "Systeemuitval bij een opdrachtgever",
    ],
    recommendedInsurance: ["BAV", "Cyber", "AVB"],
    example: {
      title: "Bug in productiesoftware",
      description:
        "Een IT-specialist levert een update die onverwacht een storing veroorzaakt bij de opdrachtgever. De opdrachtgever lijdt financiële schade door stilstand en houdt de zzp'er aansprakelijk.",
    },
    faq: [
      {
        question: "Heb ik als IT-specialist een cyberverzekering nodig?",
        answer:
          "Als je klantdata verwerkt of toegang hebt tot systemen van opdrachtgevers, kan een cyberverzekering relevant zijn. Beoordeel je digitale risico's op basis van je opdrachten.",
      },
      {
        question: "Dekt een BAV programmeerfouten?",
        answer:
          "Een BAV richt zich doorgaans op financiële schade door beroepsfouten. Of een specifieke programmeerfout gedekt is, hangt af van de polisvoorwaarden.",
      },
    ],
  },
  {
    slug: "accountant",
    name: "Accountant",
    title: "Verzekeringen voor accountants",
    subtitle: "Dekking bij fouten in aangiftes, deadlines en financieel advies.",
    description:
      "Accountants werken met gevoelige financiële gegevens en strikte deadlines. Een fout kan grote financiële en fiscale gevolgen hebben voor opdrachtgevers.",
    href: "/beroepen/accountant",
    campaign: "accountant",
    icon: "calculator",
    metaDescription:
      "Welke verzekeringen zijn relevant voor accountants? BAV, cyber en AVB voor zzp'ers in financiële dienstverlening.",
    risks: [
      "Fout in een belastingaangifte",
      "Gemiste deadline met financiële gevolgen",
      "Verkeerd financieel advies",
    ],
    recommendedInsurance: ["BAV", "Cyber", "AVB"],
    example: {
      title: "Gemiste aangifte-deadline",
      description:
        "Een accountant mist per ongeluk de deadline voor een belastingaangifte. De opdrachtgever krijgt een boete en houdt de accountant aansprakelijk voor de extra kosten.",
    },
    faq: [
      {
        question: "Is een BAV standaard voor accountants?",
        answer:
          "Veel accountants sluiten een BAV af vanwege de financiële impact van fouten in hun werk. Opdrachtgevers vragen hier regelmatig om.",
      },
      {
        question: "Waarom cyberverzekering voor accountants?",
        answer:
          "Accountants verwerken gevoelige financiële en persoonsgegevens. Bij een datalek of cyberincident kan ondersteuning nodig zijn.",
      },
    ],
  },
  {
    slug: "projectmanager",
    name: "Projectmanager",
    title: "Verzekeringen voor projectmanagers",
    subtitle: "Dekking bij planningsfouten, budgetoverschrijdingen en aansturingsrisico's.",
    description:
      "Projectmanagers zijn verantwoordelijk voor planning, budget en voortgang. Fouten in aansturing of planning kunnen leiden tot claims van opdrachtgevers.",
    href: "/beroepen/projectmanager",
    campaign: "projectmanager",
    icon: "kanban",
    metaDescription:
      "Welke verzekeringen passen bij projectmanagers? BAV, AVB en cyberverzekering voor zzp'ers.",
    risks: [
      "Vertraging door verkeerde planning",
      "Budgetoverschrijding door aansturingsfouten",
      "Foutieve communicatie of scope-afspraken",
    ],
    recommendedInsurance: ["BAV", "AVB", "Cyber"],
    example: {
      title: "Vertraging door planningsfout",
      description:
        "Een projectmanager onderschat de doorlooptijd van een project. De opdrachtgever lijdt financiële schade door vertraging en stelt de projectmanager aansprakelijk.",
    },
    faq: [
      {
        question: "Valt planningsfout onder beroepsaansprakelijkheid?",
        answer:
          "Financiële schade door een beroepsfout in planning of aansturing kan onder een BAV vallen. De exacte dekking hangt af van de polisvoorwaarden.",
      },
      {
        question: "Heb ik als projectmanager ook een AVB nodig?",
        answer:
          "Als je op locatie werkt of fysieke schade kunt veroorzaken, kan een AVB aanvullend relevant zijn naast een BAV.",
      },
    ],
  },
];

export function getProfessionBySlug(slug: string): Profession | undefined {
  return professions.find((p) => p.slug === slug);
}
