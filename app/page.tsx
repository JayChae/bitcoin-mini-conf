import Hero from "./_components/Hero";
import Speakers from "./_components/Speakers";

export default function Home() {
  return (
    <main className="size-full overflow-y-auto max-w-4xl mx-auto">
      <div className="flex flex-col items-center justify-center">
        <Hero />
        <Speakers />
      </div>
    </main>
  );
}
