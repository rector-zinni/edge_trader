/* global TradingView */
import { useEffect, useState } from "react";
import ChartInformation from "./ChartInfo";
import { useUser } from "../../context/userContext";
import { supabase } from "../../backend engine/superbaseClinet";

const UserDashboard = () => {
  const { user } = useUser(); // get logged-in user
  const [userData, setUserData] = useState({
    balance: 0,
    profit: 0,
    deposit: 0,
    totalEarn: 0,
    totalInvest: 0,
    totalPayout: 0,
    referralEarn: 0,
    totalTicket: 0,
    lastReferralBonus: 0,
    referralCode: "",
  });

  useEffect(() => {
    if (!user) return;

    const fetchUserData = async () => {
      try {
        const userId = user.id;

        // 1️⃣ Fetch user info
        const { data: userInfo } = await supabase
          .from("users")
          .select("balance, interest_balance, referral_code")
          .eq("id", userId)
          .single();

        // 2️⃣ Fetch deposits
        const { data: deposits } = await supabase
          .from("transactions")
          .select("amount")
          .eq("user_id", userId)
          .eq("type", "deposit")
          .eq("remark", "success");

        const totalDeposit =
          deposits?.reduce((sum, t) => sum + Number(t.amount), 0) || 0;

        // 3️⃣ Fetch investments
        const { data: investments } = await supabase
          .from("investments")
          .select("amount_invested, expected_return")
          .eq("user_id", userId)
          .eq("status", "active");

        const totalInvest =
          investments?.reduce((sum, inv) => sum + Number(inv.amount_invested), 0) || 0;
        const totalProfit =
          investments?.reduce((sum, inv) => sum + Number(inv.expected_return), 0) || 0;

        // 4️⃣ Fetch payouts
        const { data: payouts } = await supabase
          .from("payouts")
          .select("amount")
          .eq("user_id", userId)
          .eq("status", "approved");

        const totalPayout =
          payouts?.reduce((sum, p) => sum + Number(p.amount), 0) || 0;

        // 5️⃣ Fetch referral bonuses
        const { data: referrals } = await supabase
          .from("referrals")
          .select("bonus_amount, created_at")
          .eq("referrer_id", userId)
          .eq("status", "approved")
          .order("created_at", { ascending: false });

        const totalReferralEarn =
          referrals?.reduce((sum, r) => sum + Number(r.bonus_amount), 0) || 0;
        const lastReferralBonus = referrals?.[0]?.bonus_amount || 0;

        // 6️⃣ Set state
        setUserData({
          balance: userInfo?.balance || 0,
          profit: totalProfit,
          deposit: totalDeposit,
          totalEarn: (userInfo?.interest_balance || 0) + totalProfit + totalReferralEarn,
          totalInvest: totalInvest,
          totalPayout: totalPayout,
          referralEarn: totalReferralEarn,
          totalTicket: 0,
          lastReferralBonus,
          referralCode: userInfo?.referral_code || "",
        });
      } catch (error) {
        console.error("Error fetching dashboard data:", error);
      }
    };

    fetchUserData();
  }, [user]);

  useEffect(() => {
    // Prevent duplicate scripts
    if (document.getElementById("tv-script")) return;

    // TradingView Technical Analysis Widget
    const script1 = document.createElement("script");
    script1.id = "tv-script";
    script1.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js";
    script1.async = true;
    script1.innerHTML = JSON.stringify({
      interval: "1m",
      width: "100%",
      isTransparent: false,
      height: 400,
      symbol: "COINBASE:BTCUSD",
      showIntervalTabs: true,
      locale: "en",
      colorTheme: "dark",
    });

    const widgetContainer = document.querySelector(
      ".tradingview-widget-container .tradingview-widget-container__widget"
    );
    if (widgetContainer) widgetContainer.appendChild(script1);

    // TradingView Main Chart
    const script2 = document.createElement("script");
    script2.src = "https://s3.tradingview.com/tv.js";
    script2.async = true;
    script2.onload = () => {
      new TradingView.widget({
        width: "100%",
        height: 550,
        symbol: "COINBASE:BTCUSD",
        interval: "1",
        timezone: "Etc/UTC",
        theme: "dark",
        style: "9",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: true,
        calendar: false,
        studies: ["BB@tv-basicstudies"],
        container_id: "tradingview_f933e",
      });
    };
    document.body.appendChild(script2);

    return () => {
      document.body.removeChild(script2);
    };
  }, []);

  const copyLink = () => {
    const input = document.getElementById("sponsorURL");
    input.select();
    navigator.clipboard.writeText(input.value);
    alert("Referral link copied!");
  };

  // Primary boxes
  const boxes = [
    { title: "Balance", value: userData.balance, icon: "far fa-funnel-dollar" },
    { title: "Profit", value: userData.profit, icon: "far fa-percent", box: "box-2" },
    { title: "Deposit", value: userData.deposit, icon: "fal fa-box-usd", box: "box-3" },
    { title: "Total Earn", value: userData.totalEarn, icon: "far fa-badge-dollar", box: "box-4" },
  ];

  const boxes2 = [
    { title: "Total Invest", value: userData.totalInvest, icon: "far fa-search-dollar" },
    { title: "Total Payout", value: userData.totalPayout, icon: "fal fa-usd-circle", box: "box-2" },
    { title: "Referral Earn", value: userData.referralEarn, icon: "fal fa-lightbulb-dollar", box: "box-4" },
    { title: "Total Ticket", value: userData.totalTicket, icon: "fal fa-ticket", box: "box-3" },
  ];

  return (
    <div className="container-fluid">
      <div className="col-12">
        {/* TradingView Technical Analysis Widget */}
        <div className="row g-4 mb-4 main">
          <div className="tradingview-widget-container">
            <div className="tradingview-widget-container__widget"></div>
            <div className="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/symbols/BTCUSD/technicals/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <span className="blue-text">Technical Analysis for BTCUSD</span>
              </a>{" "}
              by TradingView
            </div>
          </div>

          {boxes.map((box, i) => (
            <div key={i} className="col-xl-3 col-md-6">
              <div className={`dashboard-box ${box.box || ""}`}>
                <h5>{box.title}</h5>
                <h3>
                  <small>
                    <sup>$</sup>
                  </small>
                  {parseFloat(box.value).toFixed(2)}
                </h3>
                <i className={box.icon}></i>
              </div>
            </div>
          ))}
        </div>

        {/* Secondary Boxes */}
        <div className="row g-4 mb-4">
          {boxes2.map((box, i) => (
            <div key={i} className="col-xl-3 col-md-6">
              <div className={`dashboard-box ${box.box || ""}`}>
                <h5>{box.title}</h5>
                <h3>
                  <small>
                    <sup>$</sup>
                  </small>
                  {parseFloat(box.value).toFixed(2)}
                </h3>
                <i className={box.icon}></i>
              </div>
            </div>
          ))}
        </div>

        {/* Chart Information */}
        <ChartInformation />

        {/* Referral Section */}
        <div className="row g-4 mb-4">
          <div className="col-xl-3 col-md-6">
            <div className="dashboard-box box-2">
              <h5>The Last Referral Bonus</h5>
              <h3>
                <small>
                  <sup>$</sup>
                </small>
                {parseFloat(userData.lastReferralBonus).toFixed(2)}
              </h3>
              <i className="fal fa-box-open"></i>
            </div>
          </div>

          <div className="col-xl-9 col-md-12">
            <div className="dashboard-box">
              <h5>Referral Link</h5>
              <div className="input-group mb-3 ">
                <input
                  type="text"
                  className="form-control copy__referal__input"
                  value={`https://edgetrader.com/register/${userData.referralCode || "user"}`}
                  id="sponsorURL"
                  readOnly
                />
                <button
                  className=" btn-custom copy__referal__btn copytext"
                  onClick={copyLink}
                >
                  Copy link
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Personal Trading Chart */}
        <div className="row">
          <div className="pt-1 col-12">
            <h3>Personal Trading Chart</h3>
            <div
              className="tradingview-widget-container"
              style={{ margin: "30px 0px 10px 0px" }}
            >
              <div id="tradingview_f933e"></div>
              <div className="tradingview-widget-copyright">
                <a href="#" rel="noopener noreferrer" target="_blank">
                  <span className="blue-text">Personal trading chart</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Forex Data Widget */}
        <div className="white-box" style={{ height: "450px", width: "100%" }}>
          <h4 style={{ marginBottom: "5px" }}>Forex Market Fundamental Data</h4>
          <iframe
            title="forex-widget"
            scrolling="no"
            allowTransparency={true}
            style={{ display: "block", height: "calc(100% - 32px)", width: "100%" }}
            src="https://s.tradingview.com/embed-widget/forex-cross-rates/?locale=en#%7B%22currencies%22%3A%5B%22EUR%22%2C%22USD%22%2C%22JPY%22%2C%22BTC%22%2C%22ETH%22%2C%22LTC%22%2C%22GBP%22%2C%22CHF%22%2C%22AUD%22%2C%22CAD%22%2C%22NZD%22%2C%22CNY%22%5D%2C%22isTransparent%22%3Afalse%2C%22colorTheme%22%3A%22dark%22%2C%22width%22%3A%22100%25%22%2C%22height%22%3A%22100%25%22%7D"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default UserDashboard;
