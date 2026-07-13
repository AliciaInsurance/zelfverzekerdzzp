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
  status: "direct";
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
    description: "Bescherming bij schade aan anderen of door een beroepsfout.",
  },
  {
    slug: "inkomen-gezondheid",
    title: "Inkomen & gezondheid",
    description: "Financiële zekerheid bij ziekte, ongeval of overlijden.",
  },
  {
    slug: "cyber-juridisch",
    title: "Cyber & juridisch",
    description: "Hulp bij digitale incidenten en zakelijke conflicten.",
  },
  {
    slug: "bedrijfsmiddelen",
    title: "Bedrijfsmiddelen",
    description: "Dekking voor de spullen en apparatuur waarmee je werkt.",
  },
  {
    slug: "reizen-mobiliteit",
    title: "Reizen & mobiliteit",
    description: "Voor zakelijke reizen, werk in het buitenland en onderweg.",
  },
];

export const products: Product[] = [
  {
    slug: "avb",
    title: "Aansprakelijkheidsverzekering voor zzp'ers",
    shortTitle: "AVB",
    category: "aansprakelijkheid",
    shortDescription: "Voor schade aan personen of spullen van anderen door jouw werk.",
    whenRelevant: "Als je op locatie werkt, spullen van anderen gebruikt of fysieke schade kunt veroorzaken.",
    keyRisks: ["Letselschade bij anderen", "Materiële schade bij een klant", "Een aansprakelijkheidsclaim"],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "avb",
    relatedProfessions: ["consultant", "it-specialist", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/avb",
    featured: true,
    subtitle: "Zakelijke bescherming wanneer jouw werk schade bij anderen veroorzaakt.",
    metaDescription: "Ontdek wat een AVB voor zzp'ers doet: dekking bij letsel en materiële schade, het verschil met privé en BAV, en wanneer deze verzekering past.",
    whatIs: "Een aansprakelijkheidsverzekering voor bedrijven (AVB) helpt bij schade die je als ondernemer per ongeluk veroorzaakt aan personen of spullen van anderen. Je privé-aansprakelijkheidsverzekering dekt schade tijdens je werk doorgaans niet.",
    covered: ["Letsel dat door jouw werkzaamheden ontstaat", "Materiële schade aan eigendommen van anderen", "Verweer en juridische kosten bij een gedekte, ook onterechte, claim"],
    notCovered: ["Schade aan je eigen spullen", "Financiële schade door een advies- of beroepsfout", "Opzet of bewuste roekeloosheid", "Situaties die zijn uitgesloten in de polisvoorwaarden"],
    whenRelevantDetail: ["Je werkt bij opdrachtgevers op locatie", "Je plaatst apparatuur, materialen of kabels", "Je werk kan mensen of eigendommen raken", "Een opdrachtgever vraagt om een AVB"],
    examples: ["Een bezoeker struikelt over jouw kabel.", "Je beschadigt per ongeluk een vloer bij een klant.", "Een klant stelt je aansprakelijk voor schade die volgens jou niet door jou is veroorzaakt."],
    forWhom: ["Zzp'ers met fysiek of praktisch werk", "Consultants en IT'ers die op locatie werken", "Ondernemers die materialen meenemen", "Iedereen die zakelijke aansprakelijkheidsrisico's wil beoordelen"],
    faq: [
      { question: "Waarom is mijn privé-AVP niet genoeg?", answer: "Een particuliere aansprakelijkheidsverzekering is bedoeld voor privéschade. Schade die ontstaat tijdens je onderneming valt daar meestal buiten." },
      { question: "Wat is het verschil tussen AVB en BAV?", answer: "Een AVB gaat vooral over letsel en schade aan spullen. Een BAV richt zich op financiële schade door een beroepsfout, bijvoorbeeld verkeerd advies." },
      { question: "Geldt een AVB ook in het buitenland?", answer: "Dat kan, maar de geldigheid en uitzonderingen verschillen per polis. De polisvoorwaarden zijn altijd leidend." },
    ],
  },
  {
    slug: "beroepsaansprakelijkheid",
    title: "Beroepsaansprakelijkheidsverzekering voor zzp'ers",
    shortTitle: "BAV",
    category: "aansprakelijkheid",
    shortDescription: "Voor financiële schade bij een beroepsfout, verkeerd advies of nalatigheid.",
    whenRelevant: "Als jouw advies, ontwerp, berekening of professioneel werk financiële gevolgen voor een klant kan hebben.",
    keyRisks: ["Verkeerd of onvolledig advies", "Fouten in professioneel werk", "Kosten van een aansprakelijkheidsclaim"],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "beroepsaansprakelijkheid",
    relatedProfessions: ["consultant", "it-specialist", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/beroepsaansprakelijkheid",
    featured: true,
    subtitle: "Bescherming bij financiële schade door een fout in je vak.",
    metaDescription: "Lees wanneer een beroepsaansprakelijkheidsverzekering voor zzp'ers relevant is, wat beroepsfouten zijn en hoe een BAV verschilt van een AVB.",
    whatIs: "Een beroepsaansprakelijkheidsverzekering (BAV) is bedoeld voor financiële schade van een opdrachtgever door een fout in je professionele werk. Denk aan verkeerd advies, een foutieve berekening of een gemiste deadline.",
    covered: ["Financiële schade door een gedekte beroepsfout", "Verkeerd of onvolledig professioneel advies", "Juridische hulp en verweer bij een gedekte claim"],
    notCovered: ["Schade aan personen of fysieke spullen", "Opzet, fraude of strafbare feiten", "Boetes en sancties", "Werkzaamheden buiten de omschrijving op je polis"],
    whenRelevantDetail: ["Je geeft advies of maakt ontwerpen", "Je beheert processen, financiën of data", "Een fout kan leiden tot omzetverlies bij een klant", "Een opdrachtgever stelt een BAV als voorwaarde"],
    examples: ["Een advies bevat een fout waardoor een klant kosten maakt.", "Een deadline wordt door een professionele vergissing gemist.", "Een ontwerp of berekening blijkt niet bruikbaar."],
    forWhom: ["Adviseurs en consultants", "IT-specialisten en developers", "Accountants en boekhouders", "Project- en interimmanagers"],
    faq: [
      { question: "Wat is een beroepsfout?", answer: "Dat is een fout, nalatigheid of verkeerd advies in je vak waardoor een opdrachtgever financiële schade lijdt." },
      { question: "Heb ik naast een BAV ook een AVB nodig?", answer: "Dat kan verstandig zijn: BAV en AVB dekken verschillende risico's. De eerste gaat over vermogensschade, de tweede vooral over letsel en materiële schade." },
      { question: "Is een BAV verplicht?", answer: "Niet altijd wettelijk, maar sommige beroepsgroepen, opdrachtgevers en contracten stellen deze verzekering wel als eis." },
    ],
  },
  {
    slug: "cyber",
    title: "Cyberverzekering voor zzp'ers",
    shortTitle: "Cyber",
    category: "cyber-juridisch",
    shortDescription: "Hulp bij datalekken, hacking, ransomware en andere digitale incidenten.",
    whenRelevant: "Als je online werkt, klantgegevens verwerkt of afhankelijk bent van e-mail, cloud en apparatuur.",
    keyRisks: ["Datalekken", "Ransomware en hacking", "Stilstand door een cyberincident"],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "cyber",
    relatedProfessions: ["consultant", "it-specialist", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/cyber",
    featured: true,
    subtitle: "Ondersteuning wanneer een digitaal incident je onderneming raakt.",
    metaDescription: "Ontdek wanneer een cyberverzekering voor zzp'ers past en welke hulp mogelijk is bij datalekken, phishing, hacking en ransomware.",
    whatIs: "Een cyberverzekering richt zich op de gevolgen van digitale incidenten, zoals hacking, ransomware, phishing of het verkeerd versturen van persoonsgegevens. De dekking kan bestaan uit hulp bij herstel, communicatie en aansprakelijkheid; de polisvoorwaarden bepalen wat precies is verzekerd.",
    covered: ["Hulp bij een datalek of cyberincident", "Kosten voor herstel en crisisbeheersing binnen de polis", "Aansprakelijkheid bij verlies of misbruik van klantdata"],
    notCovered: ["Opzettelijk handelen", "Incidenten die al bekend waren bij het afsluiten", "Gewone IT-storingen zonder cyberoorzaak", "Kosten of boetes die niet onder de polisdekking vallen"],
    whenRelevantDetail: ["Je verwerkt persoonsgegevens", "Je gebruikt cloudsoftware en e-mail voor je werk", "Je laptop bevat klant- of bedrijfsgegevens", "Een digitale storing kan je werk stilleggen"],
    examples: ["Een aanvaller vergrendelt je bestanden.", "Je mailt persoonsgegevens naar de verkeerde ontvanger.", "Je laptop met klantinformatie wordt gestolen."],
    forWhom: ["IT'ers en developers", "Adviseurs met vertrouwelijke klantdata", "Accountants en boekhouders", "Iedere zzp'er die digitaal onderneemt"],
    faq: [
      { question: "Heb ik cyberdekking nodig als ik weinig data heb?", answer: "Ook met beperkte data kun je te maken krijgen met phishing, ransomware of een verkeerd verzonden e-mail. Kijk naar je afhankelijkheid van digitale systemen." },
      { question: "Wat gebeurt er bij een datalek?", answer: "Afhankelijk van je polis kun je ondersteuning krijgen bij onderzoek, herstel, melding en communicatie. Raadpleeg altijd de polisvoorwaarden." },
      { question: "Is mijn laptop zelf verzekerd?", answer: "Niet vanzelf. Een cyberverzekering gaat vooral over de gevolgen van een incident; apparatuur kan een aparte dekking nodig hebben." },
    ],
  },
  {
    slug: "aov",
    title: "Arbeidsongeschiktheidsverzekering voor zzp'ers",
    shortTitle: "AOV",
    category: "inkomen-gezondheid",
    shortDescription: "Een maandelijkse uitkering als ziekte of een ongeval je werk langdurig belemmert.",
    whenRelevant: "Als je inkomen grotendeels stopt wanneer je niet meer kunt werken.",
    keyRisks: ["Langdurige ziekte", "Ongeval en arbeidsongeschiktheid", "Vaste lasten zonder inkomen"],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "aov",
    relatedProfessions: ["consultant", "it-specialist", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/aov",
    featured: true,
    subtitle: "Een inkomensvangnet als je door ziekte of een ongeval niet kunt werken.",
    metaDescription: "Lees hoe een AOV voor zzp'ers werkt: maandelijkse uitkering bij arbeidsongeschiktheid, eigen risicoperiode, ziekte en ongeval.",
    whatIs: "Een arbeidsongeschiktheidsverzekering (AOV) kan een maandelijkse uitkering geven wanneer je door ziekte of een ongeval niet of minder kunt werken. Je kiest onder meer het verzekerde inkomen en de eigen risicoperiode. De uitkering start alleen wanneer je volgens de polis voldoende arbeidsongeschikt bent, vaak vanaf 25%.",
    covered: ["Een maandelijkse uitkering bij gedekte arbeidsongeschiktheid", "Inkomensbescherming bij ziekte en een ongeval", "Dekking die je kunt afstemmen op beroep en inkomen"],
    notCovered: ["De periode binnen je gekozen eigen risicoperiode", "Opzet of situaties die zijn uitgesloten", "Bestaande klachten als de polis die uitsluit", "Psychische klachten wanneer die niet zijn meeverzekerd"],
    whenRelevantDetail: ["Je hebt geen werkgever die loon doorbetaalt", "Je vaste privé- en zakelijke lasten lopen door", "Je wilt een reserve aanvullen met een structureel vangnet", "Je wilt de fiscale gevolgen van je keuze meenemen"],
    examples: ["Na een operatie kun je maanden niet werken.", "Een ongeval beperkt je in je beroep.", "Langdurige ziekte maakt het onmogelijk om opdrachten uit te voeren."],
    forWhom: ["Zzp'ers zonder ander inkomensvangnet", "Ondernemers met vaste lasten", "Zelfstandigen met lichamelijk of mentaal belastend werk", "Iedereen die inkomensrisico wil afwegen"],
    faq: [
      { question: "Wanneer keert een AOV uit?", answer: "Na je gekozen eigen risicoperiode en wanneer je volgens de polis voldoende arbeidsongeschikt bent. De exacte voorwaarden staan in de polis." },
      { question: "Dekt een AOV ook psychische klachten?", answer: "Dat verschilt per verzekering en gekozen dekking. Controleer dit vooraf in de polisvoorwaarden." },
      { question: "Is de premie aftrekbaar?", answer: "Premie voor een AOV is in veel gevallen fiscaal aftrekbaar als uitgave voor inkomensvoorzieningen. Bespreek jouw situatie zo nodig met een adviseur of de Belastingdienst." },
    ],
  },
  {
    slug: "rechtsbijstand",
    title: "Rechtsbijstandverzekering voor zzp'ers",
    shortTitle: "Rechtsbijstand",
    category: "cyber-juridisch",
    shortDescription: "Juridische hulp bij zakelijke conflicten met klanten, leveranciers of andere partijen.",
    whenRelevant: "Als je juridische ondersteuning wilt bij geschillen rond je onderneming.",
    keyRisks: ["Onbetaalde facturen", "Contractgeschillen", "Conflicten met leveranciers"],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "rechtsbijstand",
    relatedProfessions: ["consultant", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/rechtsbijstand",
    featured: false,
    subtitle: "Zakelijke rechtshulp wanneer een conflict je onderneming raakt.",
    metaDescription: "Ontdek wat zakelijke rechtsbijstand voor zzp'ers doet bij onbetaalde facturen, contractgeschillen en conflicten met leveranciers.",
    whatIs: "Een zakelijke rechtsbijstandverzekering biedt rechtshulp bij conflicten die voortkomen uit je onderneming. Het is geen schadevergoeding: de verzekering helpt je bijvoorbeeld met advies, bemiddeling of juridische bijstand binnen de gekozen dekking.",
    covered: ["Juridisch advies bij zakelijke conflicten", "Hulp bij onbetaalde facturen binnen de polis", "Bijstand bij geschillen met klanten of leveranciers"],
    notCovered: ["Privégeschillen", "Conflicten die al bestonden voor de ingangsdatum", "Boetes, strafrechtelijke sancties en opzet", "Een schadevergoeding voor jouw eigen verlies"],
    whenRelevantDetail: ["Je werkt met contracten en algemene voorwaarden", "Je stuurt facturen aan klanten", "Je bent afhankelijk van leveranciers of samenwerkingspartners", "Je wilt niet bij elk conflict zelf juridische hulp organiseren"],
    examples: ["Een opdrachtgever laat een factuur onbetaald.", "Een leverancier komt afspraken niet na.", "Er ontstaat discussie over de uitleg van een opdrachtovereenkomst."],
    forWhom: ["Zzp'ers met zakelijke contracten", "Ondernemers met meerdere klanten", "Zelfstandigen die facturen sturen", "Professionals die juridische hulp willen kunnen inschakelen"],
    faq: [
      { question: "Vergoedt rechtsbijstand mijn schade?", answer: "Nee. Rechtsbijstand is vooral hulp bij het oplossen van een juridisch conflict, geen vergoeding van de schade die je zelf lijdt." },
      { question: "Helpt rechtsbijstand bij een onbetaalde factuur?", answer: "Dat kan binnen de gekozen zakelijke dekking. Wachttijden, voorwaarden en uitzonderingen staan in de polisvoorwaarden." },
      { question: "Zijn privéconflicten meeverzekerd?", answer: "Nee, deze productinformatie gaat over zakelijke rechtsbijstand. Voor privézaken heb je doorgaans een aparte particuliere dekking nodig." },
    ],
  },
  {
    slug: "ongevallen",
    title: "Ongevallenverzekering voor zzp'ers",
    shortTitle: "Ongevallen",
    category: "inkomen-gezondheid",
    shortDescription: "Een eenmalige uitkering bij blijvend letsel of overlijden door een ongeval.",
    whenRelevant: "Als je extra financiële zekerheid wilt bij de gevolgen van een ongeval, thuis of tijdens je werk.",
    keyRisks: ["Blijvend letsel", "Overlijden door een ongeval", "Financiële gevolgen voor naasten"],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "ongevallen",
    relatedProfessions: ["consultant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/ongevallen",
    featured: false,
    subtitle: "Extra zekerheid bij blijvend letsel of overlijden door een ongeval.",
    metaDescription: "Lees hoe een ongevallenverzekering voor zzp'ers werkt: eenmalige uitkering bij een ongeval, wereldwijd en privé én zakelijk volgens de polis.",
    whatIs: "Een ongevallenverzekering geeft een eenmalige uitkering bij blijvend letsel of overlijden door een ongeval. Veel polissen bieden 24 uur per dag en wereldwijd dekking, voor privé en zakelijk gebruik; controleer altijd de voorwaarden. Ziekte valt niet onder een ongevallenverzekering.",
    covered: ["Eenmalige uitkering bij blijvend letsel door een ongeval", "Eenmalige uitkering bij overlijden door een ongeval", "Ongevallen tijdens werk en privé als dit in de polis is opgenomen"],
    notCovered: ["Ziekte of een aandoening zonder ongeval", "Opzet en uitgesloten activiteiten", "Inkomensverlies als zodanig", "Situaties buiten de polisvoorwaarden"],
    whenRelevantDetail: ["Je wilt naast je reserves een apart ongevallen-vangnet", "Je werkt of reist regelmatig onderweg", "Je wilt dat ook privé-ongevallen worden meegenomen", "Je zoekt een aanvulling, geen vervanging voor een AOV"],
    examples: ["Een verkeersongeval leidt tot blijvend letsel.", "Je valt tijdens een klus of in je vrije tijd.", "Een ongeval heeft financiële gevolgen voor je naasten."],
    forWhom: ["Zzp'ers die extra zekerheid zoeken", "Ondernemers die veel onderweg zijn", "Zelfstandigen met een actief beroep", "Iedereen die het risico van een ongeval wil afwegen"],
    faq: [
      { question: "Wat is het verschil met een AOV?", answer: "Een AOV kan maandelijks inkomen aanvullen bij arbeidsongeschiktheid door ziekte of een ongeval. Een ongevallenverzekering keert eenmalig uit en alleen na een ongeval." },
      { question: "Geldt de dekking ook privé?", answer: "Bij een 24/7-polis vaak wel, maar de precieze dekking verschilt. De polisvoorwaarden zijn leidend." },
      { question: "Keert deze verzekering uit bij ziekte?", answer: "Nee, een ongevallenverzekering is bedoeld voor gevolgen van een ongeval, niet voor ziekte." },
    ],
  },
  {
    slug: "zakelijke-spullen",
    title: "Verzekering voor zakelijke spullen en elektronica",
    shortTitle: "Zakelijke spullen",
    category: "bedrijfsmiddelen",
    shortDescription: "Voor je laptop, apparatuur en andere zakelijke spullen bij schade of diefstal.",
    whenRelevant: "Als je niet zonder je laptop, telefoon, camera, gereedschap of andere apparatuur kunt werken.",
    keyRisks: ["Diefstal van apparatuur", "Schade aan laptop of tools", "Stilstand door ontbrekende bedrijfsmiddelen"],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "zakelijke-spullen",
    relatedProfessions: ["it-specialist", "consultant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/zakelijke-spullen",
    featured: false,
    subtitle: "Bescherm de apparatuur en spullen die je nodig hebt om te ondernemen.",
    metaDescription: "Lees wanneer een verzekering voor zakelijke spullen past bij zzp'ers met een laptop, apparatuur, gereedschap of andere bedrijfsmiddelen.",
    whatIs: "Een verzekering voor zakelijke spullen kan schade aan of diefstal van bedrijfsmiddelen afdekken. Denk aan een laptop, telefoon, camera, gereedschap of andere apparatuur die je voor je werk gebruikt.",
    covered: ["Diefstal van zakelijke apparatuur binnen de polis", "Beschadiging van laptop, apparatuur of gereedschap", "Zakelijke spullen die je meeneemt naar opdrachten"],
    notCovered: ["Normale slijtage en veroudering", "Opzet of grove nalatigheid", "Spullen die niet onder de opgegeven dekking vallen", "Uitsluitingen die in de polisvoorwaarden staan"],
    whenRelevantDetail: ["Je laptop is onmisbaar voor je werk", "Je neemt apparatuur mee naar klanten", "Vervanging na diefstal of schade is kostbaar", "Je wilt je bestaande inboedel- of inventarisdekking aanvullen"],
    examples: ["Je laptop wordt gestolen tijdens een opdracht.", "Een camera raakt beschadigd tijdens professioneel gebruik.", "Je telefoon of gereedschap valt en is niet meer te gebruiken."],
    forWhom: ["IT'ers met hardware", "Creatieve zzp'ers met apparatuur", "Consultants die mobiel werken", "Ondernemers met gereedschap of andere bedrijfsmiddelen"],
    faq: [
      { question: "Is mijn zakelijke laptop al ergens verzekerd?", answer: "Dat kan, bijvoorbeeld via een andere bedrijfs- of woonverzekering, maar zakelijke dekking is niet vanzelfsprekend. Controleer je bestaande polis." },
      { question: "Welke spullen kan ik verzekeren?", answer: "Dat verschilt per product. Het gaat meestal om zakelijke apparatuur en bedrijfsmiddelen die je voor je werk gebruikt." },
      { question: "Is slijtage verzekerd?", answer: "Doorgaans niet. Verzekeringen zijn meestal bedoeld voor plotselinge schade of diefstal, afhankelijk van de polisvoorwaarden." },
    ],
  },
  {
    slug: "zakelijke-reis",
    title: "Zakelijke reisverzekering voor zzp'ers",
    shortTitle: "Zakelijke reisverzekering",
    category: "reizen-mobiliteit",
    shortDescription: "Doorlopende dekking voor zakelijke reizen, remote werken en workations in het buitenland.",
    whenRelevant: "Als je voor werk reist, tijdelijk remote werkt in het buitenland of als digital nomad op opdracht bent.",
    keyRisks: ["Medische kosten in het buitenland", "Bagage en zakelijke spullen onderweg", "Problemen tijdens een zakelijke reis of workation"],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "zakelijke-reis",
    relatedProfessions: ["consultant", "it-specialist", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/zakelijke-reis",
    featured: false,
    subtitle: "Doorlopende reisdekking voor zakelijke trips, remote werken en workations.",
    metaDescription: "Zakelijke reisverzekering voor zzp'ers: doorlopende dekking voor werkreizen, remote werken, workations en digital nomads. Lees wat de polisvoorwaarden bepalen.",
    whatIs: "Een zakelijke reisverzekering is een doorlopende verzekering voor reizen met een zakelijk doel. Dat kan een klantbezoek, congres of tijdelijke workation zijn: remote werken vanuit het buitenland als zzp'er. De verzekering is niet bedoeld voor je privéreizen.",
    covered: ["Medische kosten tijdens een gedekte zakelijke reis", "Bagage en zakelijke spullen onderweg volgens de polis", "Hulp bij problemen tijdens een zakelijke reis of verblijf"],
    notCovered: ["Vakanties en andere privéreizen", "Werk of verblijf dat langer duurt dan de maximale reisduur", "Reizen naar uitgesloten gebieden", "Situaties die niet aan de polisvoorwaarden voldoen"],
    whenRelevantDetail: ["Je reist naar klanten, congressen of seminars", "Je werkt tijdelijk remote vanuit het buitenland", "Je bent digital nomad met zakelijke opdrachten", "Je wilt gedurende een doorlopende periode zakelijk kunnen reizen"],
    examples: ["Je wordt ziek tijdens een zakelijke afspraak in het buitenland.", "Je bagage met werkspullen raakt kwijt op weg naar een conferentie.", "Je werkt tijdelijk vanuit het buitenland aan een opdracht."],
    forWhom: ["Zzp'ers die internationaal werken", "Remote professionals en digital nomads", "Consultants en projectmanagers op locatie", "Ondernemers die voor werk reizen"],
    faq: [
      { question: "Is remote werken in het buitenland verzekerd?", answer: "Dat kan binnen de voorwaarden voor zakelijke reizen en de maximale verblijfsduur. Deze dekking is bedoeld voor onder meer workations en niet voor een privéreis." },
      { question: "Hoe lang mag ik in het buitenland verblijven?", answer: "Bij deze zakelijke reisverzekering kan een verblijf tot 180 dagen in het buitenland passen, afhankelijk van de polisvoorwaarden en jouw situatie." },
      { question: "Geldt de verzekering ook in Nederland?", answer: "Zakelijke seminars of bijeenkomsten in Nederland met een overnachting kunnen onder voorwaarden meeverzekerd zijn. Controleer de polisvoorwaarden." },
      { question: "Is Europa inbegrepen?", answer: "Europa is doorgaans het uitgangspunt voor de basisdekking. Kijk voor de gekozen regio, werelddekking en uitzonderingen altijd in de polisvoorwaarden." },
    ],
  },
  {
    slug: "orv",
    title: "Overlijdensrisicoverzekering voor zzp'ers",
    shortTitle: "ORV",
    category: "inkomen-gezondheid",
    shortDescription: "Een eenmalige uitkering voor je nabestaanden als je overlijdt tijdens de looptijd.",
    whenRelevant: "Als je partner, kinderen, hypotheek of onderneming afhankelijk zijn van jouw inkomen.",
    keyRisks: ["Wegvallend inkomen voor je gezin", "Hypotheek of lening die doorloopt", "Zakelijke kosten voor nabestaanden"],
    status: "direct",
    ctaLabel: "Bereken premie",
    directUrlCampaign: "orv",
    relatedProfessions: ["consultant", "accountant", "projectmanager"],
    hasProductPage: true,
    href: "/verzekeringen/orv",
    featured: false,
    subtitle: "Financiële zekerheid voor je nabestaanden als jij overlijdt.",
    metaDescription: "Lees wanneer een overlijdensrisicoverzekering voor zzp'ers past: eenmalige uitkering voor nabestaanden, hypotheek, vaste lasten en zakelijke continuïteit.",
    whatIs: "Een overlijdensrisicoverzekering (ORV) keert een vooraf gekozen bedrag eenmalig uit als je overlijdt binnen de looptijd van de verzekering. Daarmee kunnen je nabestaanden bijvoorbeeld woonlasten, een hypotheek, vaste gezinsuitgaven of zakelijke kosten opvangen.",
    covered: ["Eenmalige uitkering bij overlijden tijdens de looptijd", "Een zelf te kiezen begunstigde binnen de mogelijkheden van de polis", "Financiële ruimte voor hypotheek, vaste lasten of bedrijfsverplichtingen"],
    notCovered: ["Overlijden na afloop van de gekozen looptijd", "Uitsluitingen die op jouw polis van toepassing zijn", "Situaties waarin niet aan de acceptatie- of polisvoorwaarden is voldaan", "Een maandelijkse inkomensuitkering"],
    whenRelevantDetail: ["Je partner of kinderen rekenen op jouw inkomen", "Je hebt een hypotheek of andere lening", "Je onderneming heeft kosten die niet meteen stoppen", "Je wilt zelf bepalen wie financieel wordt beschermd"],
    examples: ["Je partner kan woonlasten blijven betalen.", "Een hypotheek of lening kan deels worden afgelost.", "Een nabestaande heeft tijd om zakelijke zaken zorgvuldig af te ronden."],
    forWhom: ["Zzp'ers met een partner of kinderen", "Ondernemers met een hypotheek", "Zelfstandigen met zakelijke leningen of vaste kosten", "Iedereen die financiële bescherming voor nabestaanden wil regelen"],
    faq: [
      { question: "Wat keert een ORV uit?", answer: "Een ORV keert bij overlijden binnen de looptijd doorgaans één keer een vooraf gekozen bedrag uit aan de begunstigde." },
      { question: "Wie ontvangt de uitkering?", answer: "Je kunt een begunstigde aanwijzen volgens de mogelijkheden van de verzekeraar. Denk aan je partner, kinderen of, in bepaalde situaties, een hypotheekverstrekker." },
      { question: "Is een ORV hetzelfde als een uitvaartverzekering?", answer: "Nee. Een uitvaartverzekering is gericht op uitvaartkosten. Een ORV is bedoeld om nabestaanden financieel ruimte te geven voor bredere lasten." },
    ],
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
