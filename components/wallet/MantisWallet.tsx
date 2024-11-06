"use client";
import React, { useState, useEffect } from "react";
import WalletHeader from "./WalletHeader";
import { useAppContext } from "@/context/AppContext";
import LoginButton from "../common/LoginButton";
import {
  useAppKitAccount,
  useDisconnect,
  useWalletInfo,
} from "@reown/appkit/react";
import WalletNetwork from "./WalletNetwork";
import WalletAssets from "./WalletAssets";
import { Connection, PublicKey, LAMPORTS_PER_SOL } from "@solana/web3.js";

type TokenMetadata = {
    [key: string]: {
      mint: string;
      icon: string;
      coingeckoId: string;
    };
  };

const tokenMetadata:TokenMetadata = {
    SOL: {
      mint: "Solana", // SOL is native and doesn’t have a token program mint
      icon: "SOL",
      coingeckoId: "solana",
    },
    ETH: {
      mint: "7vfCXTUXx5WJV5JADk17DUJ4ksgau7utNKj4b963voxs",
      icon: "ETH",
      coingeckoId: "ethereum",
    },
    mSOL: {
      mint: "3JLPCS1qM2zRw3Dp6V4hZnYHd4toMNPkNesXdX9tg6KM",
      icon: "MSOL",
      coingeckoId: "msol",
    },
    USDC: {
      mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      icon: "USDC",
      coingeckoId: "usd-coin",
    },
    USDT: {
      mint: "EPjFWdd5AufqSSqeM2qN1xzybapC8G4wEGGkZwyTDt1v",
      icon: "USDT",
      coingeckoId: "usdt",
    },
  };
  
  const fetchTokenBalances = async (
    walletAddress: string,
    connection: Connection
  ) => {
    const publicKey = new PublicKey(walletAddress);
  
    const tokenAccounts = await connection.getParsedTokenAccountsByOwner(
      publicKey,
      {
        programId: new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA"), // Token Program ID
      }
    );
  
    return tokenAccounts.value.map((account) => {
      const accountData = account.account.data.parsed.info;
      return {
        mint: accountData.mint,
        balance: parseFloat(accountData.tokenAmount.uiAmountString),
      };
    });
  };
  
  const fetchTokenPrices = async () => {
    const ids = Object.values(tokenMetadata)
      .map((token) => token.coingeckoId)
      .join(",");
    const response = await fetch(
      `https://api.coingecko.com/api/v3/simple/price?ids=${ids}&vs_currencies=usd`
    );
    return await response.json();
  };
  
  const calculateTokenValues = async (
    walletAddress: string,
    connection: Connection
  ) => {
    const solBalance =
      (await connection.getBalance(new PublicKey(walletAddress))) /
      LAMPORTS_PER_SOL;
  
    const tokenAccounts = await fetchTokenBalances(walletAddress, connection);
    const prices = await fetchTokenPrices();
  
    const tokens = Object.keys(tokenMetadata).map((key) => {
      const token = tokenMetadata[key];
      if (key === "SOL") {
        const solPrice = prices[token.coingeckoId]?.usd || 0;
        return {
          symbol: "SOL",
          icon: token.icon,
          balance: solBalance,
          usd: solBalance * solPrice,
        };
      }
  
      const account = tokenAccounts.find((t) => t.mint === token.mint);
      const balance = account ? account.balance : 0;
      const price = prices[token.coingeckoId]?.usd || 0;
  
      return {
        symbol: key,
        icon: token.icon,
        balance,
        usd: balance * price,
      };
    });
  
    const totalValueUSD = tokens.reduce((sum, token) => sum + token.usd, 0);
  
    return { tokens, totalValueUSD };
  };

  interface TokenWithValue {
    symbol: string;
    icon: string;
    balance: number;
    usd: number;
  }

const MantisWallet = () => {
  const { isWalletOpen, closeWallet } = useAppContext();
  const { isConnected, address } = useAppKitAccount();
  const { disconnect } = useDisconnect();
  const { walletInfo } = useWalletInfo();
  const connectedWallet = walletInfo?.name ?? "Phantom";

  const [totalBalanceUSD, setTotalBalanceUSD] = useState(0);
  const [tokens, setTokens] = useState<TokenWithValue[]>([]);
  const [loading, setLoading] = useState(false);

  const connection = new Connection(
    process.env.NEXT_PUBLIC_ALCHEMY_KEY as string,
    "confirmed"
  );

const calculateAndSetTokenValues = async () => {
    if (!isConnected || !address) return;

    setLoading(true);
    try {
      const { tokens, totalValueUSD } = await calculateTokenValues(
        address,
        connection
      );
      setTokens(tokens);
      setTotalBalanceUSD(totalValueUSD);
    } catch (error) {
      console.error("Error calculating token values:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isConnected && address && walletInfo?.name === undefined) {
      calculateAndSetTokenValues();
    }
  }, [isConnected, address]);

  return (
    isWalletOpen && (
      <div className="flex w-full h-screen z-50 fixed bg-white/2 backdrop-blur-xl">
        <div className="flex flex-col w-[350px] bg-background ml-auto border-l-[1px] gap-8 border-white/10 p-8">
          <WalletHeader
            isConnected={isConnected}
            closeWallet={closeWallet}
            disconnect={disconnect}
            balance={Math.round(totalBalanceUSD * 100) / 100}
          />
          {isConnected && (
            <>
              <WalletNetwork wallet={connectedWallet} address={address} />
              <div className="flex flex-col w-full gap-1 items-center">
              {loading
                  ? Array(tokens.length || 4)
                      .fill(null)
                      .map((_, idx) => <WalletAssets key={idx} loading />)
              :tokens.map((token) => (
                  <WalletAssets
                    key={token.symbol}
                    icon={token.icon}
                    symbol={token.symbol}
                    balance={parseFloat(token.balance.toFixed(2))}
                    usd={parseFloat(token.usd.toFixed(2))}
                  />
                ))}
                {(walletInfo?.name === "MetaMask" &&(
                    <p className="text-white/dark px-4">Connect your phantom wallet to see your assets.</p>
                ))}
              </div>
            </>
          )}

          {!isConnected && (
            <div className="flex flex-col w-full h-full items-center justify-center">
              <LoginButton label="Connect" connectButton />
            </div>
          )}
        </div>
      </div>
    )
  );
};

export default MantisWallet;
