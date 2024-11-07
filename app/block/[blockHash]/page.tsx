import React from "react";
// import { notFound } from "next/navigation";
import ExplorerBanner from "@/components/explorer/ExplorerBanner";
import BackButton from "@/components/common/BackButton";
import { ChevronLeft, ChevronRight } from "untitledui-js-base";
import { NextPage } from "next";
import { formatRelativeTime } from "@/utils/RelativeTime";
import FormatUTC from "@/utils/FormatUTC";
import CopyToClip from "@/components/common/CopyToClip";
import SolanaIcon from "@/components/networks/SolanaIcon";

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

interface CardProps {
  children?: React.ReactNode;
  title?: string;
}

const BlockCard: NextPage<CardProps> = ({ children, title }) => {
  return (
    <div className="flex flex-col py-5 px-6 rounded-3xl justify-center items-center gap-2 border-[1px] border-white/10 text-sm font-medium">
      <p className="text-white/dark text-xs font-normal">{title}</p>
      {children}
    </div>
  );
};

const BlockDetailPage = async ({
  params,
}: {
  params: Promise<{ blockHash: string }>;
}) => {
  const blockHash = (await params).blockHash;
  

  const baseUrl = process.env.VERCEL_ENV === "production"
    ?` https://${process.env.VERCEL_URL || 'main.duafzbggjgaqf.amplifyapp.com'}` 
    : "http://localhost:3000/api/block";

  const res = await fetch(`${baseUrl}`, {
    cache: "no-store",
  });

  const allBlocks: BlockData[] = await res.json();
  const data = allBlocks.find((block) => block.blockHash === blockHash);
  const utcDate = data?.timestamp ? FormatUTC(data.timestamp) : "N/A";

  if (!data) {
    // notFound();
    return <div className="flex w-full h-screen items-center justify-center">
      <h1>Not found</h1>
    </div>;
  }

  return (
    <div className="flex pt-[168px] gap-10 justify-center  font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col w-[800px] gap-10">
        <div className="flex gap-6">
          <BackButton className=" flex bg-white/2 rounded-3xl items-center p-6 text-white/dark">
            <ChevronLeft height={16} width={16} />
          </BackButton>
          <ExplorerBanner
            block={`Block #${data.slot}`}
            caption="Check the block details."
          />
        </div>

        <div className="flex flex-col gap-3">
          <div className="grid grid-cols-4 gap-3">
            <BlockCard title="Block">
              <div className="flex items-center gap-2">
                <ChevronLeft
                  height={16}
                  width={16}
                  className="text-white/dark"
                />
                <p>{data.slot}</p>
                <ChevronRight
                  height={16}
                  width={16}
                  className="text-white/dark"
                />
              </div>
            </BlockCard>
            <BlockCard title="Timestamp">
              <p>{formatRelativeTime(data.timestamp)}</p>
            </BlockCard>
            <BlockCard title="Date (UTC)">
              <p>{utcDate}</p>
            </BlockCard>
            <BlockCard title="Transactions">
              <p>{data.txCount}</p>
            </BlockCard>
          </div>
          <BlockCard title="Block Hash">
            <p>{data.blockHash}</p>
          </BlockCard>

          <div className="grid grid-cols-2 gap-3">
            <BlockCard title="Leader">
              <div className="flex items-center gap-2">
                <p className="text-green-mantis">
                  {data.leader.slice(0, 6)}...{data.leader.slice(-4)}
                </p>
                <CopyToClip value={data.leader} />
              </div>
            </BlockCard>
            <BlockCard title="Reward">
              <div className="flex items-center gap-2">
                <SolanaIcon height={16} width={16} />
                <p>{`${data.rewardSol.toFixed(2)} SOL`}</p>
                <p className="text-white/dark">(${(data.rewardSol * data.solanaPriceUsd).toFixed(2)})</p>
              </div>
            </BlockCard>
          </div>
          <BlockCard title="Previous Block Hash">
            <p>{data.prevBlockHash}</p>
          </BlockCard>
        </div>
      </div>
    </div>
  );
};

export default BlockDetailPage;
