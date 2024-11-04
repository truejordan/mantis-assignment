'use client'
import React, {useState} from 'react'
import ExplorerTable from './ExplorerTable';
import SearchBar from '../common/Search';
import SolanaIcon from '../networks/SolanaIcon';
import { formatRelativeTime } from '@/utils/RelativeTime';
import { NextPage } from 'next';

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
  
  interface ExplorerProps {
    data: BlockData[];
  }

const Explorer: NextPage<ExplorerProps> = ({data}) => {
    const [searchQuery, setSearchQuery] = useState("");

    // Filter data based on search query
    const filteredData = data.filter((item) =>
      item.blockHash.toLowerCase().includes(searchQuery.toLowerCase())
    );
  
    // Map the filtered data to table rows
    const tableData = filteredData.map((item) => ({
      id: item.blockHash,
      blockhash: (
        <p
          title={item.blockHash}
          className="text-green-mantis hover:text-green-mantis/dark"
        >
          {item.blockHash.slice(0, 6)}...{item.blockHash.slice(-4)}
        </p>
      ),
      slot: (
        <span className="text-green-mantis hover:text-green-mantis/dark">
          #{item.slot}
        </span>
      ),
      timestamp: <span>{formatRelativeTime(item.timestamp)}</span>,
      txcount: <span>{item.txCount}</span>,
      leader: (
        <p
          title={item.leader}
          className="text-green-mantis hover:text-green-mantis/dark"
        >
          {item.leader.slice(0, 6)}...{item.leader.slice(-4)}
        </p>
      ),
      reward: (
        <span className="flex items-center gap-2">
          <SolanaIcon height={16} width={16} />
          <p className='flex'>{`${item.rewardSol.toFixed(2)} SOL`}</p>
          <p>(${(item.rewardSol * item.solanaPriceUsd).toFixed(2)})</p>
        </span>
      ),
    }));
  
    return (
      <>
        <SearchBar onSearch={setSearchQuery} placeholder="Search by Block Hash" />
        <ExplorerTable headers={["Block hash", "Slot", "Timestamp", "Tx count", "Leader", "Reward"]} data={tableData} />
      </>
    );
}

export default Explorer