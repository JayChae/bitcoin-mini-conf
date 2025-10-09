export type Market = {
  name: string;
  description: string;
  logo?: string;
  website?: string;
  features?: string[];
  contact?: string;
};

export type Markets = {
  en: Market[];
  ko: Market[];
};

const markets: Markets = {
  en: [
    {
      name: "bitkit",
      description:
        "Self-custodial Bitcoin & Lightning wallet with advanced features for secure Bitcoin and Lightning Network transactions.",
      website: "https://bitkit.to",
      features: [
        "Self-custodial Bitcoin wallet",
        "Lightning Network support",
        "Advanced security features",
        "User-friendly interface",
        "Open source development",
        "Multi-platform support",
      ],
      contact: "support@bitkit.to",
    },
    {
      name: "promenade",
      description:
        "Bitcoin-focused development and consulting services providing expert guidance for Bitcoin integration and development.",
      features: [
        "Bitcoin development consulting",
        "Lightning Network integration",
        "Custom wallet solutions",
        "Security auditing",
        "Educational workshops",
        "Technical documentation",
      ],
      contact: "hello@promenade.dev",
    },
    {
      name: "bitcoin center seoul",
      description:
        "Seoul's premier Bitcoin community hub and education center, fostering Bitcoin adoption and education in South Korea.",
      features: [
        "Community meetups",
        "Educational workshops",
        "Developer resources",
        "Networking events",
        "Bitcoin advocacy",
        "Local Bitcoin ecosystem",
      ],
      contact: "info@bitcoincenterseoul.org",
    },
    {
      name: "Bread Shop Lad",
      description:
        "Artisanal Bitcoin-themed merchandise and collectibles, creating unique items for the Bitcoin community.",
      features: [
        "Bitcoin-themed apparel",
        "Collectible items",
        "Custom designs",
        "Community merchandise",
        "Limited editions",
        "Quality craftsmanship",
      ],
      contact: "shop@breadshoplad.com",
    },
  ],
  ko: [
    {
      name: "bitkit",
      description:
        "안전한 비트코인 및 라이트닝 네트워크 거래를 위한 고급 기능을 갖춘 비수탁형 비트코인 & 라이트닝 지갑입니다.",
      website: "https://bitkit.to",
      features: [
        "비수탁형 비트코인 지갑",
        "라이트닝 네트워크 지원",
        "고급 보안 기능",
        "사용자 친화적 인터페이스",
        "오픈소스 개발",
        "멀티 플랫폼 지원",
      ],
      contact: "support@bitkit.to",
    },
    {
      name: "promenade",
      description:
        "비트코인 통합 및 개발을 위한 전문적인 가이드를 제공하는 비트코인 중심의 개발 및 컨설팅 서비스입니다.",
      features: [
        "비트코인 개발 컨설팅",
        "라이트닝 네트워크 통합",
        "맞춤형 지갑 솔루션",
        "보안 감사",
        "교육 워크샵",
        "기술 문서화",
      ],
      contact: "hello@promenade.dev",
    },
    {
      name: "bitcoin center seoul",
      description:
        "한국에서 비트코인 채택과 교육을 촉진하는 서울의 대표적인 비트코인 커뮤니티 허브 및 교육 센터입니다.",
      features: [
        "커뮤니티 모임",
        "교육 워크샵",
        "개발자 리소스",
        "네트워킹 이벤트",
        "비트코인 옹호",
        "로컬 비트코인 생태계",
      ],
      contact: "info@bitcoincenterseoul.org",
    },
    {
      name: "Bread Shop Lad",
      description:
        "비트코인 커뮤니티를 위한 독특한 아이템을 제작하는 수제 비트코인 테마 상품 및 수집품 전문점입니다.",
      features: [
        "비트코인 테마 의류",
        "수집 가능한 아이템",
        "맞춤형 디자인",
        "커뮤니티 상품",
        "한정판",
        "품질 장인정신",
      ],
      contact: "shop@breadshoplad.com",
    },
  ],
};

export default markets;
