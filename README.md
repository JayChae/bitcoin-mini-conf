### [app/messages/ko.json](./app/messages/ko.json)

```json
{
  "Hero": {
    "title": "Bitcoin Mini Conference",
    "subtitle": "SECOND EDITION | 2025년 9월 29-30일",
    "tickets": {
      "btc": "₿ 비트코인으로 티켓 구매",
      "krw": "₩ 원화로 티켓 구매"
    }
  },
  "Speakers": {
    "title": "연사 소개"
  },
  "Schedule": {
    "title": "일정",
    "firstDay": {
      "title": "첫째 날",
      "date": "2025년 9월 29일",
      "description": "",
      "content": "비트코인의 이해도가 높고 인사이트가 있는 사람들로 엄선하여 모두 함께 강연 형식으로 컨퍼런스를 즐기실 수 있습니다. 행사가 마무리 된 이후에는 참석자끼리의 교류를 활성화 하기 위해 모든 참여자분들께 소고기 회식을 제공합니다."
    },
    "secondDay": {
      "title": "둘째 날",
      "date": "2025년 9월 30일",
      "description": "",
      "content": "만나기 어렵던 진짜 전문가들과 함께 심층 높은 지식을 강의 형식으로 빠르게 배워갈 수 있습니다. 별도의 라이트닝 마켓 공간에서는 다양한 비트코인 관련 물건들을 만나보고 비트코인으로 구매하실 수 있습니다."
    }
  },
  "Sponsor": {
    "title": "후원자"
  }
}
```

### [app/messages/ko.json](./app/messages/en.json)

```json
{
  "Hero": {
    "title": "Bitcoin Mini Conference",
    "subtitle": "SECOND EDITION | SEPTEMBER 29-30, 2025",
    "tickets": {
      "btc": "₿ Tickets (BTC) ",
      "krw": "₩ Tickets (KRW) "
    }
  },
  "Speakers": {
    "title": "Speakers"
  },
  "Schedule": {
    "title": "Schedule",
    "firstDay": {
      "title": "First Day",
      "date": "September 29, 2025",
      "description": "Curated talks to deliver maximum signal-to-noise ratio.",
      "content": "A single stage with insightful talks prepared by industry leading experts. K-BBQ dinner provided afterwards to all attendees to strengthen relationships between community members."
    },
    "secondDay": {
      "title": "Second Day",
      "date": "September 30, 2025",
      "description": "Hands on workshops with a Lightning Market in the heart of Seoul",
      "content": "Workshops with a maximum size of 30 people to provide the attendees with quality educational sessions. Booths in the form of a Lightning market in the streets of Seoul to allow access for everyone in Seoul to visit and become a part of the community."
    }
  },
  "Sponsor": {
    "title": "Sponsors"
  }
}
```

### [app/messages/speakers](./app/messages/speakers.ts)

```ts
const enItems = [
  {
    image: "/avatars/gandalf.webp",
    title: "Gandlaf",
    subtitle: "Developer | Cashu",
    handle: "@gandlaf21",

    url: "https://primal.net/p/nprofile1qqsvfdfkn2wmy73wr0yhkf065jrzm8705ar4q6clyuhc7jekhqfdh4sa06kjr",
  },
  {
    image: "/avatars/calvin.webp",
    title: "Calvin Kim",
    subtitle: "Developer | Utreexo",
    handle: "@kcalvinalvinn",
    url: "https://x.com/kcalvinalvinn",
  },
  {
    image: "/avatars/atomic.webp",
    title: "Atomic Bitcoin",
    subtitle: "Auditor | BSL",
    handle: "@atomicBTC",

    url: "https://x.com/atomicbtc",
  },
  {
    image: "/avatars/kelvin.webp",
    title: "Kevin Loaec",
    subtitle: "CEO | Wizardsardine",
    handle: "@KLoaec",

    url: "https://x.com/kloaec",
  },
  {
    image: "/avatars/nldd.webp",
    title: "NLDD",
    subtitle: "Youtuber | Translator",
    handle: "@nldd21",

    url: "https://x.com/nldd21",
  },
  {
    image: "/avatars/powdae.webp",
    title: "PowDae",
    subtitle: "CEO | Noncelab",
    handle: "@powdae",

    url: "https://twitter.com/powdae",
  },
  {
    image: "/avatars/seedSigner.webp",
    title: "SeedSigner",
    subtitle: "developer | SeedSigner",
    handle: "@seedSigner",

    url: "https://x.com/seedsigner",
  },
  {
    image: "/avatars/specter.webp",
    title: "Specter",
    subtitle: "Co-founder | BSL",
    handle: "@specter",

    url: "https://x.com/k_bitcoiner",
  },
  {
    image: "/avatars/win.webp",
    title: "Win Ko Ko Aung",
    subtitle: "Global Bitcoin Adoption | HRF",
    handle: "@wkkaung",

    url: "https://x.com/wkkaung",
  },
  {
    image: "/avatars/keypleb.png",
    title: "Keypleb",
    subtitle: "Co-founder | Code Orange Dev",
    handle: "@keypleb",

    url: "https://x.com/keypleb",
  },
  {
    image: "/avatars/trigger.png",
    title: "Trigger",
    subtitle: "Bitcoin Seoul Center | Coconut",
    handle: "@Coconut_BTC",

    url: "https://x.com/Coconut_BTC",
  },
  {
    image: "/avatars/pororo.png",
    title: "Pororo",
    subtitle: "Generalist | Developer",
    handle: "@asheswook",

    url: "https://x.com/asheswook",
  },
  {
    image: "/avatars/promenade.png",
    title: "Promenade",
    subtitle: "Bitcoin Citadel | Promenade Castle",
    handle: "@PromenadeCastle",

    url: "https://x.com/PromenadeCastle",
  },
  {
    image: "/avatars/wos.png",
    title: "Wallet of Satoshi",
    subtitle: "CEO",
    handle: "@Walletofsatoshi ",

    url: "https://x.com/walletofsatoshi",
  },
];

const koItems = [
  {
    image: "/avatars/gandalf.webp",
    title: "Gandlaf",
    subtitle: "Developer | Cashu",
    handle: "@gandlaf21",

    url: "https://primal.net/p/nprofile1qqsvfdfkn2wmy73wr0yhkf065jrzm8705ar4q6clyuhc7jekhqfdh4sa06kjr",
  },
  {
    image: "/avatars/calvin.webp",
    title: "Calvin Kim",
    subtitle: "Developer | Utreexo",
    handle: "@kcalvinalvinn",

    url: "https://x.com/kcalvinalvinn",
  },
  {
    image: "/avatars/atomic.webp",
    title: "아토믹 비트코인",
    subtitle: "Auditor | BSL",
    handle: "@atomicBTC",

    url: "https://x.com/atomicbtc",
  },
  {
    image: "/avatars/kelvin.webp",
    title: "Kevin Loaec",
    subtitle: "CEO | Wizardsardine",
    handle: "@KLoaec",

    url: "https://x.com/kloaec",
  },
  {
    image: "/avatars/nldd.webp",
    title: "네딸바",
    subtitle: "유튜버 | 번역가",
    handle: "@nldd21",

    url: "https://x.com/nldd21",
  },
  {
    image: "/avatars/powdae.webp",
    title: "포대",
    subtitle: "CEO | 논스랩",
    handle: "@powdae",

    url: "https://twitter.com/powdae",
  },
  {
    image: "/avatars/seedSigner.webp",
    title: "SeedSigner",
    subtitle: "개발자 | SeedSigner",
    handle: "@seedSigner",

    url: "https://x.com/seedsigner",
  },
  {
    image: "/avatars/specter.webp",
    title: "스펙터",
    subtitle: "공동 설립 | BSL",
    handle: "@specter",

    url: "https://x.com/k_bitcoiner",
  },
  {
    image: "/avatars/win.webp",
    title: "Win Ko Ko Aung",
    subtitle: "Global Bitcoin Adoption | HRF",
    handle: "@wkkaung",

    url: "https://x.com/wkkaung",
  },
  {
    image: "/avatars/keypleb.png",
    title: "Keypleb",
    subtitle: "공동 설립 | Code Orange Dev",
    handle: "@keypleb",

    url: "https://x.com/keypleb",
  },
  {
    image: "/avatars/trigger.png",
    title: "트리거",
    subtitle: "Bitcoin Seoul Center | Coconut",
    handle: "@Coconut_BTC",

    url: "https://x.com/Coconut_BTC",
  },
  {
    image: "/avatars/pororo.png",
    title: "Pororo",
    subtitle: "제너럴리스트 | 개발자",
    handle: "@asheswook",

    url: "https://x.com/asheswook",
  },
  {
    image: "/avatars/promenade.png",
    title: "프로메나드",
    subtitle: "비트코인 시타델 | 프로메나드 캐슬",
    handle: "@PromenadeCastle",

    url: "https://x.com/PromenadeCastle",
  },
  {
    image: "/avatars/wos.png",
    title: "Wallet of Satoshi",
    subtitle: "CEO",
    handle: "@Walletofsatoshi ",

    url: "https://x.com/walletofsatoshi",
  },
];
```
