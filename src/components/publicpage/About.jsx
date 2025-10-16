import AOS from "aos";
import Header from "./Header";
import InvestorSection from './Investor';
import Testimonials from './Testimonial';
import PaymentGateways from './PaymentGateway'
import EarningsPopup from './EarningPopUp'
import Footer from './Footer'
import TradingViewWidget from "../widget/MarketOverviewWidget";
import ForexCrossWidget from "../widget/ForexCrossWidget";
import BannerSection from "./Banner";
const About = () => {
  return (
    <div className="about">
      <Header />

      <>
        <BannerSection title="About Us" />
      </>

      <>
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
                    <i>
                      Unlock Your Potential in the World of Cryptocurrency
                      Trading
                    </i>
                  </p>
                  <p>
                    <span>
                      <b>
                        edge trader Tips is your go-to platform for
                        learning about and participating in the exciting world
                        of cryptocurrency trading. As a trusted resource, we
                        provide valuable insights, educational materials, and
                        exceptional trading opportunities to help you navigate
                        the cryptocurrency market with confidence. Whether
                        you're a beginner or an experienced trader,{" "}
                      </b>
                    </span>
                    <span>
                      <b>edge trader Tips </b>
                    </span>
                    <span>
                      <b>
                        offers a comprehensive and user-friendly experience to
                        help you unlock your full potential in this rapidly
                        growing industry. Join us today and start your journey
                        towards financial success with cryptocurrencies.
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
      </>

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

      <>
      <Testimonials/>
      </>
      <>
<InvestorSection/>
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
};

export default About;
