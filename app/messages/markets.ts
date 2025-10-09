export type Product = {
  name: string;
  image?: string;
};

export type Market = {
  name: string;
  description: string;
  logo?: string;
  website?: string;
  onlineStore?: string;
  products?: Product[];
  contact?: string;
  specialEvent?: string;
};

export type Markets = {
  en: Market[];
  ko: Market[];
};

const markets: Markets = {
  en: [
    {
      name: "Bitkit",
      logo: "/markets/bitkit/logo.png",
      description:
        "Operating self-custody online stores in Korea and Japan. We provide products for those who truly want to 'own' Bitcoin, such as seed signers, mnemonic safes, hard cases, and more.",
      onlineStore: "https://m.smartstore.naver.com/bitkit",
      products: [
        { name: "seedSigner", image: "/markets/bitkit/seed.png" },
        { name: "Hard cases", image: "/markets/bitkit/case.png" },
        { name: "Power Supply Unit", image: "/markets/bitkit/power.png" },
        {
          name: "Mnemonic Metal Plate",
          image: "/markets/bitkit/metal.png",
        },
      ],
      contact: "@bitkitBTC",
      specialEvent: "",
    },
    {
      name: "Promenade",
      logo: "/markets/promenade/logo.png",
      description:
        "Leading the Lightning Payment Store Merchants' Association with a Bitcoin Citadel space set up in the offline store. Solve your hunger during the event with Lightning!",
      website: "https://promenadecastle.com",
      products: [
        { name: "Choco-₿it", image: "/markets/promenade/chocobit.jpeg" },
        { name: "Cookie-₿it", image: "/markets/promenade/cookiebit.jpeg" },
        { name: "Ice Americano", image: "/markets/promenade/americano.jpg" },
        {
          name: "Long Candle Financier",
          image: "/markets/promenade/longcandle.jpeg",
        },
      ],
      contact: "@PromenadeCastle",
      specialEvent:
        "Customers spending over 10,000 satoshis get a Gacha Ticket.",
    },
    {
      name: "Bitcoin Seoul Center",
      logo: "/markets/center/logo.jpg",
      description:
        "Specializing in the professional translation and publication of Bitcoin books, making a significant contribution to elevating the intellectual level of domestic Bitcoiners. Fill your mind with nourishment too.",
      website: "https://bitcoincenterseoul.com",
      onlineStore: "https://m.smartstore.naver.com/noncelab",
      products: [
        { name: "21 Lessons", image: "/markets/center/lessons.jpg" },
        {
          name: "The Bullish Case for Bitcoin",
          image: "/markets/center/bullish.jpg",
        },
        {
          name: "The Block Size War",
          image: "/markets/center/blocksize.jpg",
        },
        {
          name: "Bitcoin Handbook",
          image: "/markets/center/handbook.jpg",
        },
      ],
      contact: "@Coconut_BTC",
      specialEvent: "",
    },
    {
      name: "Bread Shop Lady",
      logo: "/markets/breadLady/logo.png",
      description:
        "Currently operating a payment store and selling 5 products at the event. Warm up this cold winter with ssanghwatang and fill your hungry stomach!",
      onlineStore: "https://smartstore.naver.com/1000nuri",
      products: [
        {
          name: "Bibimbap bread",
          image: "/markets/breadLady/bread.jpg",
        },
        {
          name: "Jeonju-style Bibimm Noodle",
          image: "/markets/breadLady/noodle.jpg",
        },
        { name: "Ssanghwa tea", image: "/markets/breadLady/tea.jpg" },
        {
          name: "Korean wheat pie",
          image: "/markets/breadLady/pie.jpg",
        },
      ],
      contact: "@yunyoungjnag",
      specialEvent: "Free gift for purchases over 20,000 sats",
    },
  ],
  ko: [
    {
      name: "비트키트",
      logo: "/markets/bitkit/logo.png",
      description:
        "한국과 일본에서 비수탁형 온라인 스토어를 운영하고 있습니다. 시드 사이너, 니모닉 금고, 하드 케이스 등 진정으로 비트코인을 '소유'하고자 하는 분들을 위한 제품을 제공합니다.",
      onlineStore: "https://m.smartstore.naver.com/bitkit",
      products: [
        { name: "시드사이너", image: "/markets/bitkit/seed.png" },
        { name: "하드 케이스", image: "/markets/bitkit/case.png" },
        { name: "니모닉 철판", image: "/markets/bitkit/metal.png" },
        { name: "전원 공급기", image: "/markets/bitkit/power.png" },
      ],
      contact: "@bitkitBTC",
      specialEvent: "",
    },
    {
      name: "프로메나드",
      logo: "/markets/promenade/logo.png",
      description:
        "라이트닝 페이먼트 스토어 상인회를 이끌고 있으며, 오프라인 매장에 비트코인 시타델 공간을 설치했습니다. 행사 중 라이트닝으로 배고픔을 해결하세요!",
      website: "https://promenadecastle.com",
      products: [
        {
          name: "장대양봉 피낭시에",
          image: "/markets/promenade/longcandle.jpeg",
        },
        {
          name: "쿠키빗(Cookie-₿it)",
          image: "/markets/promenade/cookiebit.jpeg",
        },
        {
          name: "초코빗(Choco-₿it)",
          image: "/markets/promenade/chocobit.jpeg",
        },
        {
          name: "아이스 아메리카노",
          image: "/markets/promenade/americano.jpg",
        },
      ],
      contact: "@PromenadeCastle",
      specialEvent: "10,000사토시 이상 구매시 돌림판 가챠 이벤트 참여가능",
    },
    {
      name: "비트코인 서울 센터",
      logo: "/markets/center/logo.jpg",
      description:
        "비트코인 서적의 전문 번역 및 출간을 전문으로 하여 국내 비트코이너들의 지적 수준 향상에 크게 기여하고 있습니다. 마음의 양식도 채워보세요",
      website: "https://bitcoincenterseoul.com",
      onlineStore: "https://m.smartstore.naver.com/noncelab",
      products: [
        { name: "21가지 교훈", image: "/markets/center/lessons.jpg" },
        {
          name: "비트코인 낙관론",
          image: "/markets/center/bullish.jpg",
        },
        {
          name: "블록사이즈워",
          image: "/markets/center/blocksize.jpg",
        },
        {
          name: "비트코인 핸드북",
          image: "/markets/center/handbook.jpg",
        },
      ],
      contact: "@Coconut_BTC",
      specialEvent: "",
    },
    {
      name: "빵집 아줌마",
      logo: "/markets/breadLady/logo.png",
      description:
        "현재 페이먼트 스토어를 운영하며 행사에서 5개 상품을 판매합니다. 쌍화탕으로 추운 겨울을 따뜻하게, 배고픈 배를 채워보세요!",
      onlineStore: "https://smartstore.naver.com/1000nuri",
      products: [
        { name: "비빔빵", image: "/markets/breadLady/bread.jpg" },
        { name: "전주 비빔면", image: "/markets/breadLady/noodle.jpg" },
        { name: "쌍화탕", image: "/markets/breadLady/tea.jpg" },
        { name: "우리밀 파이", image: "/markets/breadLady/pie.jpg" },
      ],
      contact: "@yunyoungjnag",
      specialEvent: "20,000 sats 이상 구매 시 사은품 증정",
    },
  ],
};

export default markets;
