import React, { useEffect, useRef } from "react";

const ForexCrossWidget = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // prevent re-injecting script if it already exists
    if (!containerRef.current.querySelector("script")) {
      const script = document.createElement("script");
      script.src =
        "https://s3.tradingview.com/external-embedding/embed-widget-forex-cross-rates.js";
      script.async = true;
      script.innerHTML = JSON.stringify({
        width: "100%",
        height: "500",
        colorTheme: "dark",
        currencies: [
          "EUR",
          "USD",
          "JPY",
          "GBP",
          "CHF",
          "AUD",
          "CAD",
          "NZD",
          "CNY",
        ],
        locale: "en",
      });
      containerRef.current.appendChild(script);
    }
  }, []);

  return (
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget">
       
      </div>
      <div class="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener" target="_blank">
          <span class="blue-text">Market Data</span>
        </a> by TradingView
      </div>
    </div>
  );
};

export default ForexCrossWidget;
