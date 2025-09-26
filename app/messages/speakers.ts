export type SNS = {
  type: "x" | "website" | "youtube" | "nostr" | "telegram";
  url: string;
};

export const snsIconUrl: Record<SNS["type"], string> = {
  x: "/sns/x.svg",
  website: "/sns/globe.svg",
  youtube: "/sns/youtube.svg",
  nostr: "/sns/nostr.svg",
  telegram: "/sns/telegram.svg",
};

export type Speaker = {
  image: string;
  title: string;
  subtitle: string;
  links: SNS[];
};

const enItems: Speaker[] = [
  {
    image: "/avatars/atomic.png",
    title: "Atomic Bitcoin",
    subtitle: "Auditor | BSL",
    links: [
      {
        type: "x",
        url: "https://x.com/atomicbtc",
      },
    ],
  },
  {
    image: "/avatars/calvin.png",
    title: "Calvin Kim",
    subtitle: "Developer | Utreexo",
    links: [
      {
        type: "x",
        url: "https://x.com/kcalvinalvinn",
      },
    ],
  },
  {
    image: "/avatars/gandalf.png",
    title: "Gandlaf",
    subtitle: "Developer | Cashu",
    links: [
      {
        type: "nostr",
        url: "https://primal.net/p/nprofile1qqsvfdfkn2wmy73wr0yhkf065jrzm8705ar4q6clyuhc7jekhqfdh4sa06kjr",
      },
    ],
  },
  {
    image: "/avatars/jaeNam.png",
    title: "Jae Nam Kang",
    subtitle: "Virtual Asset Tax Accountant",
    links: [
      {
        type: "website",
        url: "https://fresh-credit-98a.notion.site/9065d93234844efc84d11aad22c0152e",
      },
    ],
  },
  {
    image: "/avatars/keypleb.png",
    title: "Keypleb",
    subtitle: "Founder | Code Orange",
    links: [
      {
        type: "website",
        url: "https://codeorange.dev",
      },
      {
        type: "x",
        url: "https://x.com/keypleb",
      },
    ],
  },
  {
    image: "/avatars/Loaec.png",
    title: "Kevin Loaec",
    subtitle: "CEO | Liana Wallet",
    links: [
      {
        type: "website",
        url: "https://wizardsardine.com/liana",
      },
      {
        type: "x",
        url: "https://x.com/kloaec",
      },
    ],
  },
  {
    image: "/avatars/moonJun.png",
    title: "Moon Jun Kim",
    subtitle: "Outside Director | KCGI",
    links: [
      {
        type: "website",
        url: "https://www.kcgiam.com/",
      },
    ],
  },
  {
    image: "/avatars/nldd.png",
    title: "NLDD",
    subtitle: "Youtuber | Translator",
    links: [
      {
        type: "youtube",
        url: "https://youtube.com/channel/UCT_RhM-i6or1qS1JRm4Bqrw?si=gTwZokhgaWnbD7bY",
      },
      {
        type: "x",
        url: "https://x.com/nldd21",
      },
    ],
  },
  {
    image: "/avatars/pororo.png",
    title: "Pororo",
    subtitle: "Generalist | Developer",
    links: [
      {
        type: "website",
        url: "https://oksu.su/",
      },
      {
        type: "x",
        url: "https://x.com/asheswook",
      },
    ],
  },
  {
    image: "/avatars/powdae.png",
    title: "PowDae",
    subtitle: "CEO | Noncelab",
    links: [
      {
        type: "website",
        url: "https://powbitcoiner.com/",
      },
      {
        type: "x",
        url: "https://twitter.com/powdae",
      },
    ],
  },
  {
    image: "/avatars/promenade.png",
    title: "Promenade",
    subtitle: "Bitcoin Citadel | Sea of Corea",
    links: [
      {
        type: "website",
        url: "https://promenadecastle.com",
      },
      {
        type: "telegram",
        url: "https://t.me/+2yNtegasqLJmMjc1",
      },
      {
        type: "x",
        url: "https://x.com/PromenadeCastle",
      },
    ],
  },
  {
    image: "/avatars/seedSigner.png",
    title: "SeedSigner",
    subtitle: "Developer | SeedSigner",
    links: [
      {
        type: "website",
        url: "https://seedsigner.com",
      },
      {
        type: "x",
        url: "https://x.com/seedsigner",
      },
    ],
  },
  {
    image: "/avatars/specter.png",
    title: "Specter",
    subtitle: "Host | Mini Conference",
    links: [
      {
        type: "youtube",
        url: "https://www.youtube.com/@BitcoinSPECTER2100",
      },
      {
        type: "x",
        url: "https://x.com/k_bitcoiner",
      },
    ],
  },
  {
    image: "/avatars/trigger.png",
    title: "Trigger",
    subtitle: "Bitcoin Seoul Center | Coconut",
    links: [
      {
        type: "website",
        url: "https://linktr.ee/noncelab",
      },
      {
        type: "x",
        url: "https://x.com/Coconut_BTC",
      },
    ],
  },
  {
    image: "/avatars/wos.png",
    title: "Wallet of Satoshi",
    subtitle: "CEO | Wallet of Satoshi",
    links: [
      {
        type: "website",
        url: "https://www.walletofsatoshi.com",
      },
      {
        type: "x",
        url: "https://x.com/walletofsatoshi",
      },
    ],
  },
  {
    image: "/avatars/win.png",
    title: "Win Ko Ko Aung",
    subtitle: "Global Bitcoin Adoption | HRF",
    links: [
      {
        type: "website",
        url: "https://hrf.org",
      },
      {
        type: "x",
        url: "https://x.com/wkkaung",
      },
    ],
  },
] as const;

const koItems: Speaker[] = [
  {
    image: "/avatars/calvin.png",
    title: "Calvin Kim",
    subtitle: "개발자 | Utreexo",
    links: [
      {
        type: "x",
        url: "https://x.com/kcalvinalvinn",
      },
    ],
  },
  {
    image: "/avatars/gandalf.png",
    title: "Gandlaf",
    subtitle: "개발자 | Cashu",
    links: [
      {
        type: "nostr",
        url: "https://primal.net/p/nprofile1qqsvfdfkn2wmy73wr0yhkf065jrzm8705ar4q6clyuhc7jekhqfdh4sa06kjr",
      },
    ],
  },
  {
    image: "/avatars/keypleb.png",
    title: "Keypleb",
    subtitle: "Founder | Code Orange",
    links: [
      {
        type: "website",
        url: "https://codeorange.dev",
      },
      {
        type: "x",
        url: "https://x.com/keypleb",
      },
    ],
  },
  {
    image: "/avatars/Loaec.png",
    title: "Kevin Loaec",
    subtitle: "CEO | Liana Wallet",
    links: [
      {
        type: "website",
        url: "https://wizardsardine.com/liana",
      },
      {
        type: "x",
        url: "https://x.com/kloaec",
      },
    ],
  },
  {
    image: "/avatars/pororo.png",
    title: "Pororo",
    subtitle: "제너럴리스트 | 개발자",
    links: [
      {
        type: "website",
        url: "https://oksu.su/",
      },
      {
        type: "x",
        url: "https://x.com/asheswook",
      },
    ],
  },
  {
    image: "/avatars/seedSigner.png",
    title: "SeedSigner",
    subtitle: "개발자 | SeedSigner",
    links: [
      {
        type: "website",
        url: "https://seedsigner.com",
      },
      {
        type: "x",
        url: "https://x.com/seedsigner",
      },
    ],
  },
  {
    image: "/avatars/wos.png",
    title: "Wallet of Satoshi",
    subtitle: "CEO | 월렛 오브 사토시",
    links: [
      {
        type: "website",
        url: "https://www.walletofsatoshi.com",
      },
      {
        type: "x",
        url: "https://x.com/walletofsatoshi",
      },
    ],
  },
  {
    image: "/avatars/win.png",
    title: "Win Ko Ko Aung",
    subtitle: "Global Bitcoin Adoption | HRF",
    links: [
      {
        type: "website",
        url: "https://hrf.org",
      },
      {
        type: "x",
        url: "https://x.com/wkkaung",
      },
    ],
  },
  {
    image: "/avatars/nldd.png",
    title: "네딸바",
    subtitle: "유튜버 | 번역가",
    links: [
      {
        type: "youtube",
        url: "https://youtube.com/channel/UCT_RhM-i6or1qS1JRm4Bqrw?si=gTwZokhgaWnbD7bY",
      },
      {
        type: "x",
        url: "https://x.com/nldd21",
      },
    ],
  },
  {
    image: "/avatars/specter.png",
    title: "스펙터",
    subtitle: "호스트 | 미니컨퍼런스",
    links: [
      {
        type: "youtube",
        url: "https://www.youtube.com/@BitcoinSPECTER2100",
      },
      {
        type: "x",
        url: "https://x.com/k_bitcoiner",
      },
    ],
  },
  {
    image: "/avatars/jaeNam.png",
    title: "강재남",
    subtitle: "가상자산 전문 세무사",
    links: [
      {
        type: "website",
        url: "https://fresh-credit-98a.notion.site/9065d93234844efc84d11aad22c0152e",
      },
    ],
  },
  {
    image: "/avatars/moonJun.png",
    title: "김문준",
    subtitle: "KCGI 자산운용 사외이사",
    links: [
      {
        type: "website",
        url: "https://www.kcgiam.com/",
      },
    ],
  },
  {
    image: "/avatars/atomic.png",
    title: "아토믹 비트코인",
    subtitle: "Auditor | BSL",
    links: [
      {
        type: "x",
        url: "https://x.com/atomicbtc",
      },
    ],
  },
  {
    image: "/avatars/powdae.png",
    title: "포대",
    subtitle: "CEO | 논스랩",
    links: [
      {
        type: "website",
        url: "https://powbitcoiner.com/",
      },
      {
        type: "x",
        url: "https://twitter.com/powdae",
      },
    ],
  },
  {
    image: "/avatars/promenade.png",
    title: "프로메나드",
    subtitle: "Bitcoin Citadel | Sea of Corea",
    links: [
      {
        type: "website",
        url: "https://promenadecastle.com",
      },
      {
        type: "telegram",
        url: "https://t.me/+2yNtegasqLJmMjc1",
      },
      {
        type: "x",
        url: "https://x.com/PromenadeCastle",
      },
    ],
  },
  {
    image: "/avatars/trigger.png",
    title: "트리거",
    subtitle: "Bitcoin Seoul Center | Coconut",
    links: [
      {
        type: "website",
        url: "https://linktr.ee/noncelab",
      },
      {
        type: "x",
        url: "https://x.com/Coconut_BTC",
      },
    ],
  },
] as const;

const speakers = {
  ko: koItems,
  en: enItems,
};

export default speakers;
