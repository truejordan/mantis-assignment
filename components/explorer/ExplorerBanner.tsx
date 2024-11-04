import React from "react";
import { NextPage } from "next";
import SolanaIcon from "../networks/SolanaIcon";

interface Props {
  block?: string;
  caption?: string;
}

const ExplorerBanner: NextPage<Props> = ({
  block = "Assignment block explorer",
  caption = "Check list of blocks and detailed view."
}) => {
  return (
    <div className="flex w-full items-center gap-6 p-5 border-[1px] border-white/10 rounded-3xl">
      <SolanaIcon/>
      <div className="flex flex-col gap-1">
        <p className="text-2xl font-medium">{block}</p>
        <p className="text-white/dark text-sm">{caption}</p>
      </div>
    </div>
  );
};

export default ExplorerBanner;
