import React, { useState, useEffect } from "react";

export default function EarningsPopup() {
  const countries = [
    "Argentina", "USA", "Germany", "France", "Italy", "South Korea",
    "Australia", "Norway", "Canada", "Saudi Arabia", "Mexico", "Spain",
    "Austria", "Venezuela", "South Africa", "Sweden", "China", "United Kingdom",
    "Bahrain", "Greece", "Cuba", "Bulgaria", "Portugal", "Cyprus", "Panama",
    "Netherlands", "Switzerland", "Belgium", "Israel"
  ];

  const plans = [
    "$2000", "$1000", "$50000", "$15000", "$10000", "$100000",
    "$20000", "$1500", "$30000", "$40000", "$1200", "$60000",
    "$3400", "$7000", "$25000", "$35000", "$5000", "$45000",
    "$3500", "$12500", "$9500"
  ];

  const [visible, setVisible] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    let timer;

    const showRandomPopup = () => {
      const country = countries[Math.floor(Math.random() * countries.length)];
      const plan = plans[Math.floor(Math.random() * plans.length)];
      setMessage(
        `Someone from <b>${country}</b> just earned <a href="javascript:void(0);">${plan}</a>.`
      );
      setVisible(true);

      // Hide after 6 seconds
      timer = setTimeout(() => setVisible(false), 6000);

      // Schedule next popup randomly between 8s and 40s
      const nextInterval = Math.floor(Math.random() * (40000 - 8000 + 1) + 8000);
      setTimeout(showRandomPopup, nextInterval);
    };

    showRandomPopup();

    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="mgm"
      style={{
        display: visible ? "block" : "none",
        borderRadius: "7px",
        position: "fixed",
        zIndex: 90,
        bottom: "80px",
        right: "50px",
        background: "#FFFFFF",
        padding: "20px 27px",
        boxShadow: "0px 5px 13px rgba(0,0,0,0.3)",
      }}
    >
      <div
        className="txt"
        style={{ color: "black" }}
        dangerouslySetInnerHTML={{ __html: message }}
      />
    </div>
  );
}
