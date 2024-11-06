import React from "react";
import NetworkIcons from "../networks/NetworkIcons";
import WalletCard from "./WalletCard";
import CopyToClip from "../common/CopyToClip";
import { Globe01 } from "untitledui-js-base";
import { NextPage } from "next";

interface props {
    wallet?: string | undefined;
    address?: string
}

const WalletNetwork:NextPage<props> = ({wallet, address="address"}) => {
    const url = () => {
        if (wallet === undefined){
            return 'https://solscan.io/'
        } if (wallet === "MetaMask"){
            return `https://etherscan.io/address/${address}`
        }
    }

  return (
    <WalletCard>
      <div className="flex items-center gap-3">
        <NetworkIcons height={24} width={24} icon={wallet} />
        <div className="flex flex-col">
          <p className="text-sm">{wallet}</p>
          <p className="text-[10px] text-white/dark">{address.slice(0,6)}...{address.slice(-4)}</p>
        </div>
      </div>
      <div className="flex items-center gap-2">
        <CopyToClip value={address} />
        <a target="blank" href={url()} className="cursor-pointer">
          <Globe01 height={16} width={16} className="text-white/60" />
        </a>
      </div>
    </WalletCard>
  );
};

export default WalletNetwork;
