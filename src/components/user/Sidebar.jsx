import { NavLink } from "react-router-dom";
import { useUser } from "../../context/userContext";
import { useEffect, useState } from "react";
import { supabase } from "../../backend engine/superbaseClinet";

const Sidebar = () => {
  const { user } = useUser();
  const [balances, setBalances] = useState({ main: 0, interest: 0 });

  // Fetch user's balances from Supabase
  useEffect(() => {
    const fetchBalances = async () => {
      if (!user) return;
      const { data, error } = await supabase
        .from("users")
        .select("balance, interest_balance")
        .eq("id", user.id)
        .single();

      if (!error && data) {
        setBalances({
          main: data.balance || 0,
          interest: data.interest_balance || 0,
        });
      }
    };

    fetchBalances();
  }, [user]);

  const toggleSidebar = () => {
    const sidebar = document.querySelector("#sidebar");
    const content = document.querySelector("#content");
    sidebar?.classList.toggle("active");
    content?.classList.toggle("active");
  };

  return (
    <div id="sidebar">
      {/* Top section */}
      <div className="sidebar-top">
        <NavLink className="navbar-brand" to="/">
          <img
            src="https://optimizetradingtips.com/assets/uploads/logo/logo.png"
            alt="OPTIMIZE TRADING TIP"
          />
        </NavLink>
        <button className="sidebar-toggler d-md-none" onClick={toggleSidebar}>
          <i className="fas fa-times" />
        </button>
      </div>

      {/* Wallet Info */}
      <div className="wallet-wrapper">
        <div className="wallet-box d-none d-lg-block">
          <h4>Account Balance</h4>
          <h5>
            Main Balance <span>${balances.main.toFixed(2)}</span>
          </h5>
          <h5 className="mb-0">
            Interest Balance <span>${balances.interest.toFixed(2)}</span>
          </h5>
          <span className="tag">USD</span>
        </div>

        <div className="d-flex justify-content-between mt-1">
          <NavLink className="btn-custom" to="addfund">
            <i className="fas fa-wallet" /> Deposit
          </NavLink>
          <NavLink className="btn-custom" to="plan">
            <i className="fas fa-usd-circle" /> Invest
          </NavLink>
        </div>
      </div>

      {/* Sidebar Links */}
      <ul className="main tabScroll">
        <li>
          <NavLink to="/" className="sidebar-link">
            <i className="fas fa-border-all" /> Dashboard
          </NavLink>
        </li>

        <li>
          <NavLink to="plan" className="sidebar-link">
            <i className="fas fa-layer-group" /> Plan
          </NavLink>
        </li>

        <li>
          <NavLink to="investhistory" className="sidebar-link">
            <i className="fas fa-file-medical-alt" /> Invest History
          </NavLink>
        </li>

        <li>
          <NavLink to="addfund" className="sidebar-link">
            <i className="fas fa-funnel-dollar" /> Add Fund
          </NavLink>
        </li>

        <li>
          <NavLink to="fundhistory" className="sidebar-link">
            <i className="fas fa-search-dollar" /> Fund History
          </NavLink>
        </li>

        <li>
          <NavLink to="transfer" className="sidebar-link">
            <i className="fas fa-money-check-alt" /> Transfer
          </NavLink>
        </li>

        <li>
          <NavLink to="transaction" className="sidebar-link">
            <i className="fas fa-sack-dollar" /> Transaction
          </NavLink>
        </li>

        <li>
          <NavLink to="payout" className="sidebar-link">
            <i className="fas fa-hand-holding-usd" /> Payout
          </NavLink>
        </li>

        <li>
          <NavLink to="payouthistory" className="sidebar-link">
            <i className="fas fa-badge-dollar" /> Payout History
          </NavLink>
        </li>

        <li>
          <NavLink to="referal" className="sidebar-link">
            <i className="fas fa-retweet-alt" /> My Referral
          </NavLink>
        </li>

        <li>
          <NavLink to="referalbonus" className="sidebar-link">
            <i className="fas fa-money-bill" /> Referral Bonus
          </NavLink>
        </li>

        <li>
          <NavLink to="profile" className="sidebar-link">
            <i className="fas fa-user" /> Profile Settings
          </NavLink>
        </li>

        <li>
          <NavLink to="ticket" className="sidebar-link">
            <i className="fas fa-user-headset" /> Support Ticket
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
