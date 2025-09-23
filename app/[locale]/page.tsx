import { getTranslations } from "next-intl/server";
import Hero from "../_components/Hero";
import Schedule from "../_components/Schedule";
import Speakers from "../_components/Speakers";
import Sponsor from "../_components/Sponsor";
import speakers from "../messages/speakers";
import sponsors from "../messages/sponsor";
import schedules from "../messages/schedules";

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("Hero");
  const tSpeakers = await getTranslations("Speakers");
  const tSchedule = await getTranslations("Schedule");
  const tSponsor = await getTranslations("Sponsor");

  return (
    <main className="size-full overflow-y-auto px-8 pb-10 z-10">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto ">
        <section id="home" className="scroll-mt-16">
          <Hero
            title={t("title")}
            subtitle={t("subtitle")}
            tickets={{ krw: t("tickets.krw"), btc: t("tickets.btc") }}
          />
        </section>
        <section id="speakers" className="scroll-mt-16">
          <Speakers
            speakers={speakers[locale as keyof typeof speakers]}
            title={tSpeakers("title")}
          />
        </section>
        <section id="schedule" className="mt-40 scroll-mt-16">
          <Schedule
            title={tSchedule("title")}
            schedules={schedules[locale as keyof typeof schedules]}
          />
        </section>
        <section id="sponsors" className="mt-40 scroll-mt-16">
          <Sponsor title={tSponsor("title")} sponsors={sponsors} />
        </section>
      </div>
    </main>
  );
}
