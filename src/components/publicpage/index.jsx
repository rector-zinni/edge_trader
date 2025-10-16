import AOS from 'aos';
import {useEffect,useState} from 'react';  
import TradingViewWidget from '../widget/MarketOverviewWidget';
import ForexCrossWidget from '../widget/ForexCrossWidget';
import 'react-multi-carousel/lib/styles.css';
import InvestorSection from './Investor';
import Testimonials from './Testimonial';
import PaymentGateways from './PaymentGateway'
import EarningsPopup from './EarningPopUp'
import Footer from './Footer'
import Header from './Header'
function App() {
  const [activeTab, setActiveTab] = useState("deposit");
    useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
    });

    // 👇 Custom scroll logic for fade-out when leaving view
    const items = document.querySelectorAll(".feature-box");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.opacity = 1;
            entry.target.style.transform = "translateY(0)";
          } else {
            entry.target.style.opacity = 0;
            entry.target.style.transform = "translateY(50px)";
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
  return (
   <div>
    <>
    <Header/>
    </>



        {/* home section */}

        <section className="home-section">
  <div className="overlay h-100">
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-lg-6">
          <div className="text-box">
            <h1>edge trader Tips is a platform to make money online </h1>
            <p>
              Professional Trading on cryptocurrency with modern technologies
              and analytical tools!
              <br />
            </p>
            <a className="btn-custom mt-4" href="register.html" target="_blank">
              GET STARTED{" "}
            </a>
          </div>
        </div>
        <div className="col-lg-6 d-none d-lg-block">
          <div className="img-box">
            <img
              src="assets/uploads/content/63ac0f188d1e71672220440.png"
              alt="hero image"
              className="img-fluid img-1"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="feature-section">
  <div className="container">
    <div className="row g-4 justify-content-center">
      <div className="col-md-6 col-lg-3">
        <div
          className="feature-box"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <div className="d-flex">
            <div className="icon-box">
              <img
                src="assets/uploads/content/63ac0f992a32b1672220569.png"
                alt="feature image"
              />
            </div>
            <h2>25609</h2>
          </div>
          <h4>All Members</h4>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div
          className="feature-box"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <div className="d-flex">
            <div className="icon-box">
              <img
                src="assets/uploads/content/63ac0fa3a5c781672220579.png"
                alt="feature image"
              />
            </div>
            <h2>12.5M</h2>
          </div>
          <h4>Average Investment</h4>
        </div>
      </div>
      <div className="col-md-6 col-lg-3">
        <div
          className="feature-box"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <div className="d-flex">
            <div className="icon-box">
              <img
                src="assets/uploads/content/63ac0faed0e511672220590.png"
                alt="feature image"
              />
            </div>
            <h2>200</h2>
          </div>
          <h4>Countries Supported</h4>
        </div>
      </div>
    </div>
  </div>
</section>



{/* about section */}
<section className="about-section">
  <div className="container">
    <div className="row gy-5 align-items-center">
      <div className="col-lg-6">
        <div
          className="img-box"
          data-aos="fade-right"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <img
            src="assets/uploads/content/63ac0ff74380e1672220663.png"
            className="img-fluid"
            alt="about image"
          />
        </div>
      </div>
      <div className="col-lg-6">
        <div
          className="text-box"
          data-aos="fade-left"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <div className="header-text">
            <h5>About edge trader Tips</h5>
            <h2>Empowering Investors in the Cryptocurrency Market</h2>
          </div>
          <p>
            <i>Unlock Your Potential in the World of Cryptocurrency Trading</i>
          </p>
          <p>
            <span>
              <b>
                edge trader Tips is your go-to platform for learning about
                and participating in the exciting world of cryptocurrency
                trading. As a trusted resource, we provide valuable insights,
                educational materials, and exceptional trading opportunities to
                help you navigate the cryptocurrency market with confidence.
                Whether you're a beginner or an experienced trader,{" "}
              </b>
            </span>
            <span>
              <b>edge trader Tips </b>
            </span>
            <span>
              <b>
                offers a comprehensive and user-friendly experience to help you
                unlock your full potential in this rapidly growing industry.
                Join us today and start your journey towards financial success
                with cryptocurrencies.
              </b>
            </span>{" "}
          </p>
          <a className="btn-custom mt-4" href="about.html">
            Know More
          </a>
        </div>
      </div>
    </div>
  </div>
</section>



{/* pricing section          */}

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
              When it comes to investing in cryptocurrencies, choosing the right
              platform is crucial to your success. edge trader Tips stands
              out as the ideal choice for all cryptocurrency enthusiasts and
              investors. With our cutting-edge technology, extensive market
              knowledge, and commitment to user satisfaction, we offer an
              unparalleled investment experience.
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
    <TradingViewWidget   />
  {/* TradingView Widget END */}
</>


<>
  {/* TradingView Widget BEGIN */}
    <ForexCrossWidget/>
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

<>
<InvestorSection/>
</>

  <section className="how-it-work">
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="video-box">
            <a
              className="play-vdo"
              href="https://youtu.be/Gc2en3nHxA4"
              data-fancybox="video"
              target="_blank"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
        <div className="col-md-6">
          <div className="work-process">
            <h2 className="mb-5">How it works</h2>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-anchor-placement="center-bottom"
            >
              <div className="count">
                <h2>
                  1<span>.</span>
                </h2>
              </div>
              <div className="text">
                <h4>Register &amp; Log in</h4>
                <p />
                <p>
                  <b>
                    <span>
                      Create your account on Cryptopedia FX Trade by providing
                      your basic information. This will give you access to our
                      secure investment platform and then you need to log in
                      your live trading account
                      <br />
                    </span>
                  </b>
                </p>
                <p />
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-anchor-placement="center-bottom"
            >
              <div className="count">
                <h2>
                  2<span>.</span>
                </h2>
              </div>
              <div className="text">
                <h4>Fund Your Account</h4>
                <p>
                  <b>
                    Deposit funds into your Cryptopedia FX Trade account using
                    your preferred payment method. This will provide you with
                    the necessary investment capital.
                  </b>
                </p>
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-anchor-placement="center-bottom"
            >
              <div className="count">
                <h2>
                  3<span>.</span>
                </h2>
              </div>
              <div className="text">
                <h4>Select a service</h4>
                <p />
                <p>
                  Choose your cryptocurrencies you want and get ready to receive
                  more publicity
                </p>
                <p />
              </div>
            </div>
            <div
              className="box"
              data-aos="fade-up"
              data-aos-duration={1000}
              data-aos-anchor-placement="center-bottom"
            >
              <div className="count">
                <h2>
                  4<span>.</span>
                </h2>
              </div>
              <div className="text">
                <h4>Enjoy Super Results</h4>
                <p />
                <p>
                  Keep track of your investments, portfolio value, and potential
                  profit through our user-friendly dashboard. Adjust your
                  investments as necessary to optimize your portfolio.
                </p>
                <p />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* referral bonus */}
  {/* testimonial section */}
<>
<Testimonials/>
</>
  {/* blog section */}
  <section className="blog-section">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="header-text text-center">
            <h5>Read Our Blogs</h5>
            <h6>Our Latest Blog Posts</h6>
          </div>
          <div
            className="tradingview-widget-container"
            style={{ width: '100%', height: 830 }}
          >
            <iframe
              scrolling="no"
              allowTransparency="true"
              style={{
                boxSizing: "border-box",
                display: "block",
                height: "calc(798px)",
                width: '100%'
              }}
              src="https://s.tradingview.com/embed-widget/timeline/?locale=en#%7B%22colorTheme%22%3A%22dark%22%2C%22isTransparent%22%3Afalse%2C%22displayMode%22%3A%22regular%22%2C%22width%22%3A480%2C%22height%22%3A830%2C%22utm_source%22%3A%22expressinvestmentencryptionfx.com%22%2C%22utm_medium%22%3A%22widget_new%22%2C%22utm_campaign%22%3A%22timeline%22%7D"
              frameBorder={0}
            />
            <div className="tradingview-widget-copyright">
              <a
                href="https://www.tradingview.com/key-events/?utm_source=expressinvestmentencryptionfx.com&utm_medium=widget_new&utm_campaign=timeline"
                rel="noopener"
                target="_blank"
              >
                <span className="blue-text">Daily news roundup</span>
              </a>{" "}
              by TradingView
            </div>
            <style
              dangerouslySetInnerHTML={{
                __html:
                  "\n\t.tradingview-widget-copyright {\n\t\tfont-size: 13px !important;\n\t\tline-height: 32px !important;\n\t\ttext-align: center !important;\n\t\tvertical-align: middle !important;\n\t\t/* @mixin  sf-pro-display-font; */\n\t\tfont-family: -apple-system, BlinkMacSystemFont, 'Trebuchet MS', Roboto, Ubuntu, sans-serif !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright .blue-text {\n\t\tcolor: #2962FF !important;\n\t}\n\n\t.tradingview-widget-copyright a {\n\t\ttext-decoration: none !important;\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited {\n\t\tcolor: #9db2bd !important;\n\t}\n\n\t.tradingview-widget-copyright a:hover .blue-text {\n\t\tcolor: #1E53E5 !important;\n\t}\n\n\t.tradingview-widget-copyright a:active .blue-text {\n\t\tcolor: #1848CC !important;\n\t}\n\n\t.tradingview-widget-copyright a:visited .blue-text {\n\t\tcolor: #2962FF !important;\n\t}\n\t"
              }}
            />
          </div>
        </div>
      </div>
    </div>
    <div className="row g-4 g-lg-5">
      <div className="col-lg-4 col-md-6">
        <div
          className="blog-box"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <div className="img-box">
            <a href="blog-details/crypto-economys-10-most-expensive-assets-per-unit-in-2023/63.html">
              <img
                src="assets/uploads/content/thumb_62c41816f34b81657018390.jpg"
                className="img-fluid"
                alt="blog-image"
              />
            </a>
          </div>
          <div className="text-box">
            <div className="date-author">
              <span>
                <i className="far fa-calendar-alt" /> 17 Dec, 2021{" "}
              </span>
            </div>
            <a
              href="blog-details/crypto-economys-10-most-expensive-assets-per-unit-in-2023/63.html"
              className="title"
            >
              Crypto Economy's 10 Most Expensive Assets Per Unit In 2023.
            </a>
            <p>
              To help manage portfolios successfully,we believe five
              closely-connected capabilities are required.When it all comes
              tog...{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="blog-box"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <div className="img-box">
            <a href="blog-details/ethusd-top-and-drop-or-break-from-typical-behavior/62.html">
              <img
                src="assets/uploads/content/thumb_62c4182976a5c1657018409.jpg"
                className="img-fluid"
                alt="blog-image"
              />
            </a>
          </div>
          <div className="text-box">
            <div className="date-author">
              <span>
                <i className="far fa-calendar-alt" /> 17 Dec, 2021{" "}
              </span>
            </div>
            <a
              href="blog-details/ethusd-top-and-drop-or-break-from-typical-behavior/62.html"
              className="title"
            >
              ETH/USD – Top and Drop or Break From Typical Behavior?
            </a>
            <p>
              The EUR/USD rally since last month is at risk of failing, in-line
              with how it has behaved since early 2023. Rallies have...{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6">
        <div
          className="blog-box"
          data-aos="fade-up"
          data-aos-duration={1000}
          data-aos-anchor-placement="center-bottom"
        >
          <div className="img-box">
            <a href="blog-details/gold-price-may-ride-the-tailwind-of-virus-uncertainty-soft-us-dollar/61.html">
              <img
                src="assets/uploads/content/thumb_62c418343716c1657018420.jpg"
                className="img-fluid"
                alt="blog-image"
              />
            </a>
          </div>
          <div className="text-box">
            <div className="date-author">
              <span>
                <i className="far fa-calendar-alt" /> 17 Dec, 2021{" "}
              </span>
            </div>
            <a
              href="blog-details/gold-price-may-ride-the-tailwind-of-virus-uncertainty-soft-us-dollar/61.html"
              className="title"
            >
              Gold Price May Ride the Tailwind of Virus Uncertainty, Soft...
            </a>
            <p>
              Gold prices have recently broken out above a key level at US$
              1,750 and edged higher. Global growth uncertainties result...{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* payment gateway */}
<>
<PaymentGateways/>
</>

<>
<EarningsPopup/>
</>

<Footer/>

<>
  {/* arrow up */}
  <a href="#" className="scroll-up">
    <i className="fas fa-caret-up" />
  </a>
</>




   </div>

  );
}

export default App;
