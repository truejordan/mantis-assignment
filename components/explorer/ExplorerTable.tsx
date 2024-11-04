"use client";
import React from "react";
import { NextPage } from "next";
import { useRouter } from "next/navigation";

interface TableProps {
  headers: string[];
  data: Array<{ [key: string]: string | number | JSX.Element }>;
}

const ExplorerTable: NextPage<TableProps> = ({ headers, data }) => {
  const router = useRouter();

  const handleRowClick = (blockHash: string) => {
    router.push(`/block/${blockHash}`);
    console.log("my block has should be correct:", blockHash);
  };

  return (
    <div className="space-y-2">
      <div className="grid grid-cols-[_1.2fr_1fr_1fr_80px_1fr_1.3fr] gap-4 p-4 text-xs rounded-t-lg text-left text-white/dark">
        {headers.map((header, index) => (
          <div key={index} className="">
            {header}
          </div>
        ))}
      </div>

      {data.map((row, rowIndex) => (
        <div
          key={rowIndex}
          onClick={() => handleRowClick(row.id as string)}
          className="grid grid-cols-[_1.2fr_1fr_1fr_80px_1fr_1.3fr] gap-4 p-4 bg-white/2 hover:bg-white/4 rounded-2xl text-white/dark hover:text-white hover:cursor-pointer"
        >
          {headers.map((header, colIndex) => (
            <div key={colIndex} className="text-sm">
              {row[header.toLowerCase().replace(/\s/g, "")]}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default ExplorerTable;
