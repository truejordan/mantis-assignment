'use client'
import React, { createContext, useContext, useState } from "react";

interface AppContextType {
  isWalletOpen: boolean;
  openWallet: () => void;
  closeWallet: () => void;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider = ({ children }: { children: React.ReactNode }) => {
  const [isWalletOpen, setIsWalletOpen] = useState(false);

  const openWallet = () => setIsWalletOpen(true);
  const closeWallet = () => setIsWalletOpen(false);
  return (
    <AppContext.Provider value={{ isWalletOpen, openWallet, closeWallet }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (!context) {
      throw new Error("useAppContext must be used within an AppProvider");
    }
    return context;
  };