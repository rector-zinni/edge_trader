import Header from "./Header";
import EarningsPopup from './EarningPopUp'
import Footer from './Footer'
import BannerSection from "./Banner";
const Faq = () => {
    return (
        <div>
           <Header/>
           <BannerSection title="FAQ" />
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

export default Faq;