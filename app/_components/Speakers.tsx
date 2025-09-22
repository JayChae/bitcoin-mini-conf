import ChromaGrid from "@/components/ChromaGrid";
import ShinyText from "@/components/ShinyText";

const items = [
  {
    image: "/avatars/gandalf.webp",
    title: "Gandlaf",
    subtitle: "Developer | Cashu",
    handle: "@gandlaf21",
    // borderColor: "#F97316",
    // gradient: "linear-gradient(145deg, #F97316, #000)",
    url: "https://primal.net/p/nprofile1qqsvfdfkn2wmy73wr0yhkf065jrzm8705ar4q6clyuhc7jekhqfdh4sa06kjr",
  },
  {
    image: "/avatars/calvin.webp",
    title: "Calvin Kim",
    subtitle: "Developer | Utreexo",
    handle: "@kcalvinalvinn",
    // borderColor: "#8B5CF6",
    // gradient: "linear-gradient(180deg, #8B5CF6, #000)",
    url: "https://x.com/kcalvinalvinn",
  },
  {
    image: "/avatars/atomic.webp",
    title: "Atomic Bitcoin",
    subtitle: "Auditor | BSL",
    handle: "@atomicBTC",
    // borderColor: "#06B6D4",
    // gradient: "linear-gradient(135deg, #06B6D4, #000)",
    url: "https://x.com/atomicbtc",
  },
  {
    image: "/avatars/kelvin.webp",
    title: "Kevin Loaec",
    subtitle: "CEO | Wizardsardine",
    handle: "@KLoaec",
    // borderColor: "#10B981",
    // gradient: "linear-gradient(225deg, #10B981, #000)",
    url: "https://x.com/kloaec",
  },
  {
    image: "/avatars/nldd.webp",
    title: "NLDD",
    subtitle: "Youtuber | Translator",
    handle: "@nldd21",
    // borderColor: "#EF4444",
    // gradient: "linear-gradient(315deg, #EF4444, #000)",
    url: "https://x.com/nldd21",
  },
  {
    image: "/avatars/powdae.webp",
    title: "PowDae",
    subtitle: "CEO | Noncelab",
    handle: "@powdae",
    // borderColor: "#F59E0B",
    // gradient: "linear-gradient(45deg, #F59E0B, #000)",
    url: "https://twitter.com/powdae",
  },
  {
    image: "/avatars/seedSigner.webp",
    title: "SeedSigner",
    subtitle: "Founder | SeedSigner",
    handle: "@seedSigner",
    // borderColor: "#84CC16",
    // gradient: "linear-gradient(90deg, #84CC16, #000)",
    url: "https://x.com/seedsigner",
  },
  {
    image: "/avatars/specter.webp",
    title: "Specter",
    subtitle: "Co-founder | BSL",
    handle: "@specter",
    // borderColor: "#A855F7",
    // gradient: "linear-gradient(270deg, #A855F7, #000)",
    url: "https://x.com/k_bitcoiner",
  },
  {
    image: "/avatars/win.webp",
    title: "Win Ko Ko Aung",
    subtitle: "Global Bitcoin Adoption | HRF",
    handle: "@wkkaung",
    // borderColor: "#EC4899",
    // gradient: "linear-gradient(120deg, #EC4899, #000)",
    url: "https://x.com/wkkaung",
  },
  {
    image: "/avatars/keypleb.png",
    title: "Keypleb",
    subtitle: "Co-founder | Code Orange Dev",
    handle: "@keypleb",
    // borderColor: "#EC4899",
    // gradient: "linear-gradient(120deg, #EC4899, #000)",
    url: "https://x.com/keypleb",
  },
  {
    image: "/avatars/trigger.png",
    title: "Trigger",
    subtitle: "Bitcoin SeoulCenter | Coconut",
    handle: "@Coconut_BTC",
    // borderColor: "#EC4899",
    // gradient: "linear-gradient(120deg, #EC4899, #000)",
    url: "https://x.com/Coconut_BTC",
  },
  {
    image: "/avatars/pororo.png",
    title: "Pororo",
    subtitle: "Generalist | Developer",
    handle: "@asheswook",
    // borderColor: "#EC4899",
    // gradient: "linear-gradient(120deg, #EC4899, #000)",
    url: "https://x.com/asheswook",
  },
  {
    image: "/avatars/promenade.png",
    title: "Promenade",
    subtitle: "Bitcoin Citadel",
    handle: "@PromenadeCastle",
    // borderColor: "#EC4899",
    // gradient: "linear-gradient(120deg, #EC4899, #000)",
    url: "https://x.com/PromenadeCastle",
  },
  {
    image: "/avatars/wos.png",
    title: "Wallet of Satoshi",
    subtitle: "Bitcoin Citadel",
    handle: "@Walletofsatoshi ",
    // borderColor: "#EC4899",
    // gradient: "linear-gradient(120deg, #EC4899, #000)",
    url: "https://x.com/walletofsatoshi",
  },
];

export default function Speakers() {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pointer-events-none text-accent">
        Speakers
      </h2>
      <ChromaGrid
        items={items}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
        className="md:gap-14"
      />
      <ShinyText text="More speakers on the way!" className="text-2xl" />
    </section>
  );
}
