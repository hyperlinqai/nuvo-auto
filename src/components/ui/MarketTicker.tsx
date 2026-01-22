import { memo, useMemo } from 'react';
import { useStockData } from '@/hooks/useStockData';
import { TrendingUp, TrendingDown } from 'lucide-react';

const MarketTicker = () => {
    const { stocks, isLoading } = useStockData(60000); // Refresh every minute

    // Duplicate stocks for seamless infinite scroll
    const displayStocks = useMemo(() => {
        if (stocks.length === 0) return [];
        // Triple the array for smooth infinite scrolling
        return [...stocks, ...stocks, ...stocks];
    }, [stocks]);

    // Format price with Indian locale
    const formatPrice = (price: number): string => {
        return new Intl.NumberFormat('en-IN', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2,
        }).format(price);
    };

    // Format percentage change
    const formatPercentChange = (change: number): string => {
        const sign = change >= 0 ? '+' : '';
        return `${sign}${change.toFixed(2)}%`;
    };

    if (isLoading && stocks.length === 0) {
        return (
            <div className="h-[32px] bg-gradient-to-r from-slate-900 to-slate-800 flex items-center justify-center">
                <div className="flex items-center gap-2 text-white/60 text-xs">
                    <div className="w-3 h-3 border-2 border-white/30 border-t-white/80 rounded-full animate-spin" />
                    <span>Loading market data...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="h-[32px] bg-gradient-to-r from-slate-900 to-slate-800 overflow-hidden relative">
            {/* Gradient fade edges */}
            <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-900 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-800 to-transparent z-10 pointer-events-none" />

            {/* Scrolling ticker container */}
            <div className="ticker-scroll flex items-center h-full whitespace-nowrap">
                {displayStocks.map((stock, index) => (
                    <div
                        key={`${stock.symbol}-${index}`}
                        className="inline-flex items-center gap-2 px-4 border-r border-white/10"
                    >
                        {/* Stock symbol/name */}
                        <span className="text-white/90 text-xs font-semibold tracking-wide">
                            {stock.symbol}
                        </span>

                        {/* Price */}
                        <span className="text-white text-xs font-medium">
                            ₹{formatPrice(stock.price)}
                        </span>

                        {/* Change indicator */}
                        <span
                            className={`flex items-center gap-0.5 text-xs font-medium ${stock.isPositive ? 'text-emerald-400' : 'text-red-400'
                                }`}
                        >
                            {stock.isPositive ? (
                                <TrendingUp className="w-3 h-3" />
                            ) : (
                                <TrendingDown className="w-3 h-3" />
                            )}
                            {formatPercentChange(stock.percentChange)}
                        </span>
                    </div>
                ))}
            </div>

            {/* CSS Animation */}
            <style>{`
        @keyframes ticker-scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        
        .ticker-scroll {
          animation: ticker-scroll 30s linear infinite;
        }
        
        .ticker-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
};

export default memo(MarketTicker);
