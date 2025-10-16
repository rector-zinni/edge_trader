import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const ConfirmFunds = () => {
  return (
    <section
      className="confirm-funds min-vh-100 d-flex align-items-center justify-content-center"
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
              <h3 className="text-center mb-4 fw-bold text-white">
                Pay with Bitcoin Wallet (BTC)
              </h3>

              {/* Instruction Box */}
              <div
                className="p-4 mb-4"
                style={{
                  backgroundColor: "#12093f",
                  borderRadius: "8px",
                }}
              >
                <h5
                  className="text-warning fw-bold mb-3"
                  style={{ fontSize: "1.1rem" }}
                >
                  Please follow the instruction below
                </h5>
                <p className="text-white mb-2">
                  You have requested to deposit{" "}
                  <span className="fw-bold text-warning">1000 USD</span>. Please
                  pay <span className="fw-bold text-warning">0.01004 BTC</span>{" "}
                  for successful payment.
                </p>
                <p
                  className="bg-warning text-dark px-2 py-1 d-inline-block rounded small fw-semibold"
                  style={{ fontSize: "0.9rem" }}
                >
                  Pay to Bitcoin Address OR QR Code
                </p>

                {/* Bitcoin Address */}
                <div
                  className="mt-2 p-3 text-center"
                  style={{
                    backgroundColor: "#0b0533",
                    border: "1px solid #ff6b00",
                    borderRadius: "6px",
                    color: "#fff",
                    wordBreak: "break-all",
                  }}
                >
                  bc1q3apgzlt2c7x4tmnc36ypmvqvm0v23ak6s6txh
                </div>

                {/* QR Placeholder (optional) */}
                {/* <div className="text-center mt-3">
                  <img
                    src="https://via.placeholder.com/120"
                    alt="QR Code"
                    className="img-fluid"
                  />
                </div> */}
              </div>

              {/* Confirm Button */}
              <div className="text-center">
                <button
                  className="btn w-100 fw-bold"
                  style={{
                    backgroundColor: "#ff6b00",
                    color: "#fff",
                    borderRadius: "6px",
                    padding: "12px 0",
                  }}
                >
                  Confirm Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConfirmFunds;
