import React from "react";
import ExplorerBanner from "@/components/explorer/ExplorerBanner";
import Explorer from "@/components/explorer/Explorer";

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

export const dynamic = 'force-dynamic'

const Home = async () => {

  const baseUrl =
    process.env.NODE_ENV === "production"
      ? `https://${process.env.VERCEL_URL || 'mantis-assignment-43af.vercel.app'}`
      : "http://localhost:3000";
  console.log("Base URL:", baseUrl);
  console.log("vercel url", process.env.VERCEL_URL)
  console.log("VERCEL_ENV:", process.env.NODE_ENV);
  
  // const res = await fetch(`${baseUrl}/api/block`, { cache: "no-store" });
  
  // if (!res.ok) {
  //   const errorText = await res.text()
  //   console.log("Response:", res.status, errorText );
  //   throw new Error("Failed to fetch data");
  // }

  try {
    console.log("Starting fetch to /api/block");
    const res = await fetch(`${baseUrl}/api/block`, { cache: "no-store" });

    console.log("Fetch status:", res.status);

    if (!res.ok) {
      const errorText = await res.text();
      console.error("Fetch failed:", res.status, errorText);
      throw new Error(`Fetch failed with status: ${res.status}`);
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
} catch (error) {
  console.error("Error during fetch:", error);
  throw error;
}
};
export default Home;
