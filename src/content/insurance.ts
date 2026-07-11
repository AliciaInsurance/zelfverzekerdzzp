export type FAQItem = {
  question: string;
  answer: string;
};

export type ProductCategorySlug =
  | "aansprakelijkheid"
  | "inkomen-gezondheid"
  | "cyber-juridisch"
  | "bedrijfsmiddelen"
  | "reizen-mobiliteit";

export type ProductStatus = "direct" | "quote" | "coming-soon";

export type ProductCategory = {
  slug: ProductCategorySlug;
  title: string;
  description: string;
};

export type Product = {
  slug: string;
  title: string;
  shortTitle: string;
  category: ProductCategorySlug;
  shortDescription: string;
  whenRelevant: string;
  keyRisks: string[];
  status: ProductStatus;
  ctaLabel: string;
  directUrlCampaign: string;
  relatedProfessions: string[];
  hasProductPage: boolean;
  href: string;
  featured: boolean;
  subtitle: string;
  metaDescription: string;
  whatIs: string;
  covered: string[];
  notCovered: string[];
  whenRelevantDetail: string[];
  examples: string[];
  forWhom: string[];
  faq: FAQItem[];
};

/** @deprecated Use Product */
export type InsuranceProduct = Product;

export const productCategories: ProductCategory[] = [
  {
    slug: "aansprakelijkheid",
    title: "Aansprakelijkheid",
    description:
      "Bescherming wanneer jij schade veroorzaakt bij anderen of door een beroepsfout.",
  },
  {
    slug: "inkomen-gezondheid",
    title: "Inkomen & gezondheid",
    description:
      "Vangnet voor je inkomen en financiële zekerheid bij ziekte, ongeval of overlijden.",
  },
  {
    slug: "cyber-juridisch",
    title: "Cyber & juridisch",
    description:
      "Hulp bij digitale incidenten en juridische conflicten in je onderneming.",
  },
  {
    slug: "bedrijfsmiddelen",
    title: "Bedrijfsmiddelen",
    description:
      "Dekking voor spullen en apparatuur die je nodig hebt om te ondernemen.",
  },
  {
    slug: "reizen-mobiliteit",
    title: "Reizen & mobiliteit",
    description:
      "Verzekeringen voor zakelijke reizen, werk buiten Nederland en onderweg.",
  },
];

export const products: Product[] = [
  {
    slug: "avb",
    title: "Aansprakelijkheidsverzekering voor zzp'ers",
    shortTitle: "AVB",
    category: "aansprakelijkheid",
    shortDescription:
      "Bescherming wanneer jij per ongeluk schade veroorzaakt aan personen of spullen van anderen.",
    whenRelevant:
      "Wanneer je fysiek werk doet, op locatie bent of met materialen van anderen werkt.",
    keyRisks: [
      "Materiële schade bij opdrachtgevers",
      "Letselschade tijdens werkzaamheden",
      "Schade door meegenomen apparatuur",
    ],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "avb",
    relatedProfessions: ["consultant", "it-specialist", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/avb",
    featured: true,
    subtitle:
      "Bescherm je onderneming tegen schade aan personen of spullen van anderen.",
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
    title: "Beroepsaansprakelijkheidsverzekering voor zzp'ers",
    shortTitle: "BAV",
    category: "aansprakelijkheid",
    shortDescription:
      "Bescherming tegen financiële schade door een beroepsfout, verkeerd advies of nalatigheid.",
    whenRelevant:
      "Wanneer je advies geeft, specialistisch werk uitvoert of verantwoordelijk bent voor resultaten.",
    keyRisks: [
      "Financiële schade door verkeerd advies",
      "Fouten in professioneel werk",
      "Claims van opdrachtgevers",
    ],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "beroepsaansprakelijkheid",
    relatedProfessions: ["consultant", "it-specialist", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/beroepsaansprakelijkheid",
    featured: true,
    subtitle:
      "Bescherm je tegen financiële schade door een beroepsfout, verkeerd advies of nalatigheid.",
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
    title: "Cyberverzekering voor zzp'ers",
    shortTitle: "Cyber",
    category: "cyber-juridisch",
    shortDescription:
      "Bescherming tegen digitale risico's zoals datalekken, hacking en cyberincidenten.",
    whenRelevant:
      "Wanneer je klantdata verwerkt, online werkt of afhankelijk bent van digitale systemen.",
    keyRisks: [
      "Datalekken en misbruik van klantgegevens",
      "Ransomware en hacking",
      "Per ongeluk verzonden persoonsgegevens",
    ],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "cyber",
    relatedProfessions: ["consultant", "it-specialist", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/cyber",
    featured: true,
    subtitle:
      "Bescherm je onderneming tegen digitale risico's zoals datalekken, hacking en cyberincidenten.",
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
    title: "Arbeidsongeschiktheidsverzekering voor zzp'ers",
    shortTitle: "AOV",
    category: "inkomen-gezondheid",
    shortDescription:
      "Maandelijkse uitkering wanneer je door ziekte of een ongeval langere tijd niet kunt werken.",
    whenRelevant:
      "Wanneer je inkomen direct stopt als jij niet kunt werken en je geen ander vangnet hebt.",
    keyRisks: [
      "Langdurige ziekte of arbeidsongeschiktheid",
      "Geen inkomen zonder ziekteverzuimregeling",
      "Vaste lasten lopen door tijdens ziekte",
    ],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "aov",
    relatedProfessions: ["consultant", "it-specialist", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/aov",
    featured: true,
    subtitle:
      "Een vangnet wanneer je door ziekte of een ongeval langere tijd niet kunt werken.",
    metaDescription:
      "Lees wanneer een arbeidsongeschiktheidsverzekering (AOV) relevant kan zijn voor zzp'ers en wat je kunt verwachten.",
    whatIs:
      "Een arbeidsongeschiktheidsverzekering (AOV) biedt financiële ondersteuning wanneer je als zzp'er door ziekte of een ongeval niet kunt werken. Je ontvangt doorgaans een maandelijkse uitkering zolang je arbeidsongeschikt bent.",
    covered: [
      "Maandelijkse uitkering bij arbeidsongeschiktheid",
      "Financieel vangnet bij langdurige ziekte",
      "Dekking afgestemd op je beroep en inkomen",
    ],
    notCovered: [
      "Korte ziekteperiodes onder de wachttijd",
      "Arbeidsongeschiktheid door opzettelijk handelen",
      "Bestaande aandoeningen (afhankelijk van polisvoorwaarden)",
      "Inkomen buiten je zelfstandige activiteiten",
    ],
    whenRelevantDetail: [
      "Je bent volledig afhankelijk van je eigen inkomen",
      "Je hebt geen partner met voldoende inkomen als vangnet",
      "Je hebt hypotheek of vaste lasten die doorgaan bij ziekte",
      "Je wilt grip houden op je financiële situatie als zzp'er",
    ],
    examples: [
      "Je raakt langdurig arbeidsongeschikt door een sportblessure.",
      "Een burn-out maakt het maandenlang onmogelijk om te werken.",
      "Na een operatie kun je tijdelijk je opdrachten niet uitvoeren.",
    ],
    forWhom: [
      "ZZP'ers zonder ander inkomensvangnet",
      "Ondernemers met vaste lasten",
      "Zelfstandigen in fysiek of mentaal belastende beroepen",
      "Iedereen die zijn inkomen wil beschermen",
    ],
    faq: [
      {
        question: "Heb ik als zzp'er een AOV nodig?",
        answer:
          "Dat hangt af van je financiële situatie en of je een ander vangnet hebt. Als je inkomen stopt zodra jij niet kunt werken, kan een AOV relevant zijn.",
      },
      {
        question: "Wanneer start de uitkering?",
        answer:
          "Dat hangt af van de wachttijd die je kiest. Hoe langer de wachttijd, hoe lager de premie doorgaans is. De exacte voorwaarden staan in de polis.",
      },
      {
        question: "Kan ik een AOV online afsluiten?",
        answer:
          "Via Alicia Direct kun je online een indicatie krijgen en een AOV afsluiten. Controleer altijd de polisvoorwaarden.",
      },
    ],
  },
  {
    slug: "rechtsbijstand",
    title: "Rechtsbijstandverzekering voor zzp'ers",
    shortTitle: "Rechtsbijstand",
    category: "cyber-juridisch",
    shortDescription:
      "Juridische hulp bij conflicten met opdrachtgevers, leveranciers of andere partijen.",
    whenRelevant:
      "Wanneer je te maken kunt krijgen met juridische geschillen rondom je onderneming.",
    keyRisks: [
      "Conflicten met opdrachtgevers over contracten",
      "Incasso- of betalingsgeschillen",
      "Juridische kosten bij zakelijke disputes",
    ],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "rechtsbijstand",
    relatedProfessions: ["consultant", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/rechtsbijstand",
    featured: false,
    subtitle:
      "Juridische ondersteuning wanneer je als zzp'er te maken krijgt met een zakelijk conflict.",
    metaDescription:
      "Ontdek wanneer een rechtsbijstandverzekering relevant is voor zzp'ers en welke juridische situaties doorgaans worden gedekt.",
    whatIs:
      "Een rechtsbijstandverzekering voor zzp'ers biedt hulp bij juridische conflicten die voortkomen uit je ondernemersactiviteiten. Denk aan geschillen over contracten, betalingen of samenwerkingen.",
    covered: [
      "Juridisch advies bij zakelijke conflicten",
      "Bemiddeling en procederen rondom ondernemersgeschillen",
      "Hulp bij contractuele geschillen met opdrachtgevers",
    ],
    notCovered: [
      "Strafrechtelijke zaken",
      "Geschillen die al liepen vóór afsluiten",
      "Conflicten buiten je zakelijke activiteiten",
      "Boetes of strafrechtelijke sancties",
    ],
    whenRelevantDetail: [
      "Je werkt regelmatig met contracten en opdrachtgevers",
      "Je wilt juridische kosten beperken bij een conflict",
      "Je hebt te maken met complexe zakelijke afspraken",
      "Je wilt snel juridische hulp kunnen inschakelen",
    ],
    examples: [
      "Een opdrachtgever betaalt een factuur niet en dreigt met juridische stappen.",
      "Er ontstaat discussie over de interpretatie van een contract.",
      "Je krijgt te maken met een incassoprocedure van een leverancier.",
    ],
    forWhom: [
      "Consultants met complexe opdrachtovereenkomsten",
      "ZZP'ers die regelmatig contracten sluiten",
      "Ondernemers met meerdere opdrachtgevers",
      "Zelfstandigen die juridische risico's willen beperken",
    ],
    faq: [
      {
        question: "Is rechtsbijstand verplicht voor zzp'ers?",
        answer:
          "Nee, een rechtsbijstandverzekering is niet verplicht. Wel kan het helpen bij onverwachte juridische kosten.",
      },
      {
        question: "Dekt rechtsbijstand ook privégeschillen?",
        answer:
          "Een zakelijke rechtsbijstandverzekering richt zich op conflicten uit je ondernemersactiviteiten. Privégeschillen vallen doorgaans buiten de dekking.",
      },
      {
        question: "Kan ik rechtsbijstand combineren met een BAV?",
        answer:
          "Ja, BAV en rechtsbijstand vullen elkaar aan. BAV richt zich op financiële schade door beroepsfouten, rechtsbijstand op juridische hulp bij conflicten.",
      },
    ],
  },
  {
    slug: "ongevallen",
    title: "Ongevallenverzekering voor zzp'ers",
    shortTitle: "Ongevallen",
    category: "inkomen-gezondheid",
    shortDescription:
      "Financiële ondersteuning bij blijvend letsel of overlijden door een ongeval.",
    whenRelevant:
      "Wanneer je fysiek actief bent in je werk of veel onderweg bent voor opdrachten.",
    keyRisks: [
      "Blijvend letsel door een ongeval",
      "Onverwachte medische kosten",
      "Financiële gevolgen voor naasten",
    ],
    status: "quote",
    ctaLabel: "Offerte aanvragen",
    directUrlCampaign: "ongevallen",
    relatedProfessions: ["consultant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/ongevallen",
    featured: false,
    subtitle:
      "Extra financiële zekerheid wanneer je als zzp'er slachtoffer wordt van een ongeval.",
    metaDescription:
      "Lees wanneer een ongevallenverzekering relevant kan zijn voor zzp'ers en welke situaties doorgaans worden gedekt.",
    whatIs:
      "Een ongevallenverzekering biedt een uitkering bij blijvend letsel of overlijden als gevolg van een ongeval. Dit kan aanvullend zijn op andere verzekeringen die je als zzp'er hebt.",
    covered: [
      "Uitkering bij blijvend letsel door een ongeval",
      "Financiële ondersteuning bij ernstig letsel",
      "Dekking voor ongevallen tijdens werk of privé (afhankelijk van polis)",
    ],
    notCovered: [
      "Letsel door opzettelijk handelen",
      "Ziekte of aandoeningen zonder ongeval",
      "Ongevallen buiten de polisdekking",
      "Bestaande klachten vóór afsluiten",
    ],
    whenRelevantDetail: [
      "Je bent veel fysiek actief in je werk",
      "Je reist regelmatig voor opdrachten",
      "Je wilt extra financiële zekerheid bij ongeval",
      "Je hebt geen of beperkt ander ongevallen-vangnet",
    ],
    examples: [
      "Je valt op locatie en raakt blijvend beperkt in je werk.",
      "Een verkeersongeval maakt het onmogelijk om opdrachten uit te voeren.",
      "Je raakt gewond tijdens een sportactiviteit buiten werktijd.",
    ],
    forWhom: [
      "ZZP'ers met fysiek belastend werk",
      "Ondernemers die veel reizen voor opdrachten",
      "Zelfstandigen zonder aanvullend ongevallendekking",
      "Iedereen die extra zekerheid wil bij ongeval",
    ],
    faq: [
      {
        question: "Wat is het verschil tussen AOV en ongevallenverzekering?",
        answer:
          "Een AOV dekt inkomensverlies bij arbeidsongeschiktheid (ook door ziekte). Een ongevallenverzekering richt zich specifiek op de financiële gevolgen van een ongeval.",
      },
      {
        question: "Dekt een ongevallenverzekering ook privé-ongevallen?",
        answer:
          "Dat hangt af van de polisvoorwaarden. Sommige verzekeringen dekken ongevallen 24/7, andere alleen tijdens werkzaamheden.",
      },
      {
        question: "Hoe vraag ik een offerte aan?",
        answer:
          "Via Alicia Direct kun je een offerte aanvragen. De exacte dekking en premie hangen af van je situatie.",
      },
    ],
  },
  {
    slug: "zakelijke-spullen",
    title: "Verzekering voor zakelijke spullen en elektronica",
    shortTitle: "Zakelijke spullen",
    category: "bedrijfsmiddelen",
    shortDescription:
      "Dekking voor laptop, telefoon, camera en andere spullen die je nodig hebt om te werken.",
    whenRelevant:
      "Wanneer je waardevolle apparatuur of materialen gebruikt voor je opdrachten.",
    keyRisks: [
      "Diefstal of beschadiging van apparatuur",
      "Onverwachte vervangingskosten",
      "Stilstand wanneer je laptop of tools kapot gaan",
    ],
    status: "quote",
    ctaLabel: "Offerte aanvragen",
    directUrlCampaign: "zakelijke-spullen",
    relatedProfessions: ["it-specialist", "consultant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/zakelijke-spullen",
    featured: false,
    subtitle:
      "Bescherm de spullen en elektronica die je nodig hebt om als zzp'er te ondernemen.",
    metaDescription:
      "Lees wanneer een verzekering voor zakelijke spullen en elektronica relevant is voor zzp'ers.",
    whatIs:
      "Een verzekering voor zakelijke spullen en elektronica dekt schade aan of diefstal van apparatuur die je gebruikt voor je werk. Denk aan laptops, telefoons, camera's en andere bedrijfsmiddelen.",
    covered: [
      "Diefstal of beschadiging van zakelijke apparatuur",
      "Schade aan elektronica die je voor werk gebruikt",
      "Vervangingskosten bij verlies of total loss",
    ],
    notCovered: [
      "Slijtage en normale veroudering",
      "Schade door opzet of grove nalatigheid",
      "Spullen zonder aankoopbewijs (afhankelijk van polis)",
      "Privégebruik buiten zakelijke context (afhankelijk van polis)",
    ],
    whenRelevantDetail: [
      "Je werkt met een dure laptop of professionele apparatuur",
      "Je neemt spullen mee naar opdrachtgevers",
      "Diefstal of schade zou je direct kunnen raken in je werk",
      "Je hebt geen aparte dekking via een andere verzekering",
    ],
    examples: [
      "Je laptop wordt gestolen uit je auto op een opdracht.",
      "Je camera valt tijdens een opname en is niet meer te repareren.",
      "Je telefoon raakt beschadigd waardoor je administratie niet meer bereikbaar is.",
    ],
    forWhom: [
      "IT-specialisten met dure hardware",
      "Creatieve zzp'ers met professionele apparatuur",
      "Consultants die veel onderweg zijn met laptop",
      "Ondernemers zonder aparte inventarisdekking",
    ],
    faq: [
      {
        question: "Is mijn laptop al verzekerd via een andere polis?",
        answer:
          "Soms valt apparatuur onder een inboedel- of bedrijfsverzekering. Controleer je bestaande polissen voordat je aanvullend verzekert.",
      },
      {
        question: "Wat valt onder zakelijke elektronica?",
        answer:
          "Doorgaans apparatuur die je aantoonbaar voor je werk gebruikt, zoals laptops, telefoons, tablets en professionele tools.",
      },
      {
        question: "Hoe vraag ik een offerte aan?",
        answer:
          "Via Alicia Direct kun je aangeven welke spullen je wilt verzekeren en een offerte opvragen.",
      },
    ],
  },
  {
    slug: "zakelijke-reis",
    title: "Zakelijke reisverzekering voor zzp'ers",
    shortTitle: "Zakelijke reis",
    category: "reizen-mobiliteit",
    shortDescription:
      "Dekking voor zakelijke reizen, inclusief medische kosten en reisvertragingen in het buitenland.",
    whenRelevant:
      "Wanneer je regelmatig voor opdrachten reist, in Nederland of het buitenland.",
    keyRisks: [
      "Medische kosten in het buitenland",
      "Reisvertraging of annulering",
      "Verlies of diefstal van bagage",
    ],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "zakelijke-reis",
    relatedProfessions: ["consultant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/zakelijke-reis",
    featured: false,
    subtitle:
      "Reis met een gerust gevoel wanneer je voor opdrachten onderweg bent.",
    metaDescription:
      "Lees wanneer een zakelijke reisverzekering relevant is voor zzp'ers die regelmatig reizen voor opdrachten.",
    whatIs:
      "Een zakelijke reisverzekering biedt dekking wanneer je voor je werk reist. Denk aan medische kosten in het buitenland, hulp bij reisvertragingen en dekking voor bagage.",
    covered: [
      "Medische kosten tijdens zakelijke reizen",
      "Hulp bij reisvertraging of annulering",
      "Dekking voor bagage en spullen onderweg",
    ],
    notCovered: [
      "Reizen zonder zakelijk doel (afhankelijk van polis)",
      "Extreme sporten zonder aanvullende dekking",
      "Reizen naar gebieden met reisadvies (afhankelijk van polis)",
      "Bestaande medische klachten vóór afsluiten",
    ],
    whenRelevantDetail: [
      "Je reist regelmatig voor opdrachten in het buitenland",
      "Je hebt geen dekking via een creditcard of andere polis",
      "Je wilt medische kosten en reisvertragingen afdekken",
      "Je werkt vaak op locatie bij internationale opdrachtgevers",
    ],
    examples: [
      "Je wordt ziek tijdens een conferentie in het buitenland.",
      "Je vlucht vertraagt waardoor je een belangrijke afspraak mist.",
      "Je bagage met laptop verdwijnt op het vliegveld.",
    ],
    forWhom: [
      "Consultants die internationaal werken",
      "Projectmanagers op locatie bij opdrachtgevers",
      "ZZP'ers die regelmatig voor opdrachten reizen",
      "Ondernemers zonder reisdekking via andere kanalen",
    ],
    faq: [
      {
        question: "Heb ik als zzp'er een zakelijke reisverzekering nodig?",
        answer:
          "Dat hangt af van hoe vaak je reist en of je al dekking hebt via een andere verzekering of creditcard. Controleer je bestaande polissen.",
      },
      {
        question: "Wat is het verschil met een privéreisverzekering?",
        answer:
          "Een zakelijke reisverzekering richt zich op reizen voor je werk. Een privéreisverzekering dekt vakanties en privéreizen.",
      },
      {
        question: "Dekt deze verzekering ook binnen Nederland?",
        answer:
          "Dat hangt af van de polisvoorwaarden. Sommige verzekeringen dekken ook zakelijke reizen binnen Nederland.",
      },
    ],
  },
  {
    slug: "workation",
    title: "Workationverzekering voor zzp'ers",
    shortTitle: "Workation",
    category: "reizen-mobiliteit",
    shortDescription:
      "Dekking wanneer je tijdelijk vanuit het buitenland werkt als zzp'er.",
    whenRelevant:
      "Wanneer je vanuit het buitenland werkt aan opdrachten voor Nederlandse opdrachtgevers.",
    keyRisks: [
      "Medische kosten in het buitenland",
      "Onverwachte situaties tijdens langdurig verblijf",
      "Dekking bij langdurig werken abroad",
    ],
    status: "coming-soon",
    ctaLabel: "Meer informatie",
    directUrlCampaign: "workation",
    relatedProfessions: ["consultant", "it-specialist"],
    hasProductPage: false,
    href: "/verzekeringen",
    featured: false,
    subtitle:
      "Verzekering voor zzp'ers die tijdelijk vanuit het buitenland werken.",
    metaDescription:
      "Informatie over workationverzekeringen voor zzp'ers die vanuit het buitenland werken.",
    whatIs:
      "Een workationverzekering is bedoeld voor zzp'ers die tijdelijk vanuit het buitenland werken. De exacte dekking en voorwaarden worden nog vastgesteld.",
    covered: [],
    notCovered: [],
    whenRelevantDetail: [
      "Je werkt enkele weken of maanden vanuit het buitenland",
      "Je hebt geen passende reis- of zorgdekking abroad",
      "Je wilt zekerheid tijdens een workation-periode",
    ],
    examples: [],
    forWhom: [
      "ZZP'ers die remote werken vanuit het buitenland",
      "Digital nomads met Nederlandse opdrachtgevers",
    ],
    faq: [],
  },
  {
    slug: "orv",
    title: "Overlijdensrisicoverzekering voor zzp'ers",
    shortTitle: "ORV",
    category: "inkomen-gezondheid",
    shortDescription:
      "Financiële zekerheid voor je naasten wanneer jij overlijdt tijdens je loopbaan als zzp'er.",
    whenRelevant:
      "Wanneer naasten afhankelijk zijn van je inkomen of je hypotheek wilt afdekken.",
    keyRisks: [
      "Financiële gevolgen voor partner of kinderen",
      "Hypotheek of leningen zonder vangnet",
      "Onverwacht inkomensverlies voor naasten",
    ],
    status: "quote",
    ctaLabel: "Offerte aanvragen",
    directUrlCampaign: "orv",
    relatedProfessions: ["consultant", "accountant", "projectmanager"],
    hasProductPage: false,
    href: "/verzekeringen",
    featured: false,
    subtitle:
      "Bescherm je naasten financieel wanneer jij als zzp'er overlijdt.",
    metaDescription:
      "Lees wanneer een overlijdensrisicoverzekering (ORV) relevant kan zijn voor zzp'ers.",
    whatIs:
      "Een overlijdensrisicoverzekering (ORV) keert een bedrag uit aan je nabestaanden wanneer je overlijdt. Dit kan helpen bij hypotheek, vaste lasten of het inkomen van je gezin.",
    covered: [],
    notCovered: [],
    whenRelevantDetail: [
      "Je partner of kinderen zijn afhankelijk van je inkomen",
      "Je hebt een hypotheek of zakelijke lening",
      "Je wilt financiële zekerheid voor naasten regelen",
    ],
    examples: [],
    forWhom: [
      "ZZP'ers met partner of kinderen",
      "Ondernemers met hypotheek of leningen",
      "Zelfstandigen zonder pensioen- of nabestaandenvoorziening",
    ],
    faq: [],
  },
];

/** @deprecated Use products */
export const insuranceProducts = products;

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

/** @deprecated Use getProductBySlug */
export const getInsuranceBySlug = getProductBySlug;

export function getProductsWithPages(): Product[] {
  return products.filter((p) => p.hasProductPage);
}

/** @deprecated Use getProductsWithPages */
export const getInsurancePages = getProductsWithPages;

export function getProductsByCategory(
  category: ProductCategorySlug,
): Product[] {
  return products.filter((p) => p.category === category);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}

export function getCategoryBySlug(
  slug: ProductCategorySlug,
): ProductCategory | undefined {
  return productCategories.find((c) => c.slug === slug);
}

export function getProductsForProfession(professionSlug: string): Product[] {
  return products.filter((p) => p.relatedProfessions.includes(professionSlug));
}
