import GradientText from "@/components/GradientText";
import ShinyText from "@/components/ShinyText";
import Link from "next/link";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-14">
      <section className="flex flex-col items-center justify-center gap-3">
        {/* Hero Title Section */}
        <h1 className="">
          <GradientText
            colors={["#ff4040", "#ff7940", "#ff4040", "#ff7940", "#ff4040"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl md:text-4xl lg:text-5xl font-bold pointer-events-none"
          >
            Bitcoin Mini Conference
          </GradientText>
        </h1>

        <span className="text-md md:text-lg lg:text-xl font-bold pointer-events-none text-accent/35">
          SECOND EDITION
        </span>
      </section>
      <section className="flex flex-col items-center justify-center md:flex-row gap-10">
        <Link
          href="https://store.btcmap.kr/meetup/Bitcoin_Mini_Conference/11/"
          className="hover:scale-105 transition-all duration-300"
        >
          <ShinyText
            text="₿ Tickets (BTC)"
            speed={3}
            className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider "
          />
        </Link>
        <Link
          href="https://smartstore.naver.com/promenadecastle/products/12055415750"
          className="hover:scale-105 transition-all duration-300"
        >
          <ShinyText
            text="₩ Tickets (KRW)"
            speed={3}
            className="text-lg md:text-xl lg:text-2xl font-bold tracking-wider"
          />
        </Link>
      </section>
    </div>
  );
}
