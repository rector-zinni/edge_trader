import EarningsPopup from './EarningPopUp'
import Footer from './Footer'
import BannerSection from "./Banner";
import Header from "./Header";

const Contact = () => {
    return ( 
        <div>
            <Header/>
            <BannerSection title="Contact Us" />
            <>
  <div className="contact-section">
    <div className="container">
      <div className="row g-lg-5 gy-5">
        <div className="col-lg-4">
          <div className="contact-info">
            <h4 className="mb-4">Our Office</h4>
            <div className="contact-map mb-5">
              <img
                src="assets/themes/darkpurple/img/map.png"
                className="img-fluid"
                alt=""
              />
            </div>
            <div className="info-box">
              <div className="icon">
                <img
                  src="assets/themes/darkpurple/img/location-2.png"
                  alt=""
                />
              </div>
              <div>
                <h5>Our Location</h5>
                <p>
                  200 S Civic Center Dr Suite 700, Columbus, OH 43215, United
                  States of America.
                </p>
              </div>
            </div>
            <div className="info-box">
              <div className="icon">
                <img src="assets/themes/darkpurple/img/email-2.png" alt="" />
              </div>
              <div>
                <h5>email address</h5>
                <p>admin@edgetrader.com</p>
              </div>
            </div>
            <div className="info-box">
              <div className="icon">
                <img src="assets/themes/darkpurple/img/phone-2.png" alt="" />
              </div>
              <div>
                <h5>company number</h5>
                <p>+1(760) 530-8986</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2" />
        <div className="col-lg-6">
          <h3>GET IN TOUCH</h3>
          <p className="mb-4">Let's Ask Your Questions</p>
          <form action="https://optimizetradingtips.com/contact" method="post">
            <input
              type="hidden"
              name="_token"
              defaultValue="zbk5zHooMa0Kmwaz2YrGDhQaq4ghkmus1oPNKyu9"
            />{" "}
            <div className="row g-3">
              <div className="input-box col-md-12">
                <input
                  type="text"
                  name="name"
                  defaultValue=""
                  className="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div className="input-box col-md-12">
                <input
                  type="email"
                  name="email"
                  defaultValue=""
                  className="form-control"
                  placeholder="Email Address"
                />
              </div>
              <div className="input-box col-md-12">
                <input
                  type="text"
                  name="subject"
                  defaultValue=""
                  className="form-control"
                  placeholder="Subject"
                />
              </div>
              <div className="input-box col-md-12">
                <textarea
                  className="form-control"
                  name="message"
                  cols={30}
                  rows={10}
                  placeholder="Message"
                  defaultValue={""}
                />
              </div>
              <div className="input-box col-md-12">
                <button className="btn-custom">Send Message</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
  {/* newsletter section */}
  <section className="newsletter-section">
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-10">
          <div className="box">
            <div className="overlay">
              <div className="row align-items-center">
                <div className="col-lg-6">
                  <div className="text-box">
                    <h3>Subscribe to Newslatter</h3>
                    <p>TO GET EXCLUSIVE BENEFITS</p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <form
                    action="https://optimizetradingtips.com/subscribe"
                    method="post"
                  >
                    <input
                      type="hidden"
                      name="_token"
                      defaultValue="zbk5zHooMa0Kmwaz2YrGDhQaq4ghkmus1oPNKyu9"
                    />{" "}
                    <div className="input-box col-md-12">
                      <div className="input-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control"
                          placeholder="Email Address"
                        />
                      </div>
                      <button className="btn-custom" type="submit">
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
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
 
export default Contact;