export type Sponsor = {
  name: string;
  url: string;
  image: string;
  alt: string;
  customImageClass?: string; // 특정 스폰서만 다른 크기 적용 가능
};

const sponsors: {
  gold: Sponsor[];
  silver: Sponsor[];
  bronze: Sponsor[];
  individual: Sponsor[];
} = {
  gold: [
    {
      name: "Human Rights Foundation",
      url: "https://hrf.org",
      image: "/sponsors/hrf.png",
      alt: "Human Rights Foundation",
    },
  ],
  silver: [
    {
      name: "Wallet of Satoshi",
      url: "https://walletofsatoshi.com",
      image: "/sponsors/ws.png",
      alt: "Wallet of Satoshi",
      customImageClass:
        "max-w-[210px] sm:max-w-[270px] md:max-w-[360px] lg:max-w-[450px] xl:max-w-[525px] max-h-[150px] sm:max-h-[180px] md:max-h-[240px] lg:max-h-[300px] xl:max-h-[360px]", // 기본보다 1.5배 크게
    },
    {
      name: "Frostsnap",
      url: "https://frostsnap.com",
      image: "/sponsors/frostsnap.png",
      alt: "frostsnap",
    },
  ],
  bronze: [
    {
      name: "NonceLab",
      url: "https://noncelab.com",
      image: "/sponsors/nonce.png",
      alt: "NonceLab",
    },
  ],
  individual: [],
} as const;

export default sponsors;
