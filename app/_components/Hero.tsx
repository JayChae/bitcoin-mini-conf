import GradientText from "@/components/GradientText";
import StarBorder from "@/components/StarBorder";
import Link from "next/link";
import { type TicketButton } from "../messages/tickets";
import Attendees from "./Attendees";

type Props = {
  title: string;
  subtitle: string;
  tickets: TicketButton[];
  date: string;
  location: string;
};

export default async function Hero({
  title,
  subtitle,
  tickets,
  date,
  location,
}: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-14 pt-16">
      <section className="flex flex-col items-center justify-center">
        {/* Hero Title Section */}
        <h1 className="text-center mb-6">
          <GradientText
            colors={["#ff4040", "#ff7940", "#ff4040", "#ff7940", "#ff4040"]}
            animationSpeed={2}
            showBorder={false}
            className="text-4xl md:text-6xl lg:text-7xl lg:font-bold md:font-extrabold sm:font-bold xs:font-bold pointer-events-none"
          >
            {title}
          </GradientText>
        </h1>

        {/* Subtitle with emphasis */}
        <div className="mb-4">
          <span className="text-xl md:text-2xl lg:text-3xl font-semibold pointer-events-none text-accent/60 tracking-tight">
            {subtitle}
          </span>
        </div>

        {/* Date and Location with different styling */}
        <div className="flex flex-col md:flex-row items-center gap-1 md:gap-8">
          <span className="text-base md:text-lg lg:text-xl font-medium pointer-events-none text-accent/50">
            {date}
          </span>

          <span className="text-base md:text-lg lg:text-xl font-medium pointer-events-none text-accent/50">
            {location}
          </span>
        </div>
      </section>
      <section className="w-full flex flex-col items-center lg:flex-row gap-3">
        {tickets.map((ticket) => (
          <Link
            key={ticket.url}
            href={ticket.url}
            className="w-full hover:scale-105 transition-all duration-300 "
          >
            <StarBorder
              as="button"
              className="cursor-pointer w-full"
              color={ticket.color}
              speed="3s"
              thickness={4}
            >
              {ticket.name}
            </StarBorder>
          </Link>
        ))}
      </section>
    </div>
  );
}
