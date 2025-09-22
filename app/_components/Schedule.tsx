import Image from "next/image";

export default function Schedule() {
  return (
    <section className="flex flex-col items-center justify-center gap-16">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
        Schedule
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
                First Day
              </h3>
              <time
                dateTime="2024-11-29"
                className="text-gray-400 text-sm font-medium"
              >
                November 29, 2024
              </time>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Curated talks to deliver maximum signal-to-noise ratio.
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              A single stage with insightful talks prepared by industry leading
              experts. K-BBQ dinner provided afterwards to all attendees to
              strengthen relationships between community members.
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
                Second Day
              </h3>
              <time
                dateTime="2024-11-30"
                className="text-gray-400 text-sm font-medium"
              >
                November 30, 2024
              </time>
            </div>
            <p className="text-gray-300 text-sm md:text-base leading-relaxed">
              Hands on workshops with a Lightning Market in the heart of Seoul
            </p>
            <p className="text-gray-400 text-lg leading-relaxed">
              Workshops with a maximum size of 30 people to provide the
              attendees with quality educational sessions. Booths in the form of
              a Lightning market in the streets of Seoul to allow access for
              everyone in Seoul to visit and become a part of the community.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
