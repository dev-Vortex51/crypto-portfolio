export interface WatchlistAsset {
  id: string;
  name: string;
  symbol: string;
  image: string;
  price: number;
  change24h: number;
  marketCap: number;
  volume24h: number;
  tags: string[];
  note: string;
}

export interface WatchlistTarget {
  id: string;
  tags: string[];
  note: string;
}

export const watchlistTargets: WatchlistTarget[] = [
  {
    id: "solana",
    tags: ["Layer 1", "DeFi"],
    note: "Ecosystem liquidity accelerating; watch volatility into CPI prints.",
  },
  {
    id: "chainlink",
    tags: ["Infrastructure"],
    note: "Staking v0.3 inflows flattening; alerts near $17 support.",
  },
  {
    id: "uniswap",
    tags: ["DeFi"],
    note: "V4 governance vote next week; expect headline swings.",
  },
  {
    id: "arbitrum",
    tags: ["Layer 2", "Infrastructure"],
    note: "Sequencer revenues trending up; bridge flows elevated.",
  },
  {
    id: "dogecoin",
    tags: ["Meme"],
    note: "High social velocity; keep sizing disciplined.",
  },
];

export const availableTags = [
  "All",
  "Layer 1",
  "Layer 2",
  "DeFi",
  "Infrastructure",
  "Meme",
];
