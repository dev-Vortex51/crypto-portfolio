export interface WalletAsset {
  id: string;
  symbol: string;
  name: string;
  quantity: number;
  avgBuyPrice: number;
  icon: string;
}

export interface AssetRowData extends WalletAsset {
  currentPrice: number;
  priceChange24hPercent: number;
  totalValue: number;
  pnlAbsolute: number;
  pnlPercent: number;
  isStale: boolean;
}
