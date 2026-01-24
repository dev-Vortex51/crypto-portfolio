import type { WalletAsset } from "../types/types";

export const MOCK_WALLET: WalletAsset[] = [
  {
    id: "binancecoin",
    symbol: "bnb",
    name: "Binance Coin",
    quantity: 15.4,
    avgBuyPrice: 411.39,
    icon: "https://cryptologos.cc/logos/bnb-bnb-logo.png",
  },
  {
    id: "polkadot",
    symbol: "dot",
    name: "Polkadot",
    quantity: 120.5,
    avgBuyPrice: 6.33,
    icon: "https://cryptologos.cc/logos/polkadot-new-dot-logo.png",
  },
  {
    id: "bitcoin",
    symbol: "btc",
    name: "Bitcoin",
    quantity: 0.045,
    avgBuyPrice: 37903.0,
    icon: "https://cryptologos.cc/logos/bitcoin-btc-logo.png",
  },
  {
    id: "ethereum",
    symbol: "eth",
    name: "Ethereum",
    quantity: 1.2,
    avgBuyPrice: 2785.2,
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png",
  },
];

export const fetchWallet = async (): Promise<WalletAsset[]> => {
  await new Promise((resolve) => setTimeout(resolve, 800));
  return MOCK_WALLET;
};
