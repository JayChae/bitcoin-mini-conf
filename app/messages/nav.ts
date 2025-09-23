export type NavItem = { label: string; href: string };

const enItems: NavItem[] = [
  { label: "Tickets", href: "#home" },
  { label: "Speakers", href: "#speakers" },
  { label: "Schedule", href: "#schedule" },
  { label: "Sponsors", href: "#sponsors" },
] as const;

const koItems: NavItem[] = [
  { label: "티켓", href: "#home" },
  { label: "연사 소개", href: "#speakers" },
  { label: "일정", href: "#schedule" },
  { label: "후원자", href: "#sponsors" },
] as const;

const navItems = {
  en: enItems,
  ko: koItems,
};

export default navItems;
