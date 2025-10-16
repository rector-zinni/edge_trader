import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Payout = () => {
  const payoutOptions = [
    { id: 1, img: "https://via.placeholder.com/150", label: "PAYOUT NOW" },
    { id: 2, img: "https://via.placeholder.com/150", label: "PAYOUT NOW" },
  ];

  const [selectedMethod, setSelectedMethod] = useState("Wire Transfer");

  return (
    <section className="py-5" style={{ backgroundColor: "#130f40", minHeight: "100vh" }}>
      <div className="container">
        <h2 className="text-white mb-2 fw-bold">Payout Money</h2>

        <div className="row g-4">
          {payoutOptions.map((option) => (
            <div key={option.id} className="col-12 col-sm-6 col-md-4 col-lg-3" >
              <div
                className="card text-center p-2 border-0 shadow-sm"
                style={{ backgroundColor: "#1a144d", borderRadius: "12px",margin:0 }}
              >
                <div
                  className="d-flex align-items-center justify-content-center bg-dark mb-3"
                  style={{
                    height: "180px",
                    borderRadius: "10px",
                    backgroundColor: "#2e257a",
                  }}
                >
                  <img
                    src={option.img}
                    alt={option.label}
                    className="img-fluid"
                    style={{ maxHeight: "100px" }}
                  />
                </div>
                <button
                  className="btn fw-bold text-white w-100"
                  style={{
                    backgroundColor: "#ff6600",
                    border: "none",
                    borderRadius: "5px",
                    padding: "10px",
                  }}
                  data-bs-toggle="modal"
                  data-bs-target="#payoutModal"
                  onClick={() => setSelectedMethod("Wire Transfer")}
                >
                  {option.label}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Payout Modal */}
      <div
        className="modal fade"
        id="payoutModal"
        tabIndex="-1"
        aria-labelledby="payoutModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div
            className="modal-content p-3"
            style={{ backgroundColor: "#1a144d", color: "white", borderRadius: "10px" }}
          >
            <div className="modal-header border-0">
              <h4 className="modal-title text-warning fw-bold">
                Payout By {selectedMethod}
              </h4>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <form>
              <div className="modal-body">
                <p className="text-white-50">
                  Transaction Limit: 10,000.00 - 2,000,000.00 $
                </p>
                <p className="text-white-50">Charge: 400.00 $ + 10.00 %</p>

                {/* Wallet select */}
                <div className="form-group my-3">
                  <h5 className="mb-2 text-warning">Select Wallet</h5>
                  <select
                    className="form-select bg-dark text-white border-secondary"
                    name="wallet_type"
                  >
                    <option value="balance">Deposit Balance - $100</option>
                    <option value="interest_balance">Interest Balance - $0</option>
                  </select>
                </div>

                {/* Amount */}
                <div className="form-group mb-3">
                  <h5 className="text-warning">Amount</h5>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-dark text-white border-secondary"
                      placeholder="Enter amount"
                      name="amount"
                    />
                    <button
                      className="btn fw-bold text-white"
                      type="button"
                      style={{ backgroundColor: "#ff6600" }}
                    >
                      USD
                    </button>
                  </div>
                  <p className="text-danger mt-2 small">
                    The amount field is required.
                  </p>
                </div>
              </div>

              <div className="modal-footer border-0">
                <button
                  type="submit"
                  className="btn fw-bold text-white"
                  style={{ backgroundColor: "#ff6600" }}
                >
                  Next
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Payout;
