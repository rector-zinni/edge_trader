import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Transfer = () => {
  const [formData, setFormData] = useState({
    email: "",
    amount: "",
    wallet: "",
    password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Transfer data:", formData);
  };

  return (
    <section
      className="transfer-section min-vh-100 d-flex align-items-center justify-content-center"
      style={{ backgroundColor: "#0e0739" }}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10 col-sm-12">
            <div
              className="card shadow-lg border-0 p-4"
              style={{
                backgroundColor: "#1b124b",
                borderRadius: "10px",
              }}
            >
              {/* Header */}
              <h3 className="text-white mb-4 fw-bold text-center">
                Balance Transfer
              </h3>

              {/* Form */}
              <form onSubmit={handleSubmit}>
                <div className="row mb-3">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label
                      className="form-label text-white"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Receiver Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      className="form-control text-white"
                      placeholder="Receiver Email Address"
                      value={formData.email}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#0b0533",
                        border: "none",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                  <div className="col-md-6">
                    <label
                      className="form-label text-white"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Amount
                    </label>
                    <input
                      type="text"
                      name="amount"
                      className="form-control text-white"
                      placeholder="Enter Amount"
                      value={formData.amount}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#0b0533",
                        border: "none",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                </div>

                <div className="row mb-4">
                  <div className="col-md-6 mb-3 mb-md-0">
                    <label
                      className="form-label text-white"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Select Wallet
                    </label>
                    <select
                      name="wallet"
                      className="form-select text-white"
                      value={formData.wallet}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#0b0533",
                        border: "none",
                        borderRadius: "6px",
                      }}
                    >
                      <option value="">Select Wallet</option>
                      <option value="main">Main Wallet</option>
                      <option value="interest">Interest Wallet</option>
                    </select>
                  </div>

                  <div className="col-md-6">
                    <label
                      className="form-label text-white"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Enter Password
                    </label>
                    <input
                      type="password"
                      name="password"
                      className="form-control text-white"
                      placeholder="Enter Password"
                      value={formData.password}
                      onChange={handleChange}
                      style={{
                        backgroundColor: "#0b0533",
                        border: "none",
                        borderRadius: "6px",
                      }}
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div className="text-start">
                  <button
                    type="submit"
                    className="btn fw-bold px-5 py-2"
                    style={{
                      backgroundColor: "#ff6b00",
                      color: "#fff",
                      borderRadius: "6px",
                    }}
                  >
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Transfer;
