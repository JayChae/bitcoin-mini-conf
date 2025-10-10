import { getTranslations } from "next-intl/server";
import Hero from "../_components/Hero";
import Schedule from "../_components/Schedule";
import Speakers from "../_components/Speakers";
import Sponsor from "../_components/Sponsor";
import Divider from "../_components/Divider";
import speakers from "../messages/speakers";
import schedules from "../messages/schedules";
import tickets from "../messages/tickets";
import attendees from "../messages/attendees";
import markets from "../messages/markets";
import Section from "../_components/Section";
import Attendees from "../_components/Attendees";
import LightningMarket from "../_components/LightningMarket";
type Props = {
  params: Promise<{ locale: string }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const lang = locale === "en" ? "en" : "ko";
  const tHero = await getTranslations("Hero");
  const tSpeakers = await getTranslations("Speakers");
  const tSchedule = await getTranslations("Schedule");
  const tSponsor = await getTranslations("Sponsor");
  const tLightningMarket = await getTranslations("LightningMarket");

  return (
    <main className="w-full px-4 md:px-6 pb-10 z-10">
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto">
        <section id="home" className="scroll-mt-16">
          <Hero
            title={tHero("title")}
            subtitle={tHero("subtitle")}
            date={tHero("date")}
            location={tHero("location")}
            tickets={tickets[lang]}
          />
        </section>
        <Divider />
        <Attendees items={attendees[lang]} />
        <Section id="speakers" title={tSpeakers("title")}>
          <Speakers
            speakers={speakers[lang]}
            moreText={tSpeakers("moreText")}
            closeText={tSpeakers("closeText")}
          />
        </Section>
        <Section id="schedule" title={tSchedule("title")}>
          <Schedule
            schedules={schedules[lang]}
            triggerText={tSchedule("triggerText")}
          />
        </Section>
        <Section id="lightningMarket" title={tLightningMarket("title")}>
          <LightningMarket
            markets={markets[lang]}
            moreText={tLightningMarket("moreText")}
          />
        </Section>
        <Section id="sponsors" title={tSponsor("title")}>
          <Sponsor
            goldTitle={tSponsor("gold")}
            silverTitle={tSponsor("silver")}
            bronzeTitle={tSponsor("bronze")}
            individualTitle={tSponsor("individual")}
          />
        </Section>
      </div>
    </main>
  );
}
