import { Chain } from "wagmi";

export const BotanixTestnet = {
  id: 3636,
  name: "Botanix Network Testnet",
  network: "Botanix Testnet",
  nativeCurrency: {
    decimals: 18,
    name: "BTC",
    symbol: "BTC",
  },
  rpcUrls: {
    public: { http: ["https://node.botanixlabs.dev/"] },
    default: { http: ["https://node.botanixlabs.dev/"] },
  },
  blockExplorers: {
    botanixpl: { name: "BTC", url: "https://3xpl.com/botanix" },
    default: { name: "BTC", url: "https://3xpl.com/botanix" },
  },
} as const satisfies Chain;

// Network Name: Botanix Testnet
// New RPC URL: https://node.botanixlabs.dev
// Chain ID: 3636
// Currency Symbol: BTC
// Block Explorer URL: https://3xpl.com/botanix
