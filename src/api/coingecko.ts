import axios from "axios";

// Define the shape of the response from CoinGecko
export interface CoinGeckoPrice {
  usd: number;
  usd_24h_change: number;
}

export type PriceResponse = Record<string, CoinGeckoPrice>;

export interface MarketCoin {
  id: string;
  symbol: string;
  name: string;
  image?: string;
  current_price: number;
  market_cap: number;
  total_volume: number;
  price_change_percentage_24h?: number;
}

// Use Vite dev proxy to avoid browser CORS during local development; fall back to
// direct CoinGecko URL in production builds.
const BASE_URL = import.meta.env.DEV
  ? "/coingecko/api/v3"
  : "https://api.coingecko.com/api/v3";

export const fetchPrices = async (ids: string[]): Promise<PriceResponse> => {
  if (ids.length === 0) return {};

  try {
    const { data } = await axios.get<PriceResponse>(
      `${BASE_URL}/simple/price`,
      {
        params: {
          ids: ids.join(","),
          vs_currencies: "usd",
          include_24hr_change: "true",
        },

        timeout: 5000,
      },
    );

    return data;
  } catch (error) {
    console.error("CoinGecko API Error:", error);
    throw error;
  }
};

export const fetchMarkets = async (ids: string[]): Promise<MarketCoin[]> => {
  if (ids.length === 0) return [];

  try {
    const { data } = await axios.get<MarketCoin[]>(
      `${BASE_URL}/coins/markets`,
      {
        params: {
          vs_currency: "usd",
          ids: ids.join(","),
          order: "market_cap_desc",
          sparkline: false,
          price_change_percentage: "24h",
        },
        timeout: 5000,
      },
    );

    return data;
  } catch (error) {
    console.error("CoinGecko API Error:", error);
    throw error;
  }
};
