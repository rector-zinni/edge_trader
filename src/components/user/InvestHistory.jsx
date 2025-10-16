import React from "react";

const InvestHistory = () => {
  // Example data (you can replace with API data later)
  const investments = []; // Empty means "No Data Found!"

  return (
    <section className="transaction-history mt-5 pt-5">
      <div className="container-fluid">
        {/* Header */}
        <div className="row">
          <div className="col">
            <div className="header-text-full">
              <h2>Invest History</h2>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="row">
          <div className="col">
            <div className="table-parent table-responsive">
              <table className="table table-striped mb-5" style={{ color: "#fff" }}>
                <thead style={{ color: "#fff" }}>
                  <tr>
                    <th scope="col" style={{ color: "#fff" }}>SL</th>
                    <th scope="col" style={{ color: "#fff" }}>Plan</th>
                    <th scope="col" style={{ color: "#fff" }}>Return Interest</th>
                    <th scope="col" style={{ color: "#fff" }}>Received Amount</th>
                    <th scope="col" style={{ color: "#fff" }}>Upcoming Payment</th>
                  </tr>
                </thead>
                <tbody>
                  {investments.length > 0 ? (
                    investments.map((item, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{item.plan}</td>
                        <td>{item.returnInterest}</td>
                        <td>{item.receivedAmount}</td>
                        <td>{item.upcomingPayment}</td>
                      </tr>
                    ))
                  ) : (
                    <tr className="text-center">
                      <td colSpan="100%">No Data Found!</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestHistory;
