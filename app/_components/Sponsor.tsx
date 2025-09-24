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
          src={"/sponsors/WoS.png"}
          alt={"Wallet of Satoshi"}
          width={350}
          height={350}
        />
      </Link>
      <Link href={"https://noncelab.com"} target="_blank">
        <Image
          src={"/sponsors/nonceLab.png"}
          alt={"NonceLab"}
          width={350}
          height={350}
        />
      </Link>
    </section>
  );
}
