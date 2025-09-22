import Hero from "./_components/Hero";
import Schedule from "./_components/Schedule";
import Speakers from "./_components/Speakers";
import Sponsor from "./_components/Sponsor";

export default function Home() {
  return (
    <main className="size-full overflow-y-auto max-w-4xl mx-auto pb-10">
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <Speakers />
        <Schedule />
        <Sponsor />
      </div>
    </main>
  );
}
