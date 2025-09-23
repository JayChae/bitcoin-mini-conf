import Image from "next/image";
import Link from "next/link";
import { type Sponsor } from "../messages/sponsor";

type Props = {
  title: string;
  sponsors: Sponsor[];
};
export default function Sponsor({ title, sponsors }: Props) {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pointer-events-none text-accent animate-fade-in">
        {title}
      </h2>
      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-10">
        {sponsors.map((sponsor) => (
          <Link
            key={sponsor.name}
            href={sponsor.url}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative transform transition-all duration-300 hover:scale-110 hover:-translate-y-2"
          >
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-600 opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-lg"></div>
            <Image
              src={sponsor.image}
              alt={sponsor.name}
              width={250}
              height={250}
              className="rounded-full shadow-lg group-hover:shadow-2xl transition-shadow duration-300 relative z-10"
            />
            <div className="absolute inset-0 rounded-full border-2 border-transparent group-hover:border-blue-400 transition-colors duration-300"></div>
          </Link>
        ))}
      </div>
    </section>
  );
}
