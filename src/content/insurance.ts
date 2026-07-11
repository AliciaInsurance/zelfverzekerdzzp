export type FAQItem = {
  question: string;
  answer: string;
};

export type InsuranceProduct = {
  slug: string;
  shortName: string;
  name: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  campaign: string;
  whenRelevant: string;
  hasProductPage: boolean;
  metaDescription: string;
  whatIs: string;
  covered: string[];
  notCovered: string[];
  whenRelevantDetail: string[];
  examples: string[];
  forWhom: string[];
  faq: FAQItem[];
};

export const insuranceProducts: InsuranceProduct[] = [
  {
    slug: "avb",
    shortName: "AVB",
    name: "Aansprakelijkheidsverzekering",
    title: "Aansprakelijkheidsverzekering voor zzp'ers",
    subtitle:
      "Bescherm je onderneming tegen schade aan personen of spullen van anderen.",
    description:
      "Een aansprakelijkheidsverzekering (AVB) kan helpen wanneer jij als zzp'er per ongeluk schade veroorzaakt aan anderen of hun eigendommen.",
    href: "/verzekeringen/avb",
    campaign: "avb",
    whenRelevant:
      "Wanneer je fysiek werk doet, op locatie bent of met materialen van anderen werkt.",
    hasProductPage: true,
    metaDescription:
      "Lees wanneer een aansprakelijkheidsverzekering (AVB) relevant is voor zzp'ers en wat doorgaans wel en niet verzekerd kan zijn.",
    whatIs:
      "Een aansprakelijkheidsverzekering voor bedrijven (AVB) richt zich op schade die jij als ondernemer veroorzaakt aan anderen. Denk aan letsel of materiële schade tijdens je werkzaamheden.",
    covered: [
      "Materiële schade aan spullen of eigendommen van derden",
      "Letselschade bij anderen door jouw werkzaamheden",
      "Schade veroorzaakt door medewerkers of hulpmiddelen die je inzet",
    ],
    notCovered: [
      "Schade aan je eigen spullen of apparatuur",
      "Schade door opzet of bewuste nalatigheid",
      "Schade die valt onder een beroepsaansprakelijkheidsverzekering",
      "Schade buiten je zakelijke activiteiten",
    ],
    whenRelevantDetail: [
      "Je werkt op locatie bij opdrachtgevers",
      "Je gebruikt materialen of apparatuur van klanten",
      "Je hebt fysiek contact met de omgeving van opdrachtgevers",
      "Opdrachtgevers vragen om aansprakelijkheidsdekking",
    ],
    examples: [
      "Je beschadigt spullen van een opdrachtgever.",
      "Een klant struikelt over jouw apparatuur.",
      "Je veroorzaakt tijdens je werkzaamheden per ongeluk materiële schade.",
    ],
    forWhom: [
      "Consultants die op locatie werken",
      "ZZP'ers met fysieke werkzaamheden",
      "Ondernemers die regelmatig bij klanten op bezoek zijn",
      "ZZP'ers die materialen of apparatuur meenemen naar opdrachten",
    ],
    faq: [
      {
        question: "Is een AVB verplicht voor zzp'ers?",
        answer:
          "In veel situaties is een AVB niet wettelijk verplicht, maar opdrachtgevers kunnen wel vragen om aansprakelijkheidsdekking. Controleer altijd wat jouw branche of contract vereist.",
      },
      {
        question: "Wat is het verschil tussen AVB en BAV?",
        answer:
          "Een AVB richt zich op schade aan personen of spullen van anderen. Een BAV richt zich op financiële schade door een beroepsfout of verkeerd advies.",
      },
      {
        question: "Dekt een AVB schade aan mijn eigen spullen?",
        answer:
          "Nee, doorgaans dekt een AVB schade die jij veroorzaakt bij anderen, niet schade aan je eigen eigendommen.",
      },
    ],
  },
  {
    slug: "beroepsaansprakelijkheid",
    shortName: "BAV",
    name: "Beroepsaansprakelijkheidsverzekering",
    title: "Beroepsaansprakelijkheidsverzekering voor zzp'ers",
    subtitle:
      "Bescherm je tegen financiële schade door een beroepsfout, verkeerd advies of nalatigheid.",
    description:
      "Een beroepsaansprakelijkheidsverzekering (BAV) kan relevant zijn wanneer een fout in je werk financiële schade veroorzaakt bij een opdrachtgever.",
    href: "/verzekeringen/beroepsaansprakelijkheid",
    campaign: "beroepsaansprakelijkheid",
    whenRelevant:
      "Wanneer je advies geeft, specialistisch werk uitvoert of verantwoordelijk bent voor resultaten.",
    hasProductPage: true,
    metaDescription:
      "Ontdek wanneer een beroepsaansprakelijkheidsverzekering (BAV) relevant is voor zzp'ers en welke risico's doorgaans worden gedekt.",
    whatIs:
      "Een beroepsaansprakelijkheidsverzekering (BAV) richt zich op financiële schade die een opdrachtgever lijdt door een fout, verkeerd advies of nalatigheid in jouw beroepsuitoefening.",
    covered: [
      "Financiële schade door een beroepsfout",
      "Schade door verkeerd of onvolledig advies",
      "Schade door nalatigheid in je professionele werk",
    ],
    notCovered: [
      "Opzettelijke fouten of fraude",
      "Schade aan fysieke spullen (valt doorgaans onder AVB)",
      "Boetes of strafrechtelijke claims",
      "Schade buiten je beroepsmatige activiteiten",
    ],
    whenRelevantDetail: [
      "Je geeft advies of aanbevelingen aan opdrachtgevers",
      "Je bent verantwoordelijk voor financiële of juridische resultaten",
      "Fouten in je werk kunnen grote financiële gevolgen hebben",
      "Opdrachtgevers eisen een beroepsaansprakelijkheidsverzekering",
    ],
    examples: [
      "Een consultant geeft advies dat financiële schade veroorzaakt.",
      "Een accountant mist een belangrijke deadline.",
      "Een projectmanager maakt een fout in de planning of aansturing.",
    ],
    forWhom: [
      "Consultants en adviseurs",
      "Accountants en boekhouders",
      "IT-specialisten en softwareontwikkelaars",
      "Projectmanagers en interim-managers",
    ],
    faq: [
      {
        question: "Heb ik als zzp'er een BAV nodig?",
        answer:
          "Dat hangt af van je beroep, je werkzaamheden en de eisen van opdrachtgevers. Als je advies geeft of verantwoordelijk bent voor resultaten, kan een BAV relevant zijn.",
      },
      {
        question: "Wat valt onder een beroepsfout?",
        answer:
          "Een beroepsfout is een fout in je professionele werk waardoor een opdrachtgever financiële schade lijdt. Denk aan verkeerd advies, een rekenfout of een gemiste deadline.",
      },
      {
        question: "Kan ik een BAV combineren met een AVB?",
        answer:
          "Ja, AVB en BAV vullen elkaar doorgaans aan. AVB richt zich op schade aan personen en spullen, BAV op financiële schade door beroepsfouten.",
      },
    ],
  },
  {
    slug: "cyber",
    shortName: "Cyber",
    name: "Cyberverzekering",
    title: "Cyberverzekering voor zzp'ers",
    subtitle:
      "Bescherm je onderneming tegen digitale risico's zoals datalekken, hacking en cyberincidenten.",
    description:
      "Een cyberverzekering kan helpen bij de gevolgen van digitale incidenten, zoals datalekken, ransomware of misbruik van klantgegevens.",
    href: "/verzekeringen/cyber",
    campaign: "cyber",
    whenRelevant:
      "Wanneer je klantdata verwerkt, online werkt of afhankelijk bent van digitale systemen.",
    hasProductPage: true,
    metaDescription:
      "Lees wanneer een cyberverzekering relevant is voor zzp'ers en welke digitale risico's doorgaans worden gedekt.",
    whatIs:
      "Een cyberverzekering richt zich op de financiële en operationele gevolgen van cyberincidenten. Denk aan datalekken, hacking, ransomware en het per ongeluk delen van persoonsgegevens.",
    covered: [
      "Hulp bij datalekken en cyberincidenten",
      "Kosten voor herstel en crisisbeheersing",
      "Aansprakelijkheid bij misbruik of verlies van klantdata",
    ],
    notCovered: [
      "Schade door opzettelijk handelen",
      "Incidenten die al bekend waren vóór afsluiten",
      "Algemene IT-storingen zonder security-component",
      "Boetes zonder verzekerde dekking in de polis",
    ],
    whenRelevantDetail: [
      "Je verwerkt persoonsgegevens of vertrouwelijke klantdata",
      "Je werkt veel online of in de cloud",
      "Je bent afhankelijk van laptops, e-mail en digitale systemen",
      "Een cyberincident kan je bedrijfsvoering stilleggen",
    ],
    examples: [
      "Je laptop met klantdata wordt gestolen.",
      "Je krijgt te maken met ransomware.",
      "Je verstuurt per ongeluk persoonsgegevens naar de verkeerde ontvanger.",
    ],
    forWhom: [
      "IT-specialisten en developers",
      "Consultants met toegang tot vertrouwelijke data",
      "Accountants en boekhouders",
      "Elke zzp'er die online klantgegevens beheert",
    ],
    faq: [
      {
        question: "Is een cyberverzekering nodig als ik weinig data verwerk?",
        answer:
          "Ook met beperkte dataverwerking kun je te maken krijgen met phishing, ransomware of per ongeluk verzonden e-mails. Beoordeel je digitale risico's op basis van je werkzaamheden.",
      },
      {
        question: "Wat gebeurt er bij een datalek?",
        answer:
          "Afhankelijk van de polis kan ondersteuning worden geboden bij melding, herstel en communicatie. De exacte dekking staat in de polisvoorwaarden.",
      },
      {
        question: "Dekt een cyberverzekering ook mijn eigen laptop?",
        answer:
          "Dat verschilt per polis. Hardware vervanging valt doorgaans niet standaard onder een cyberverzekering. Raadpleeg de polisvoorwaarden voor details.",
      },
    ],
  },
  {
    slug: "aov",
    shortName: "AOV",
    name: "Arbeidsongeschiktheidsverzekering",
    title: "Arbeidsongeschiktheidsverzekering (AOV)",
    subtitle:
      "Een vangnet wanneer je door ziekte of een ongeval langere tijd niet kunt werken.",
    description:
      "Met een AOV kun je een maandelijkse uitkering ontvangen als je door ziekte of een ongeval niet kunt werken. Zo houd je grip op je inkomen als zzp'er.",
    href: "/verzekeringen",
    campaign: "aov",
    whenRelevant:
      "Wanneer je inkomen direct stopt als jij niet kunt werken en je geen ander vangnet hebt.",
    hasProductPage: false,
    metaDescription:
      "Lees wanneer een arbeidsongeschiktheidsverzekering (AOV) relevant kan zijn voor zzp'ers.",
    whatIs:
      "Een arbeidsongeschiktheidsverzekering (AOV) biedt financiële ondersteuning wanneer je als zzp'er door ziekte of een ongeval niet kunt werken.",
    covered: [],
    notCovered: [],
    whenRelevantDetail: [],
    examples: [],
    forWhom: [],
    faq: [],
  },
];

export function getInsuranceBySlug(slug: string): InsuranceProduct | undefined {
  return insuranceProducts.find((p) => p.slug === slug);
}

export function getInsurancePages(): InsuranceProduct[] {
  return insuranceProducts.filter((p) => p.hasProductPage);
}
