"use client";
import { WagmiConfig, createConfig, configureChains } from "wagmi";
import "@rainbow-me/rainbowkit/styles.css";
import { RainbowKitProvider, lightTheme } from "@rainbow-me/rainbowkit";
import { publicProvider } from "wagmi/providers/public";
import { connectorsForWallets } from "@rainbow-me/rainbowkit";
import {
  metaMaskWallet,
  trustWallet,
  injectedWallet,
  rainbowWallet,
  walletConnectWallet,
  coinbaseWallet,
} from "@rainbow-me/rainbowkit/wallets";

// import { BotanixTestnet } from "../app/Chain";
import { BotanixTestnet } from "./Chain";

const projectId = "274de4271228fdd69013c56274f0e688";
const clientId = "f5888353ab056968602a49dda7537ef3";
const { chains, publicClient } = configureChains(
  [BotanixTestnet],
  [publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: "Recommended",
    wallets: [
      metaMaskWallet({ projectId, chains }),
      trustWallet({ projectId, chains }),
    ],
  },
  {
    groupName: "Others",
    wallets: [
      coinbaseWallet({
        chains,
        appName: "WasteWise",
      }),
      injectedWallet({ chains }),
      rainbowWallet({ projectId, chains }),
      walletConnectWallet({ projectId, chains }),
    ],
  },
]);

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const WagmiProvider = ({ children }) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        theme={lightTheme({
          accentColor: "#1570ef",
          accentColorForeground: "white",
          borderRadius: "small",
          fontStack: "system",
          overlayBlur: "small",
        })}
        chains={chains}
      >
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  );
};

export default WagmiProvider;
