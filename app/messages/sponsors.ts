export type Sponsor = {
  name: string;
  url: string;
  image: string;
  alt: string;
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
    },
    {
      name: "Frostsnap",
      url: "https://frostsnap.com",
      image: "/sponsors/frost.png",
      alt: "frostsnap",
    },
    {
      name: "Calvin Kim",
      url: "https://x.com/kcalvinalvinn",
      image: "/sponsors/calvin.png",
      alt: "calvinkim",
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
