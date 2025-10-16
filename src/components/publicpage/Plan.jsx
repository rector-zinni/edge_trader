import BannerSection from "./Banner";
import Header from "./Header";
import EarningsPopup from './EarningPopUp'
import Footer from './Footer'
import TradingViewWidget from "../widget/MarketOverviewWidget";
import ForexCrossWidget from "../widget/ForexCrossWidget";
import { useState } from "react";

const Plan = () => {
    const [activeTab, setActiveTab] = useState("deposit");
    return ( 
        <div>
            <Header/>

            <>
                <BannerSection title="Plan" />
            </>

            <section className="pricing-section">
  <div className="container">
    <div className="row">
      <div className="col-12">
        <div className="header-text text-center">
          <h5>
            Unlock Profit Potential through Smart Cryptocurrency Investments
          </h5>
          <h2>Invest with Confidence on edge trader Tips</h2>
          <p>
            <b>
              Our platform provides a secure and user-friendly environment for
              individuals to invest in a diverse range of cryptocurrencies, with
              the aim of maximizing profit potential
            </b>
            .
            <span>
              <br />
            </span>
          </p>
        </div>
      </div>
    </div>
    <div className="row g-4 g-lg-5 justify-content-center">
      <div className="col-lg-4 col-md-6">
        <div
          className="pricing-box"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <h4 className="text-capitalize">Growth Plan</h4>
          <h2>$200 - $500</h2>
          <h5>
            800% <small className="small-font">Every Week</small>
          </h5>
          <ul>
            <li>
              <i className="far fa-chevron-double-right" /> Profit For Every
              Week
              <span className="badge">Yes</span>
            </li>
            <li>
              <i className="far fa-chevron-double-right" /> Capital will back{" "}
              <small>
                <span className="badge">Yes</span>
              </small>
            </li>
            <li>
              <i className="far fa-chevron-double-right" /> 1600 % +
              <span className="badge">Capital</span>
            </li>
          </ul>
          <button
            type="button"
            className="btn-custom investNow"
            data-price="$200 - $500"
            data-resource='{"id":1,"name":"Growth Plan","badge":"Popular","minimum_amount":"200","maximum_amount":"500","fixed_amount":"0","profit":"800.00","profit_type":1,"schedule":168,"status":1,"is_capital_back":1,"is_lifetime":0,"repeatable":2,"featured":1,"created_at":"2023-04-05T15:55:16.000000Z","updated_at":"2023-05-20T22:45:24.000000Z","price":"$200 - $500"}'
          >
            Invest Now{" "}
          </button>
          <span className="feature text-capitalize">Popular</span>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="pricing-box"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <h4 className="text-capitalize">ADVANCED PLAN</h4>
          <h2>$750</h2>
          <h5>
            <small>
              <sup>$</sup>
            </small>
            7230
            <small className="small-font">Every Day</small>
          </h5>
          <ul>
            <li>
              <i className="far fa-chevron-double-right" /> Profit For Lifetime
              <span className="badge">Yes</span>
            </li>
            <li>
              <i className="far fa-chevron-double-right" /> Capital will back{" "}
              <small>
                <span className="badge">Yes</span>
              </small>
            </li>
            <li>
              <span className="badge">Lifetime Earning</span>
            </li>
          </ul>
          <button
            type="button"
            className="btn-custom investNow"
            data-price="$750"
            data-resource='{"id":2,"name":"ADVANCED PLAN","badge":"Prenium","minimum_amount":"","maximum_amount":"","fixed_amount":"750","profit":"7230.00","profit_type":0,"schedule":24,"status":1,"is_capital_back":1,"is_lifetime":1,"repeatable":1,"featured":1,"created_at":"2023-05-20T22:44:28.000000Z","updated_at":"2023-05-20T22:44:28.000000Z","price":"$750"}'
          >
            Invest Now{" "}
          </button>
          <span className="feature text-capitalize">Prenium</span>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="pricing-box"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <h4 className="text-capitalize">MAJOR PLAN</h4>
          <h2>$1000 - $5000</h2>
          <h5>
            80% <small className="small-font">Every Week</small>
          </h5>
          <ul>
            <li>
              <i className="far fa-chevron-double-right" /> Profit For Lifetime
              <span className="badge">Yes</span>
            </li>
            <li>
              <i className="far fa-chevron-double-right" /> Capital will back{" "}
              <small>
                <span className="badge">Yes</span>
              </small>
            </li>
            <li>
              <span className="badge">Lifetime Earning</span>
            </li>
          </ul>
          <button
            type="button"
            className="btn-custom investNow"
            data-price="$1000 - $5000"
            data-resource='{"id":3,"name":"MAJOR PLAN","badge":"Gold","minimum_amount":"1000","maximum_amount":"5000","fixed_amount":"0","profit":"80.00","profit_type":1,"schedule":168,"status":1,"is_capital_back":1,"is_lifetime":1,"repeatable":3,"featured":1,"created_at":"2023-05-20T22:47:05.000000Z","updated_at":"2023-05-20T22:47:05.000000Z","price":"$1000 - $5000"}'
          >
            Invest Now{" "}
          </button>
          <span className="feature text-capitalize">Gold</span>
        </div>
      </div>
    </div>
    {/* Modal */}
    <div
      className="modal fade addFundModal"
      id="investNowModal"
      tabIndex={-1}
      aria-labelledby="planModalLabel"
      aria-hidden="true"
      data-bs-backdrop="static"
    >
      <div className="modal-dialog modal-dialog-centered modal-md">
        <form
          action="https://optimizetradingtips.com/user/purchase-plan"
          method="post"
          id="invest-form"
          className="login-form"
        >
          <input
            type="hidden"
            name="_token"
            defaultValue="zbk5zHooMa0Kmwaz2YrGDhQaq4ghkmus1oPNKyu9"
          />{" "}
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="planModalLabel">
                Invest Now
              </h4>
              <button
                type="button"
                className="close-btn"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <i className="fal fa-times" />
              </button>
            </div>
            <div className="modal-body">
              <h2 className="title text-center plan-name" />
              <p className="text-center price-range font-20" />
              <p className="text-center profit-details font-18" />
              <p className="text-center profit-validity pb-3 font-18" />
              <div className="row g-4">
                <div className="input-box col-12">
                  <h6 className="mb-2 golden-text d-block modal_text_level">
                    Select wallet
                  </h6>
                  <select className="form-select" name="balance_type">
                    <option value="checkout">Checkout</option>
                  </select>
                </div>
                <div className="input-box col-12">
                  <h6 className="mb-2 golden-text d-block modal_text_level">
                    Amount
                  </h6>
                  <div className="input-group mb-3">
                    <input
                      type="text"
                      className="invest-amount form-control"
                      name="amount"
                      id="amount"
                      defaultValue=""
                      onkeyup="this.value = this.value.replace (/^\.|[^\d\.]/g, '')"
                      autoComplete="off"
                      placeholder="Enter amount"
                      required=""
                    />
                    <button
                      className="gold-btn show-currency input-group-text btn-custom-2"
                      id="basic-addon2"
                      type="button"
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <input type="hidden" name="plan_id" className="plan-id" />
              <button type="submit" className="btn-custom">
                Invest Now
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>


        <section className="why-choose-us">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="header-text text-center">
                <h5>Why Choose edge trader Tips?</h5>
                <h2>The Best Choice for Your Cryptocurrency Investments</h2>
                <p>
                  <b>
                    When it comes to investing in cryptocurrencies, choosing the
                    right platform is crucial to your success. edge trader
                    Tips stands out as the ideal choice for all cryptocurrency
                    enthusiasts and investors. With our cutting-edge technology,
                    extensive market knowledge, and commitment to user
                    satisfaction, we offer an unparalleled investment
                    experience.
                  </b>
                </p>
              </div>
            </div>
          </div>
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-anchor-placement="center-bottom"
              >
                <div className="icon-box">
                  <img
                    src="assets/uploads/content/63ac1031952101672220721.png"
                    alt="why-choose-us image"
                  />
                </div>
                <div className="text-box">
                  <h4>Expert Management</h4>
                  <p>
                    <br />{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-anchor-placement="center-bottom"
              >
                <div className="icon-box">
                  <img
                    src="assets/uploads/content/63ac103b79dad1672220731.png"
                    alt="why-choose-us image"
                  />
                </div>
                <div className="text-box">
                  <h4>Registered Company</h4>
                  <p>
                    <br />{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-anchor-placement="center-bottom"
              >
                <div className="icon-box">
                  <img
                    src="assets/uploads/content/63ac1043c78011672220739.png"
                    alt="why-choose-us image"
                  />
                </div>
                <div className="text-box">
                  <h4>Secure Investment</h4>
                  <p>
                    <br />{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-anchor-placement="center-bottom"
              >
                <div className="icon-box">
                  <img
                    src="assets/uploads/content/63ac104f998a11672220751.png"
                    alt="why-choose-us image"
                  />
                </div>
                <div className="text-box">
                  <h4>Verified Security</h4>
                  <p>
                    <br />{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-anchor-placement="center-bottom"
              >
                <div className="icon-box">
                  <img
                    src="assets/uploads/content/63ac10576a5051672220759.png"
                    alt="why-choose-us image"
                  />
                </div>
                <div className="text-box">
                  <h4>Instant Withdrawal</h4>
                  <p>
                    <br />{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div
                className="box"
                data-aos="fade-up"
                data-aos-duration={1000}
                data-aos-anchor-placement="center-bottom"
              >
                <div className="icon-box">
                  <img
                    src="assets/uploads/content/63ac1060947cf1672220768.png"
                    alt="why-choose-us image"
                  />
                </div>
                <div className="text-box">
                  <h4>Registered Company</h4>
                  <p>
                    <br />{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <>
        {/* TradingView Widget BEGIN */}
        <TradingViewWidget />
        {/* TradingView Widget END */}
      </>

      <>
        {/* TradingView Widget BEGIN */}
        <ForexCrossWidget />
        {/* TradingView Widget END */}
      </>

      
 <section className="deposit-withdraw-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="header-text">
              <h5>***NO HIDDEN CHARGE***</h5>
              <h2>Last Deposits & Withdrawals</h2>
              <p>Our Latest Traders Deposit and withdrawal</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <div className="deposit-switcher">
              <button
                className={`tab ${activeTab === "deposit" ? "active" : ""}`}
                onClick={() => setActiveTab("deposit")}
              >
                Deposit
              </button>
              <button
                className={`tab ${activeTab === "withdraw" ? "active" : ""}`}
                onClick={() => setActiveTab("withdraw")}
              >
                Withdraw
              </button>
            </div>

            {/* Deposit Table */}
            {activeTab === "deposit" && (
              <div className="content active">
                <div className="table-parent table-responsive">
                  <table className="table ">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Gateway</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Salma Ahmed</td>
                        <td>$500</td>
                        <td>
                          <span className="currency">
                            <img
                              src="assets/uploads/gateway/67da9314392c91742377748.webp"
                              alt=""
                            />
                            Tether USDT
                          </span>
                        </td>
                        <td>06 Aug, 2025 10:40 AM</td>
                      </tr>
                      <tr>
                        <td>Julio Mendoza</td>
                        <td>$1200</td>
                        <td>
                          <span className="currency">
                            <img
                              src="assets/uploads/gateway/6537ea51461561698163281.png"
                              alt=""
                            />
                            Bitcoin Wallet (BTC)
                          </span>
                        </td>
                        <td>05 Jul, 2025 07:10 AM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Withdraw Table */}
            {activeTab === "withdraw" && (
              <div className="content active">
                <div className="table-parent table-responsive">
                  <table className="table">
                    <thead>
                      <tr>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Gateway</th>
                        <th>Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Williams Rose</td>
                        <td>$90,000</td>
                        <td>Bitcoin</td>
                        <td>04 Jul, 2025 08:15 PM</td>
                      </tr>
                      <tr>
                        <td>Mary Greyson</td>
                        <td>$30,000</td>
                        <td>Bitcoin</td>
                        <td>03 Jul, 2025 03:12 PM</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* ===============================WITHDRAW MARQUEE ============================== */}
        <marquee width="100%" direction="up" height="30%">
          <div className="col-md-7 trade-option-1 table-responsive-sm">
            <h4>
              <img src="images/withdrawals.html" alt="" /> LATEST WITHDRAWALS
            </h4>
            <table className="table" style={{ color: "#fff" }}>
              <thead className="t-color-1">
                <tr>
                  <th>Gateway</th>
                  <th>Name</th>
                  <th>Amount</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="gold">Bitcoin</td>
                  <td>Wiiliams Rose</td>
                  <td className="gold">$90,000</td>
                </tr>
                <tr>
                  <td className="gold">Bank Transfer</td>
                  <td>Richard Melvin</td>
                  <td className="gold">$80,000</td>
                </tr>
              </tbody>
            </table>
          </div>
        </marquee>
      </div>
    </section>
    <section className="faq-section faq-page">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-lg-8">
        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h5 className="accordion-header " id="headingOne0">
              <button
                className="accordion-button "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne0"
                aria-expanded="true"
                aria-controls="collapseOne0"
              >
                What Does edge trader TIPS Represent?{" "}
              </button>
            </h5>
            <div
              id="collapseOne0"
              className="accordion-collapse collapse show"
              aria-labelledby="headingOne0"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <b>
                  <span>
                    edge trader TIPS provides numerous investment services,
                    professional financial advice with greatest opportunities
                    for their clients worldwide. edge trader TIPS
                  </span>
                  <span>
                    {" "}
                    is an independent legal entity and fully operational on its
                    own.
                  </span>
                </b>{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h5 className="accordion-header " id="headingOne1">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne1"
                aria-expanded="false"
                aria-controls="collapseOne1"
              >
                How Safe Is My Data And Personal Information?{" "}
              </button>
            </h5>
            <div
              id="collapseOne1"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne1"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <b>
                  <span>
                    We work hard to ensure safety of our members and do our best
                    to provide the most pleasant experience investing with our
                    company, this point is vitally important to us. A few
                    experts permanently keep a close watch on activity on our
                    networks and limit access to your data. All our servers are
                    highly equipped including DDoS protection handled by our
                    specialists. And, surely, SSL Security Certificates is a
                    mandatory, all come with strongest SSL Encryption available.
                  </span>
                </b>{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h5 className="accordion-header " id="headingOne2">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne2"
                aria-expanded="false"
                aria-controls="collapseOne2"
              >
                What Is The First Step To Start?{" "}
              </button>
            </h5>
            <div
              id="collapseOne2"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne2"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <b>
                  <span>
                    In order to start investing at CRYPTO PEDIA FX TRADE - you
                    need to create your own investment account. It is done very
                    easily, and is free. Please go to sign up to open an
                    account.
                  </span>
                </b>{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h5 className="accordion-header " id="headingOne3">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne3"
                aria-expanded="false"
                aria-controls="collapseOne3"
              >
                What Is A Trading Day?{" "}
              </button>
            </h5>
            <div
              id="collapseOne3"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne3"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <b>
                  <span>
                    Monday through Friday are considered as trading days.
                    National Holidays and weekends are not included.
                  </span>
                </b>{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h5 className="accordion-header " id="headingOne4">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne4"
                aria-expanded="false"
                aria-controls="collapseOne4"
              >
                How Long Does It Take To Fund My Balance After Payment?{" "}
              </button>
            </h5>
            <div
              id="collapseOne4"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne4"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  <b>
                    <span>
                      All deposits are reflected instantly, right after you make
                      a payment using your e-currency account. If you ever
                      notice any failure - please contact our support department
                      and one of our representatives will assist you
                      immediately.
                    </span>
                  </b>
                </p>{" "}
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h5 className="accordion-header " id="headingOne5">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne5"
                aria-expanded="false"
                aria-controls="collapseOne5"
              >
                After Requesting Withdrawal, How Long Does It Take To Receive?{" "}
              </button>
            </h5>
            <div
              id="collapseOne5"
              className="accordion-collapse collapse "
              aria-labelledby="headingOne5"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                <p>
                  <b>
                    <span>
                      All deposits are reflected instantly, right after you make
                      a payment using your e-currency account. If you ever
                      notice any failure - please contact our support department
                      and one of our representatives will assist you
                      immediately.
                    </span>
                    <br />
                  </b>
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

        <EarningsPopup/>
        <Footer/>

        </div>
     );
}
 
export default Plan;