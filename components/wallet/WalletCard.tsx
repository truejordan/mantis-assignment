import React from "react";

const WalletCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex bg-white/2 w-full rounded-2xl p-4 justify-between">
      {children}
    </div>
  );
};

export default WalletCard;
