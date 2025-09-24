import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
};
export default function Sponsor({ title }: Props) {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-10">
      <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold pointer-events-none text-accent animate-fade-in">
        {title}
      </h2>
      <Link href={"https://hrf.org"} target="_blank">
        <Image
          src={"/sponsors/hrf.png"}
          alt={"Human Rights Foundation"}
          width={350}
          height={350}
        />
      </Link>
      <Link href={"https://walletofsatoshi.com"} target="_blank">
        <Image
          src={"/sponsors/ws.png"}
          alt={"Wallet of Satoshi"}
          width={350}
          height={350}
        />
      </Link>
      <Link href={"https://noncelab.com"} target="_blank">
        <Image
          src={"/sponsors/nl.png"}
          alt={"NonceLab"}
          width={350}
          height={350}
        />
      </Link>
    </section>
  );
}
