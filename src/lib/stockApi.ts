// Indian Stock Market API Service
import type { TrendingStocksResponse, MostActiveStock, StockTickerItem } from '@/types/stockTypes';

const API_BASE_URL = 'https://stock-market-api.indianapi.in';

// Get API key from environment or use empty string as fallback
const getApiKey = (): string => {
    return import.meta.env.VITE_INDIAN_API_KEY || '';
};

// Fallback data when API is unavailable
const fallbackData: StockTickerItem[] = [
    // Major Indices
    { symbol: 'NIFTY 50', name: 'Nifty 50', price: 23500.25, change: 125.50, percentChange: 0.54, isPositive: true },
    { symbol: 'SENSEX', name: 'Sensex', price: 77250.80, change: 380.45, percentChange: 0.49, isPositive: true },
    { symbol: 'BANKNIFTY', name: 'Bank Nifty', price: 49850.75, change: 215.30, percentChange: 0.43, isPositive: true },
    { symbol: 'NIFTY IT', name: 'Nifty IT', price: 38520.40, change: -125.60, percentChange: -0.33, isPositive: false },
    { symbol: 'NIFTY MIDCAP', name: 'Nifty Midcap', price: 52180.90, change: 285.45, percentChange: 0.55, isPositive: true },
    // Commodities
    { symbol: 'GOLD', name: 'Gold', price: 62450.00, change: 320.00, percentChange: 0.51, isPositive: true },
    { symbol: 'SILVER', name: 'Silver', price: 74850.00, change: -180.00, percentChange: -0.24, isPositive: false },
    { symbol: 'CRUDE OIL', name: 'Crude Oil', price: 6425.00, change: 45.50, percentChange: 0.71, isPositive: true },
    // Currency
    { symbol: 'USD/INR', name: 'USD/INR', price: 83.42, change: 0.12, percentChange: 0.14, isPositive: true },
    // Blue-chip Stocks
    { symbol: 'RELIANCE', name: 'Reliance', price: 2850.75, change: -12.30, percentChange: -0.43, isPositive: false },
    { symbol: 'TCS', name: 'TCS', price: 4125.50, change: 28.75, percentChange: 0.70, isPositive: true },
    { symbol: 'HDFCBANK', name: 'HDFC Bank', price: 1725.30, change: -8.45, percentChange: -0.49, isPositive: false },
    { symbol: 'INFY', name: 'Infosys', price: 1580.25, change: 15.80, percentChange: 1.01, isPositive: true },
    { symbol: 'ICICIBANK', name: 'ICICI Bank', price: 1125.60, change: 5.25, percentChange: 0.47, isPositive: true },
    { symbol: 'BHARTIARTL', name: 'Bharti Airtel', price: 1485.90, change: 22.35, percentChange: 1.53, isPositive: true },
    { symbol: 'ITC', name: 'ITC', price: 465.80, change: -2.15, percentChange: -0.46, isPositive: false },
    { symbol: 'KOTAKBANK', name: 'Kotak Bank', price: 1825.45, change: 12.80, percentChange: 0.71, isPositive: true },
];

// Cache for API responses
let cachedData: StockTickerItem[] | null = null;
let cacheTimestamp: number = 0;
const CACHE_DURATION = 60000; // 1 minute cache

/**
 * Fetch trending stocks from the API
 */
export async function fetchTrendingStocks(): Promise<TrendingStocksResponse | null> {
    const apiKey = getApiKey();

    if (!apiKey) {
        console.warn('Indian API key not configured. Using fallback data.');
        return null;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/trending`, {
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching trending stocks:', error);
        return null;
    }
}

/**
 * Fetch NSE most active stocks
 */
export async function fetchNSEMostActive(): Promise<MostActiveStock[] | null> {
    const apiKey = getApiKey();

    if (!apiKey) {
        return null;
    }

    try {
        const response = await fetch(`${API_BASE_URL}/NSE_most_active`, {
            headers: {
                'X-Api-Key': apiKey,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            throw new Error(`API request failed: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching NSE most active:', error);
        return null;
    }
}

/**
 * Transform trending stock data to ticker format
 */
function transformTrendingStock(stock: {
    ticker_id?: string;
    company_name?: string;
    price?: string;
    percent_change?: string;
    net_change?: string;
}): StockTickerItem {
    const price = parseFloat(stock.price || '0');
    const percentChange = parseFloat(stock.percent_change || '0');
    const netChange = parseFloat(stock.net_change || '0');

    return {
        symbol: stock.ticker_id || 'N/A',
        name: stock.company_name || stock.ticker_id || 'Unknown',
        price,
        change: netChange,
        percentChange,
        isPositive: percentChange >= 0,
    };
}

/**
 * Transform most active stock data to ticker format
 */
function transformMostActiveStock(stock: MostActiveStock): StockTickerItem {
    return {
        symbol: stock.ticker?.replace('.NS', '').replace('.BO', '') || 'N/A',
        name: stock.company || stock.ticker || 'Unknown',
        price: stock.price || 0,
        change: stock.net_change || 0,
        percentChange: stock.percent_change || 0,
        isPositive: (stock.percent_change || 0) >= 0,
    };
}

/**
 * Get combined market data for the ticker
 */
export async function getMarketTickerData(): Promise<StockTickerItem[]> {
    // Check cache first
    const now = Date.now();
    if (cachedData && (now - cacheTimestamp) < CACHE_DURATION) {
        return cachedData;
    }

    const apiKey = getApiKey();

    // If no API key, return fallback data
    if (!apiKey) {
        return fallbackData;
    }

    try {
        // Fetch data from multiple endpoints in parallel
        const [trendingData, nseActiveData] = await Promise.all([
            fetchTrendingStocks(),
            fetchNSEMostActive(),
        ]);

        const stocks: StockTickerItem[] = [];

        // Add top gainers
        if (trendingData?.trending_stocks?.top_gainers) {
            const gainers = trendingData.trending_stocks.top_gainers
                .slice(0, 3)
                .map(transformTrendingStock);
            stocks.push(...gainers);
        }

        // Add top losers
        if (trendingData?.trending_stocks?.top_losers) {
            const losers = trendingData.trending_stocks.top_losers
                .slice(0, 3)
                .map(transformTrendingStock);
            stocks.push(...losers);
        }

        // Add NSE most active
        if (nseActiveData && Array.isArray(nseActiveData)) {
            const active = nseActiveData
                .slice(0, 4)
                .map(transformMostActiveStock);
            stocks.push(...active);
        }

        // If we got data, cache and return it
        if (stocks.length > 0) {
            // Remove duplicates based on symbol
            const uniqueStocks = stocks.filter((stock, index, self) =>
                index === self.findIndex(s => s.symbol === stock.symbol)
            );

            cachedData = uniqueStocks;
            cacheTimestamp = now;
            return uniqueStocks;
        }

        // If no data from API, return fallback
        return fallbackData;
    } catch (error) {
        console.error('Error fetching market data:', error);
        return fallbackData;
    }
}

/**
 * Clear the cache (useful for forcing a refresh)
 */
export function clearMarketDataCache(): void {
    cachedData = null;
    cacheTimestamp = 0;
}
