import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Transaction.css"; // optional for theme customization

const Transaction = () => {
  return (
    <section className="transaction-section py-5">
      <div className="container-fluid">
        {/* Header */}
        <div className="row mb-4">
          <div className="col">
            <h2 className="text-white fw-bold">Transaction</h2>
          </div>
        </div>

        {/* Search Filters */}
        <div className="row g-3 mb-4 " style={{ backgroundColor: "rgba(0, 0, 0, 0.2)",padding:"15px " }}>
          <div className="col-lg-3 col-md-6">
            <input
              type="text"
              className="form-control  text-white border-1"
              placeholder="Search for Transaction ID"
            />
          </div>
          <div className="col-lg-3 col-md-6">
            <input
              type="text"
              className="form-control  text-white border-1"
              placeholder="Remark"
            />
          </div>
          <label className="col-lg-3 col-md-6  border-1" for="star">
            <input
              type="date"
              id="star"
              className="form-control  text-white border-1"
            />
          </label>
          <div className="col-lg-3 col-md-6">
            <button className="btn w-100 fw-bold search-btn">SEARCH</button>
          </div>
        </div>

        {/* Table */}
        <div className="table-responsive">
          <table className="table table-striped text-center align-middle mb-0">
            <thead>
              <tr className="table-header">
                <th scope="col">SL No.</th>
                <th scope="col">Transaction ID</th>
                <th scope="col">Amount</th>
                <th scope="col">Remarks</th>
                <th scope="col">Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td colSpan="5" className="py-4 text-secondary">
                  No Data Found!
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Transaction;
