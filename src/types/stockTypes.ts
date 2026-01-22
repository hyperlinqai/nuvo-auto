// Types for Indian Stock Market API responses

export interface TrendingStock {
    ticker_id: string;
    company_name: string;
    price: string;
    percent_change: string;
    net_change: string;
    high: string;
    low: string;
    open: string;
    volume: string;
    year_high: string;
    year_low: string;
}

export interface TrendingStocksResponse {
    trending_stocks: {
        top_gainers: TrendingStock[];
        top_losers: TrendingStock[];
    };
}

export interface MostActiveStock {
    ticker: string;
    company: string;
    price: number;
    percent_change: number;
    net_change: number;
    volume: number;
}

export interface StockTickerItem {
    symbol: string;
    name: string;
    price: number;
    change: number;
    percentChange: number;
    isPositive: boolean;
}

export interface MarketData {
    stocks: StockTickerItem[];
    lastUpdated: Date;
    isLoading: boolean;
    error: string | null;
}
