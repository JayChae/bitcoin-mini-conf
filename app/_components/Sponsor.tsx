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
  colors: string;
  backgroundClass: string;
  borderClass?: string;
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
      titleClass: "text-3xl sm:text-3xl md:text-4xl lg:text-5xl",
      colors: "#FFD700",
      backgroundClass: "",
      borderClass: "shadow-xl shadow-yellow-400/30",
    },
    {
      title: silverTitle,
      sponsors: sponsors.silver,
      imageWidth: 320,
      imageHeight: 320,
      titleClass: "text-2xl sm:text-2xl md:text-3xl lg:text-4xl",
      colors: "#C0C0C0",
      backgroundClass: "",
      borderClass: "shadow-xl shadow-gray-400/30",
    },
    {
      title: bronzeTitle,
      sponsors: sponsors.bronze,
      imageWidth: 280,
      imageHeight: 280,
      titleClass: "text-xl sm:text-xl md:text-2xl lg:text-3xl",
      colors: "#CD7F32",
      backgroundClass: "bg-transparent",
      borderClass: "border-0 shadow-none",
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
          className={cn(
            "w-full flex flex-col items-center gap-4 sm:gap-6 md:gap-8 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl sm:rounded-3xl",
            tier.backgroundClass,
            tier.borderClass
          )}
        >
          <div className="w-full flex justify-start">
            <h2
              className={cn(
                "font-bold pointer-events-none drop-shadow-sm",
                tier.titleClass
              )}
              style={{ color: tier.colors }}
            >
              {tier.title}
            </h2>
          </div>
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
                  className="group transition-all duration-300 hover:scale-105 flex-shrink-0"
                >
                  <div className="relative p-4 sm:p-6 rounded-xl  hover:shadow-xl transition-all duration-300 group-hover:border-gray-600/50 dark:group-hover:border-gray-500/50">
                    <Image
                      src={sponsor.image}
                      alt={sponsor.alt}
                      width={sizes.width}
                      height={sizes.height}
                      className="rounded-lg object-contain w-auto h-auto max-w-[200px] sm:max-w-[250px] md:max-w-[300px] lg:max-w-none transition-all duration-300 group-hover:brightness-110"
                      style={{
                        maxHeight:
                          tierIndex === 0
                            ? "300px"
                            : tierIndex === 1
                            ? "220px"
                            : "180px",
                      }}
                    />
                    {/* 호버 시 글로우 효과 */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                        tierIndex === 0 && "shadow-2xl shadow-yellow-300/40",
                        tierIndex === 1 && "",
                        tierIndex === 2 && "shadow-2xl shadow-amber-600/30"
                      )}
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
