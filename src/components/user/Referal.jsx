import React, { useState } from "react";
import { useUser } from "../../context/userContext"; // adjust path if needed

const ReferralLink = () => {
  const { user } = useUser(); // get logged-in user
  const [copied, setCopied] = useState(false);

  if (!user) return null; // optional: hide until user is loaded

  const referralLink = `https://optimizetradingtips.com/register/${user.referral_code || "user"}`;

  const handleCopy = () => {
    navigator.clipboard.writeText(referralLink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // reset after 2s
  };

  return (
    <div className="dashboard-box p-4 text-white rounded-3 shadow-sm mt-4">
      <h5 className="mb-3 fw-bold text-warning">Referral Link</h5>

      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control bg-secondary text-white border-1"
          id="sponsorURL"
          value={referralLink}
          readOnly
        />
        <button
          className="btn btn-warning fw-semibold"
          type="button"
          onClick={handleCopy}
        >
          {copied ? "Copied!" : "Copy Link"}
        </button>
      </div>

      {copied && (
        <p className="text-success small mb-0">Referral link copied!</p>
      )}
    </div>
  );
};

export default ReferralLink;
