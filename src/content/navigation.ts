export const mainNav = [
  { label: "Verzekeringen", href: "/verzekeringen" },
  { label: "Beroepen", href: "/beroepen" },
  { label: "Kennisbank", href: "/kennisbank" },
  { label: "Over ons", href: "/over-ons" },
] as const;

export const footerNav = {
  primary: mainNav,
  legal: [
    { label: "Privacy", href: "/privacy" },
    { label: "Disclaimer", href: "/disclaimer" },
  ],
} as const;

export const footerDisclaimer =
  "ZelfverzekerdZZP is een initiatief van Alicia. De informatie op deze website is algemeen van aard en geen persoonlijk advies. Aan deze informatie kunnen geen rechten worden ontleend. De polisvoorwaarden van de betreffende verzekering zijn leidend.";
