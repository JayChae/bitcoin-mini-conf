import Image from "next/image";
import Link from "next/link";

type Props = {};
export default function Sponsor({}: Props) {
  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
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
    </div>
  );
}
