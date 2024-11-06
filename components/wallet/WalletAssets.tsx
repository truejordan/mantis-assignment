import React from "react";
import WalletCard from "./WalletCard";
import TokenIcons from "../networks/TokenIcons";

interface WalletAssetsProps {
  icon?: string;
  symbol?: string;
  usd?: number;
  balance?: number;
  loading?: boolean;
}

const WalletAssets: React.FC<WalletAssetsProps> = ({
  icon = "icon",
  symbol = "SOL",
  usd = "0.00",
  balance = "100",
  loading = false,
}) => {
  if (loading) {
    return (
      <WalletCard>
        <div className="flex gap-2 items-center">
          <span className="bg-white/4 h-6 w-6 rounded-full"/>
          <p className="font-bold text-sm text-transparent bg-white/4">{symbol}</p>
        </div>
        <div className="flex flex-col justify-center items-end text-white/4">
          <p className="text-sm font-bold">${usd}</p>
          <p className="text-xs">{balance}</p>
        </div>
      </WalletCard>
    );
  }
  return (
    <WalletCard>
      <div className="flex gap-2 items-center">
        <TokenIcons icon={icon} height={24} width={24} />
        <p className="font-bold text-sm">{symbol}</p>
      </div>
      <div className="flex flex-col justify-center items-end">
        <p className="text-sm font-bold">${usd}</p>
        <p className="text-xs text-white/dark">{balance}</p>
      </div>
    </WalletCard>
  );
};

export default WalletAssets;
