import Image from "next/image";

type Props = {
  title: string;
  firstDay: {
    title: string;
    date: string;
    description: string;
    content: string;
  };
  secondDay: {
    title: string;
    date: string;
    description: string;
    content: string;
  };
};

export default function Schedule({ title, firstDay, secondDay }: Props) {
  return (
    <section className="flex flex-col items-center justify-center gap-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        {title}
      </h2>

      <div className="w-full space-y-12 md:space-y-16">
        {/* First Day */}
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 aspect-[4/3] bg-gray-800/30 border border-gray-700/50 rounded-lg overflow-hidden">
            <Image
              src="/mainDay.webp"
              alt="First Day - Main Conference"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {firstDay.title}
              </h3>
              <time
                dateTime="2024-11-29"
                className="text-gray-400 text-sm font-medium"
              >
                {firstDay.date}
              </time>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {firstDay.description}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              {firstDay.content}
            </p>
          </div>
        </div>

        {/* Second Day */}
        <div className="flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12">
          <div className="w-full md:w-1/2 aspect-[4/3] bg-gray-800/30 border border-gray-700/50 rounded-lg overflow-hidden">
            <Image
              src="/uniDay.webp"
              alt="Second Day - University Day"
              width={800}
              height={600}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
            <div className="flex items-center gap-2">
              <h3 className="text-xl md:text-2xl font-semibold text-white">
                {secondDay.title}
              </h3>
              <time
                dateTime="2024-11-30"
                className="text-gray-400 text-sm font-medium"
              >
                {secondDay.date}
              </time>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              {secondDay.description}
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              {secondDay.content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
