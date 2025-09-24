import { getTranslations } from "next-intl/server";
import Hero from "../_components/Hero";
import Schedule from "../_components/Schedule";
import Speakers from "../_components/Speakers";
import Sponsor from "../_components/Sponsor";
import speakers from "../messages/speakers";
import sponsors from "../messages/sponsor";
import schedules from "../messages/schedules";
import tickets from "../messages/tickets";
import Image from "next/image";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const lang = locale === "ko" ? "ko" : "en";
  const tHero = await getTranslations("Hero");
  const tSpeakers = await getTranslations("Speakers");
  const tSchedule = await getTranslations("Schedule");
  const tSponsor = await getTranslations("Sponsor");

  return (
    <main className="w-full px-8 pb-10 z-10">
      <div className="flex flex-col items-center justify-center max-w-5xl mx-auto">
        <section id="home" className="scroll-mt-16">
          <Hero
            title={tHero("title")}
            subtitle={tHero("subtitle")}
            tickets={tickets[lang]}
          />
        </section>
        <section id="speakers" className="scroll-mt-16">
          <Speakers title={tSpeakers("title")} speakers={speakers[lang]} />
        </section>
        <section id="schedule" className="mt-40 scroll-mt-16">
          <Schedule title={tSchedule("title")} schedules={schedules[lang]} />
        </section>
        <section id="sponsors" className="mt-40 scroll-mt-16">
          <Sponsor title={tSponsor("title")} sponsors={sponsors} />
        </section>
      </div>
    </main>
  );
}
