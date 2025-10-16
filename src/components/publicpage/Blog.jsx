import BannerSection from "./Banner";
import Header from "./Header";
import EarningsPopup from './EarningPopUp'
import Footer from './Footer'

const Blog = () => {
    return (
        <div>
            <Header/>
            <BannerSection title="Blogs" />

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
 
export default Blog;