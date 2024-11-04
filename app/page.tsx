import React from "react";
import ExplorerBanner from "@/components/explorer/ExplorerBanner";
import Search from "@/components/common/Search";
import Explorer from "@/components/explorer/Explorer";
import { NextPage } from "next";

interface BlockData {
  blockHash: string;
  prevBlockHash: string;
  slot: number;
  timestamp: string;
  txCount: number;
  leader: string;
  rewardSol: number;
  rewardUsd: number;
  solanaPriceUsd: number;
}

interface ExplorerPageProps {
  data: BlockData[];
}

const Home: NextPage<ExplorerPageProps> = async () => {
  const baseUrl = process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : "http://localhost:3000";

  const res = await fetch(`${baseUrl}/api/block`, { cache: "no-store" });
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const data: BlockData[] = await res.json();

  return (
    <div className="flex pt-[168px] gap-10 justify-center  font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col w-[800px] gap-12">
        <ExplorerBanner />
        <Explorer data={data} />
      </div>
    </div>
  );
};
export default Home;
