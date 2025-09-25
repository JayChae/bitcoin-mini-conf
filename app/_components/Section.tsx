import { ReactNode } from "react";

type Props = {
  id: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, title, children }: Props) {
  return (
    <section id={id} className="w-full scroll-mt-16">
      <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold pointer-events-none text-accent animate-fade-in mb-12">
        {title}
      </h2>
      {children}
    </section>
  );
}
