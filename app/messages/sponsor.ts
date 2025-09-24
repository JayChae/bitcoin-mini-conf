export type Sponsor = {
  name: string;
  url: string;
  image: string;
};

const sponsors: Sponsor[] = [
  {
    name: "NonceLab",
    url: "https://noncelab.com",
    image: "/sponsors/nonceLab.webp",
  },
] as const;

export default sponsors;
