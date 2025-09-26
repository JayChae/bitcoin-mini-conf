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
      imageWidth: 450,
      imageHeight: 450,
      titleClass: "text-3xl sm:text-4xl md:text-5xl lg:text-6xl",
      colors: ["#FFD700", "#FFF4B0", "#FFC300", "#FFD700"],
    },
    {
      title: silverTitle,
      sponsors: sponsors.silver,
      imageWidth: 320,
      imageHeight: 320,
      titleClass: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
      colors: ["#C0C0C0", "#FFFFFF", "#E0E0E0", "#C0C0C0"],
    },
    {
      title: bronzeTitle,
      sponsors: sponsors.bronze,
      imageWidth: 280,
      imageHeight: 280,
      titleClass: "text-xl sm:text-2xl md:text-3xl lg:text-4xl",
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
    <div className="w-full flex flex-col items-center justify-center gap-12 sm:gap-16 md:gap-20 lg:gap-24 px-4 sm:px-6 md:px-8">
      {sponsorTiers.map((tier, tierIndex) => (
        <div
          key={tierIndex}
          className="w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-8"
        >
          <GradientText
            colors={tier.colors}
            className={cn(
              "font-bold pointer-events-none text-center",
              tier.titleClass
            )}
            animationSpeed={2}
          >
            {tier.title}
          </GradientText>
          <div className="flex justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 flex-wrap max-w-7xl">
            {tier.sponsors.map((sponsor, sponsorIndex) => {
              // 반응형 이미지 크기 계산
              const getResponsiveSize = () => {
                const baseWidth = sponsor.customWidth || tier.imageWidth;
                const baseHeight = sponsor.customHeight || tier.imageHeight;

                // 모바일: 70%, 태블릿: 80%, 데스크톱: 100%
                const mobileWidth = Math.round(baseWidth * 0.7);
                const mobileHeight = Math.round(baseHeight * 0.7);

                return {
                  width: baseWidth,
                  height: baseHeight,
                  mobileWidth,
                  mobileHeight,
                };
              };

              const sizes = getResponsiveSize();

              return (
                <Link
                  key={sponsorIndex}
                  href={sponsor.url}
                  target="_blank"
                  className="transition-all duration-300 hover:scale-105 hover:opacity-90 flex-shrink-0"
                >
                  <div className="relative">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.alt}
                      width={sizes.width}
                      height={sizes.height}
                      className="rounded-lg shadow-lg object-contain w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-none"
                      style={{
                        maxHeight:
                          tierIndex === 0
                            ? "300px"
                            : tierIndex === 1
                            ? "220px"
                            : "180px",
                      }}
                    />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
