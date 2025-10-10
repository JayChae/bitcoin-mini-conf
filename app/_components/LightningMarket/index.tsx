import { type Market } from "../../messages/markets";
import MarketCard from "./Card";

type Props = {
  markets: Market[];
  moreText: string;
};

export default function LightningMarket({ markets, moreText }: Props) {
  return (
    <div className="w-full">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 md:gap-8">
        {markets.map((market) => (
          <MarketCard key={market.name} market={market} moreText={moreText} />
        ))}
      </div>
    </div>
  );
}
