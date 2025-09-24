import GradientText from "@/components/GradientText";
import StarBorder from "@/components/StarBorder";
import Link from "next/link";
import { type TicketButton } from "../messages/tickets";

type Props = {
  title: string;
  subtitle: string;
  tickets: TicketButton[];
};

export default async function Hero({ title, subtitle, tickets }: Props) {
  return (
    <div className="flex flex-col items-center justify-center h-screen gap-14">
      <section className="flex flex-col items-center justify-center gap-3">
        {/* Hero Title Section */}
        <h1 className="">
          <GradientText
            colors={["#ff4040", "#ff7940", "#ff4040", "#ff7940", "#ff4040"]}
            animationSpeed={3}
            showBorder={false}
            className="text-3xl md:text-4xl lg:text-5xl font-bold pointer-events-none"
          >
            {title}
          </GradientText>
        </h1>

        <span className="text-md md:text-lg lg:text-xl font-bold pointer-events-none text-accent/35">
          {subtitle}
        </span>
      </section>
      <section className="w-full flex flex-col items-center justify-between md:flex-row gap-10">
        {tickets.map((ticket) => (
          <Link
            key={ticket.url}
            href={ticket.url}
            className="hover:scale-105 transition-all duration-300 "
          >
            <StarBorder
              as="button"
              className="cursor-pointer"
              color={ticket.color}
              speed="3s"
              thickness={3}
            >
              {ticket.name}
            </StarBorder>
          </Link>
        ))}
      </section>
    </div>
  );
}
