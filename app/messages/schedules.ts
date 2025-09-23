export type Schedule = {
  title: string;
  date: string;
  description: string;
  content: string;
  image?: string;
  alt?: string;
};

const koSchedules: Schedule[] = [
  {
    title: "첫째 날",
    date: "2025년 9월 29일",
    description: "",
    content:
      "비트코인의 이해도가 높고 인사이트가 있는 사람들로 엄선하여 모두 함께 강연 형식으로 컨퍼런스를 즐기실 수 있습니다. 행사가 마무리 된 이후에는 참석자끼리의 교류를 활성화 하기 위해 모든 참여자분들께 소고기 회식을 제공합니다.",
    image: "/mainDay.webp",
    alt: "mainDay",
  },
  {
    title: "둘째 날",
    date: "2025년 9월 30일",
    description: "",
    content:
      "만나기 어렵던 진짜 전문가들과 함께 심층 높은 지식을 강의 형식으로 빠르게 배워갈 수 있습니다. 별도의 라이트닝 마켓 공간에서는 다양한 비트코인 관련 물건들을 만나보고 비트코인으로 구매하실 수 있습니다.",
    image: "/uniDay.webp",
    alt: "uniDay",
  },
] as const;

const enSchedules: Schedule[] = [
  {
    title: "First Day",
    date: "September 29, 2025",
    description: "Curated talks to deliver maximum signal-to-noise ratio.",
    content:
      "A single stage with insightful talks prepared by industry leading experts. K-BBQ dinner provided afterwards to all attendees to strengthen relationships between community members.",
    image: "/mainDay.webp",
    alt: "mainDay",
  },
  {
    title: "Second Day",
    date: "September 30, 2025",
    description:
      "Hands on workshops with a Lightning Market in the heart of Seoul",
    content:
      "Workshops with a maximum size of 30 people to provide the attendees with quality educational sessions. Booths in the form of a Lightning market in the streets of Seoul to allow access for everyone in Seoul to visit and become a part of the community.",
    image: "/uniDay.webp",
    alt: "uniDay",
  },
] as const;

const schedules = {
  ko: koSchedules,
  en: enSchedules,
};

export default schedules;
