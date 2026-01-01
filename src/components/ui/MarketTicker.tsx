import { useEffect, useRef, memo } from 'react';

const MarketTicker = () => {
    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!container.current) return;

        // Check if script already exists to prevent duplicates
        if (container.current.querySelector('script')) return;

        const script = document.createElement("script");
        script.src = "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
        script.type = "text/javascript";
        script.async = true;
        script.innerHTML = JSON.stringify({
            "symbols": [
                {
                    "description": "Nifty 50",
                    "proName": "NSE:NIFTY"
                },
                {
                    "description": "Sensex",
                    "proName": "BSE:SENSEX"
                },
                {
                    "description": "S&P 500",
                    "proName": "OANDA:SPX500USD"
                },
                {
                    "description": "Nasdaq 100",
                    "proName": "OANDA:NAS100USD"
                },
                {
                    "description": "FTSE 100",
                    "proName": "OANDA:UK100GBP"
                },
                {
                    "description": "Nikkei 225",
                    "proName": "OANDA:JP225USD"
                },
                {
                    "description": "Gold",
                    "proName": "TVC:GOLD"
                },
                {
                    "description": "USD/INR",
                    "proName": "FX_IDC:USDINR"
                }
            ],
            "showSymbolLogo": true,
            "colorTheme": "light",
            "isTransparent": false,
            "displayMode": "adaptive",
            "locale": "in"
        });
        container.current.appendChild(script);
    }, []);

    return (
        <div className="tradingview-widget-container h-[32px] overflow-hidden" ref={container}>
            <div className="tradingview-widget-container__widget"></div>
        </div>
    );
};

export default memo(MarketTicker);
