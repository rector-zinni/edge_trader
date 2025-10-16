import React, { useEffect, useRef } from "react";

const TradingViewWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Cleanup before reloading widget
    container.innerHTML = `
      <div class="tradingview-widget-container__widget"></div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener" target="_blank">
          <span class="blue-text">Market Data</span>
        </a> by TradingView
      </div>
`;

    // Defer TradingView script to ensure the DOM exists
    setTimeout(() => {
      try {
        const script = document.createElement("script");
        script.type = "text/javascript";
        script.async = true;
        script.src =
          "https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js";
        script.innerHTML = JSON.stringify({
          colorTheme: "dark",
          dateRange: "12m",
          showChart: true,
          locale: "en",
          isTransparent: true,
          width: "100%",
          height: "500",
          tabs: [
            {
              title: "Indices",
              symbols: [
                { s: "OANDA:SPX500USD", d: "S&P 500" },
                { s: "OANDA:NAS100USD", d: "Nasdaq 100" },
              ],
            },
            {
              title: "Forex",
              symbols: [
                { s: "FX:EURUSD" },
                { s: "FX:GBPUSD" },
                { s: "FX:USDJPY" },
              ],
            },
          ],
        });
        container.querySelector(".tradingview-widget-container__widget")?.appendChild(script);
      } catch (err) {
        console.warn("TradingView widget load failed:", err);
      }
    }, 300); // short delay ensures DOM is ready

    // Silence cross-origin script errors
    window.onerror = (message) => {
      if (message === "Script error.") return true;
    };
  }, []);

  return <div className="tradingview-widget-container" ref={containerRef} />;
};

export default TradingViewWidget;
