import { useState, useEffect, useCallback } from 'react';
import { getMarketTickerData, clearMarketDataCache } from '@/lib/stockApi';
import type { StockTickerItem } from '@/types/stockTypes';

interface UseStockDataResult {
    stocks: StockTickerItem[];
    isLoading: boolean;
    error: string | null;
    lastUpdated: Date | null;
    refresh: () => void;
}

/**
 * Custom hook for fetching and managing stock market data
 * @param refreshInterval - Interval in milliseconds to refresh data (default: 60000ms = 1 minute)
 */
export function useStockData(refreshInterval: number = 60000): UseStockDataResult {
    const [stocks, setStocks] = useState<StockTickerItem[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

    const fetchData = useCallback(async () => {
        try {
            setError(null);
            const data = await getMarketTickerData();
            setStocks(data);
            setLastUpdated(new Date());
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Failed to fetch stock data');
        } finally {
            setIsLoading(false);
        }
    }, []);

    const refresh = useCallback(() => {
        clearMarketDataCache();
        setIsLoading(true);
        fetchData();
    }, [fetchData]);

    useEffect(() => {
        // Initial fetch
        fetchData();

        // Set up interval for auto-refresh
        const intervalId = setInterval(fetchData, refreshInterval);

        return () => {
            clearInterval(intervalId);
        };
    }, [fetchData, refreshInterval]);

    return {
        stocks,
        isLoading,
        error,
        lastUpdated,
        refresh,
    };
}
