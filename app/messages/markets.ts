export type Market = {
  name: string;
  description: string;
  logo?: string;
  website?: string;
  onlineStore?: string;
  products?: string[];
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
      description:
        "Operating self-custody online stores in Korea and Japan. We provide products for those who truly want to 'own' Bitcoin, such as seed signers, mnemonic safes, hard cases, and more.",
      website: "https://bitkit.to",
      onlineStore: "https://m.smartstore.naver.com/bitkit",
      products: [
        "seedSigner",
        "Hard cases",
        "Power Supply Unit",
        "Mnemonic Metal Plate",
      ],
      contact: "@bitkitBTC",
    },
    {
      name: "Promenade",
      description:
        "Leading the Lightning Payment Store Merchants' Association with a Bitcoin Citadel space set up in the offline store. Solve your hunger during the event with Lightning!",
      website: "https://promenadecastle.com",
      products: [
        "Omega Candle Financier",
        "Bitcoin Citadel offline space",
        "Choco-₿it",
        "Cookie-₿it",
        "Ice Americano",
        "Ice Latte",
      ],
      contact: "@PromenadeCastle",
      specialEvent:
        "Customers spending over 10,000 satoshis get a “Carousel of Life” Rainbow Gacha Ticket.",
    },
    {
      name: "Bitcoin Seoul Center",
      description:
        "Specializing in the professional translation and publication of Bitcoin books, making a significant contribution to elevating the intellectual level of domestic Bitcoiners. Fill your mind with nourishment too 📚",
      website: "https://bitcoincenterseoul.com",
      onlineStore: "https://m.smartstore.naver.com/noncelab",
      products: [
        "21 Lessons",
        "The Bullish Case for Bitcoin",
        "The Block Size War",
        "Bitcoin Handbook",
      ],
      contact: "@Coconut_BTC",
    },
    {
      name: "Bread Shop Lady",
      description:
        "Currently operating a payment store and selling 5 products at the event. Customers purchasing 20,000 sats or more will receive a complimentary gift. Warm up this cold winter with ssanghwatang and fill your hungry stomach!",
      onlineStore: "https://smartstore.naver.com/1000nuri",
      products: [
        "Bibimbap bread",
        "Jeonju-style Bibimm Noodle",
        "Ssanghwa tea",
        "Korean wheat pie",
      ],
      contact: "@yunyoungjnag",
      specialEvent: "Free gift for purchases over 20,000 sats",
    },
  ],
  ko: [
    {
      name: "비트키트",
      description:
        "한국과 일본에서 비수탁형 온라인 스토어를 운영하고 있습니다. 시드 사이너, 니모닉 금고, 하드 케이스 등 진정으로 비트코인을 '소유'하고자 하는 분들을 위한 제품을 제공합니다.",
      website: "https://bitkit.to",
      onlineStore: "https://m.smartstore.naver.com/bitkit",
      products: ["시드사이너", "하드 케이스", "니모닉 철판", "전원 공급기"],
      contact: "@bitkitBTC",
    },
    {
      name: "프로메나드",
      description:
        "라이트닝 페이먼트 스토어 상인회를 이끌고 있으며, 오프라인 매장에 비트코인 시타델 공간을 설치했습니다. 행사 중 라이트닝으로 배고픔을 해결하세요!",
      website: "https://promenadecastle.com",
      products: [
        "오메가캔들 피낭시에",
        "쿠키빗(Cookie-₿it)",
        "초코빗(Choco-₿it)",
        "아아&아이스라떼",
      ],
      contact: "@PromenadeCastle",
      specialEvent:
        "1만 사토시 이상 구매 고객 ‘인생의 회전목마’ 무지개룰렛 가챠권 지급",
    },
    {
      name: "비트코인 서울 센터",
      description:
        "비트코인 서적의 전문 번역 및 출간을 전문으로 하여 국내 비트코이너들의 지적 수준 향상에 크게 기여하고 있습니다. 마음의 양식도 채워보세요",
      website: "https://bitcoincenterseoul.com",
      onlineStore: "https://m.smartstore.naver.com/noncelab",
      products: [
        "21가지 교훈",
        "비트코인 낙관론",
        "블록사이즈워",
        "비트코인 핸드북",
      ],
      contact: "@Coconut_BTC",
    },
    {
      name: "빵집 아줌마",
      description:
        "현재 페이먼트 스토어를 운영하며 행사에서 5개 상품을 판매합니다. 20,000 sats 이상 구매 고객에게는 사은품을 드립니다. 쌍화탕으로 추운 겨울을 따뜻하게, 배고픈 배를 채워보세요!",
      onlineStore: "https://smartstore.naver.com/1000nuri",
      products: ["비빔빵", "전주 비빔면", "쌍화탕", "우리밀 파이"],
      contact: "@yunyoungjnag",
      specialEvent: "20,000 sats 이상 구매 시 사은품 증정",
    },
  ],
};

export default markets;
