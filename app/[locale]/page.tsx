import { getTranslations } from "next-intl/server";
import Hero from "../_components/Hero";
import Schedule from "../_components/Schedule";
import Speakers from "../_components/Speakers";
import Sponsor from "../_components/Sponsor";
import { enItems, koItems } from "../messages/speakers";

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
            speakers={locale === "en" ? enItems : koItems}
            title={tSpeakers("title")}
          />
        </section>
        <section id="schedule" className="mt-40 scroll-mt-16">
          <Schedule
            title={tSchedule("title")}
            firstDay={{
              title: tSchedule("firstDay.title"),
              date: tSchedule("firstDay.date"),
              description: tSchedule("firstDay.description"),
              content: tSchedule("firstDay.content"),
            }}
            secondDay={{
              title: tSchedule("secondDay.title"),
              date: tSchedule("secondDay.date"),
              description: tSchedule("secondDay.description"),
              content: tSchedule("secondDay.content"),
            }}
          />
        </section>
        <section id="sponsors" className="mt-40 scroll-mt-16">
          <Sponsor title={tSponsor("title")} />
        </section>
      </div>
    </main>
  );
}
