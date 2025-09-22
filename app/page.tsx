import Hero from "./_components/Hero";
import Schedule from "./_components/Schedule";
import Speakers from "./_components/Speakers";
import Sponsor from "./_components/Sponsor";

export default function Home() {
  return (
    <main className="size-full overflow-y-auto pb-10 z-10">
      <div className="flex flex-col items-center justify-center max-w-4xl mx-auto ">
        <section id="home" className="scroll-mt-16">
          <Hero />
        </section>
        <section id="speakers" className="scroll-mt-16">
          <Speakers />
        </section>
        <section id="schedule" className="mt-40 scroll-mt-16">
          <Schedule />
        </section>
        <section id="sponsors" className="mt-40 scroll-mt-16">
          <Sponsor />
        </section>
      </div>
    </main>
  );
}
