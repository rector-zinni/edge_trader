import React, { useState } from "react";

const AddFund = () => {
  // Example static data (you can replace with API data)
  const gateways = [
    {
      id: 1000,
      name: "Bitcoin Wallet (BTC)",
      currency: "BTC",
      gateway: "bank-transfer",
      minAmount: "20.00",
      maxAmount: "500,000.00",
      percentCharge: "0.20",
      fixCharge: "5.00",
      image: "https://sagestocks.cbu.net/assets/admin/images/default.png",
    },
  ];

  const [selectedGateway, setSelectedGateway] = useState(null);

  const handlePayNow = (gateway) => {
    setSelectedGateway(gateway);
    // Here you could trigger your modal or payment logic
    console.log("Selected Gateway:", gateway);
  };

  return (
    <section className="payment-gateway mt-5 pt-5">
      <div className="container-fluid ">
        {/* Header */}
        <div className="row ">
          <div className="col">
            <div className="header-text-full">
              <h2>Add Fund</h2>
            </div>
          </div>
        </div>

        {/* Gateway Boxes */}
        <div className="row">
          {gateways.map((gateway) => (
            <div
              key={gateway.id}
              className="col-lg-2 col-md-3 col-sm-6 mb-4"
            >
              <div className=" text-center">
                <img
                  className="img-fluid payment-gateway mb-3"
                  src={gateway.image}
                  alt={gateway.name}
                />
                <button
                  type="button"
                  className="btn-custom"
                  onClick={() => handlePayNow(gateway)}
                >
                  Pay Now
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Example Modal */}
        {selectedGateway && (
          <div
  id="addFundModal"
  className="modal fade addFundModal show "
  tabIndex={-1}
  role="dialog"
  data-bs-backdrop="static"
  aria-modal="true"
  style={{ display: "block",color:"#ffffffff" }}
>
  <div className="modal-dialog" role="document">
    <div className="modal-content form-block">
      <div className="modal-header">
        <h4 className="modal-title method-name text-white">
          Payment By Bitcoin Wallet (BTC) - BTC
        </h4>
        <button
          type="button"
          data-bs-dismiss="modal"
          className="btn-close"
          aria-label="Close"
          onClick={() => setSelectedGateway(null)}

        >
          <img
            src="https://sagestocks.cbu.net/assets/themes/deepblack/img/icon/cross.png"
            alt="modal dismiss"
          />
        </button>
      </div>
      <div className="modal-body ">
        <div className="payment-form ">
          <p className="text-white depositLimit lebelFont">
            Transaction Limit: 20.00 - 500,000.00 $
          </p>
          <p className="text-white depositCharge lebelFont">
            Charge: 5.00 $ + 0.20 %{" "}
          </p>
          <input
            type="hidden"
            className="gateway"
            name="gateway"
            defaultValue="BTC"
          />
          <div className="container-fluid mb-30 mt-3">
            <div className="">
              <h5 className="text-white">Amount</h5>
              <div className="input-group border-white">
                <input
                  type="text"
                  className="amount form-control border-white"
                  name="amount"
                />
                <button className="btn text-white border-white show-currency">USD</button>
              </div>
            </div>
            <pre className="text-danger errors" />
          </div>
        </div>
        <div className="payment-info text-center">
          <img
            id="loading"
            src="https://sagestocks.cbu.net/assets/admin/images/loading.gif"
            alt="loader"
            className="w-15"
            style={{ display: "none" }}
          />
        </div>
      </div>
      <div className="modal-footer border-top-0">
        <button type="button" className="btn btn-custom text-white">
          Next
        </button>
      </div>
    </div>
  </div>
</div>

        )}
      </div>
    </section>
  );
};

export default AddFund;
