import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { supabase } from "../../backend engine/superbaseClinet"; // adjust path if needed
import "./Transaction.css";

const ReferalBonus = ({ user }) => {
  const [referrals, setReferrals] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    const fetchReferrals = async () => {
      setLoading(true);

      const { data, error } = await supabase
        .from("referrals")
        .select("id, referrer_id, referred_id, amount, created_at")
        .eq("referrer_id", user.id)
        .eq("status", "approved")
        .order("created_at", { ascending: false });

      if (error) {
        console.error("Error fetching referrals:", error);
      } else {
        setReferrals(data || []);
      }

      setLoading(false);
    };

    fetchReferrals();
  }, [user?.id]);

  return (
    <section className="Transaction-section py-5">
      <div className="container-fluid">
        {/* Header */}
        <div className="row mb-4">
          <div className="col">
            <h2 className="text-white fw-bold">Referral Bonus</h2>
          </div>
        </div>

        {/* Search Bar (static for now) */}
        <div
          className="row g-3 mb-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)", padding: "15px" }}
        >
          <div className="col-lg-3 col-md-6">
            <input
              type="text"
              className="form-control text-white border-1"
              placeholder="Search by referred ID"
              disabled
            />
          </div>

          <div className="col-lg-3 col-md-6">
            <button className="btn w-100 fw-bold search-btn" disabled>
              SEARCH
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-striped text-center align-middle mb-0">
            <thead>
              <tr className="table-header">
                <th scope="col">SL No.</th>
                <th scope="col">Referred User</th>
                <th scope="col">Amount</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr>
                  <td colSpan="4" className="py-4 text-secondary">
                    Loading...
                  </td>
                </tr>
              ) : referrals.length === 0 ? (
                <tr>
                  <td colSpan="4" className="py-4 text-secondary">
                    No Data Found!
                  </td>
                </tr>
              ) : (
                referrals.map((ref, index) => (
                  <tr key={ref.id}>
                    <td>{index + 1}</td>
                    <td>{ref.referred_id}</td>
                    <td>${ref.amount}</td>
                    <td>
                      {new Date(ref.created_at).toLocaleString("en-GB", {
                        dateStyle: "medium",
                        timeStyle: "short",
                      })}
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default ReferalBonus;
