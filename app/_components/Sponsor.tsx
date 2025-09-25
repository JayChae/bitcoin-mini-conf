import Image from "next/image";
import Link from "next/link";
import sponsors, { type Sponsor } from "../messages/sponsors";
import ShinyText from "@/components/ShinyText";
import GradientText from "@/components/GradientText";
import { cn } from "@/lib/utils";

type SponsorTier = {
  title: string;
  sponsors: Sponsor[];
  imageWidth: number;
  imageHeight: number;
  titleClass?: string;
  colors: string[];
};

type Props = {
  goldTitle: string;
  silverTitle: string;
  bronzeTitle: string;
  individualTitle: string;
};

export default function Sponsor({
  goldTitle,
  silverTitle,
  bronzeTitle,
  individualTitle,
}: Props) {
  const sponsorTiers: SponsorTier[] = [
    {
      title: goldTitle,
      sponsors: sponsors.gold,
      imageWidth: 400,
      imageHeight: 400,
      titleClass: "text-5xl md:text-6xl",
      colors: ["#FFD700", "#FFF4B0", "#FFC300", "#FFD700"],
    },
    {
      title: silverTitle,
      sponsors: sponsors.silver,
      imageWidth: 350,
      imageHeight: 350,
      titleClass: "text-4xl md:text-5xl",
      colors: ["#C0C0C0", "#FFFFFF", "#E0E0E0", "#C0C0C0"],
    },
    {
      title: bronzeTitle,
      sponsors: sponsors.bronze,
      imageWidth: 300,
      imageHeight: 300,
      titleClass: "text-3xl md:text-4xl",
      colors: ["#CD7F32", "#B87333", "#CD7F32"],
    },
    // {
    //   title: individualTitle,
    //   sponsors: sponsors.individual,
    //   imageWidth: 200,
    //   imageHeight: 200,
    //   titleClass: "text-2xl font-bold text-gray-400 mb-4",
    // },
  ];

  return (
    <div className="w-full flex flex-col items-center justify-center gap-12">
      {sponsorTiers.map((tier, tierIndex) => (
        <div
          key={tierIndex}
          className="w-full flex flex-col items-center gap-1"
        >
          <GradientText
            colors={tier.colors}
            className={cn("font-bold pointer-events-none", tier.titleClass)}
            animationSpeed={2}
          >
            {tier.title}
          </GradientText>
          <div className="flex justify-center items-center gap-8">
            {tier.sponsors.map((sponsor, sponsorIndex) => (
              <Link
                key={sponsorIndex}
                href={sponsor.url}
                target="_blank"
                className="transition-transform hover:scale-105 hover:opacity-90"
              >
                <Image
                  src={sponsor.image}
                  alt={sponsor.alt}
                  width={tier.imageWidth}
                  height={tier.imageHeight}
                  className="rounded-lg shadow-lg"
                />
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
