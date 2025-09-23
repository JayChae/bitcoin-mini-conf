import ChromaGrid from "@/components/ChromaGrid";
import ShinyText from "@/components/ShinyText";
import { type Speaker } from "../messages/speakers";
type Props = {
  speakers: Speaker[];
  title: string;
};

export default function Speakers({ speakers, title }: Props) {
  return (
    <section className="flex flex-col items-center justify-center gap-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pointer-events-none text-accent">
        {title}
      </h2>
      <ChromaGrid
        items={speakers}
        radius={300}
        damping={0.45}
        fadeOut={0.6}
        ease="power3.out"
        className="md:gap-14"
      />
      <ShinyText text="More speakers on the way!" className="text-2xl" />
    </section>
  );
}
