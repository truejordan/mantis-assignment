import React from "react";
import { ChevronLeft, Logout04 } from "untitledui-js-base";

interface WalletHeaderProps {
    isConnected: boolean;
    closeWallet: () => void;
    disconnect: () => void;
    balance?: number;
  }
  
  const WalletHeader: React.FC<WalletHeaderProps> = ({
    isConnected,
    closeWallet,
    disconnect,
    balance = 0.0,
  }) => {
    return (
      <div className="flex flex-col items-center">
        <div className="flex relative w-full justify-center">
          <button onClick={closeWallet} className="absolute left-0">
            <ChevronLeft className="text-white/dark" />
          </button>
          <p className="text-sm text-white/dark">Total balance</p>
          {isConnected && (
            <button onClick={disconnect} className="absolute right-0">
              <Logout04 height={24} width={24} className="text-white/dark" />
            </button>
          )}
        </div>
        <p className="text-[32px] font-medium">${isConnected ? balance: "0.00"}</p>
      </div>
    );
  };
  export default WalletHeader;