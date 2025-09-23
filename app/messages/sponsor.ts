export type Sponsor = {
  name: string;
  url: string;
  image: string;
};

const sponsors: Sponsor[] = [
  {
    name: "NonceLab",
    url: "https://noncelab.com",
    image: "/nonceLab.webp",
  },
  {
    name: "HRF",
    url: "https://hrf.org",
    image: "/hrf.jpg",
  },
] as const;

export default sponsors;
