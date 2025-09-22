import Hero from "./_components/Hero";
import Schedule from "./_components/Schedule";
import Speakers from "./_components/Speakers";
import Sponsor from "./_components/Sponsor";

export default function Home() {
  return (
    <main className="size-full overflow-y-auto pb-10 z-10">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto">
        <section id="home">
          <Hero />
        </section>
        <section id="speakers">
          <Speakers />
        </section>
        <section id="schedule">
          <Schedule />
        </section>
        <section id="sponsors">
          <Sponsor />
        </section>
      </div>
    </main>
  );
}
