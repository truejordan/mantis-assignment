"use client";
import React, { useState } from "react";
import Icons from "./Icons";
import { NextPage } from "next";

interface Props {
  value?: string;
  height?: number;
  width?: number;
}

const CopyToClip: NextPage<Props> = ({ value, height, width }) => {
  const [showNotification, setShowNotification] = useState(false);

  const handleCopy = () => {
    if (value) {
      navigator.clipboard.writeText(value).then(
        () => {
          console.log("Copied to clipboard:", value);
          setShowNotification(true);
          setTimeout(() => setShowNotification(false), 2000); // Hide notification after 2 seconds
        },
        (err) => {
          console.error("Failed to copy:", err);
        }
      );
    }
  };
  return (
    <>
      <button onClick={handleCopy}>
        <Icons icon="copy-03" height={height} width={width} />
      </button>
      {showNotification && (
        <div className="fixed flex items-center space-x-2 bottom-8 text-green-mantis left-1/2 transform -translate-x-1/2 bg-green-500/[0.08] px-[16px] py-[15.5px] rounded-full shadow-lg z-50 overflow-hidden backdrop-blur-lg">
          <Icons icon="check-circle" height={20} width={20} />
          <p className="text-xs">Copied to clipboard!</p>
          <span className="absolute bottom-0 left-0 w-[83px] border-b-[1px] border-green-mantis rounded-bl-sm" />
        </div>
      )}
    </>
  );
};

export default CopyToClip;
