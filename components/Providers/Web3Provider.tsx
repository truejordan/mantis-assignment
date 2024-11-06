"use client";
import React from "react";
import { AppProvider } from "@/context/AppContext";
import { createAppKit } from "@reown/appkit/react";
import { SolanaAdapter } from "@reown/appkit-adapter-solana";
import { wagmiAdapter, projectId } from "@/utils/wagmi/config";
import { solana, solanaTestnet, solanaDevnet } from "@reown/appkit/networks";
import { mainnet, arbitrum, sepolia } from "@reown/appkit/networks";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { cookieToInitialState, WagmiProvider, type Config } from "wagmi";

import {
  SolflareWalletAdapter,
  PhantomWalletAdapter,
} from "@solana/wallet-adapter-wallets";
const queryClient = new QueryClient();

if (!projectId) {
  throw new Error("Project ID is not defined");
}

const solanaWeb3JsAdapter = new SolanaAdapter({
  wallets: [new PhantomWalletAdapter(), new SolflareWalletAdapter()],
});

const metadata = {
  name: "AppKit",
  description: "AppKit Example",
  url: "https://example.com", 
  icons: ["https://avatars.githubusercontent.com/u/179229932"],
};

createAppKit({
  adapters: [wagmiAdapter, solanaWeb3JsAdapter],
  networks: [mainnet, arbitrum, sepolia, solana, solanaTestnet, solanaDevnet],
  metadata: metadata,
  projectId,
  features: {
    analytics: true,
  },
  tokens: {
    "eip155:1": {
      address: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      image: 'token_image_url' //optional
    },
    "eip155:137": {
      address: '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619',
      image: 'token_image_url' //optional
    }
  }
});

const Web3Provider = ({ children, cookies }: { children: React.ReactNode; cookies?: string | null }) => {
    const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig as Config, cookies)
  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig as Config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        <AppProvider>{children}</AppProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
};

export default Web3Provider;
