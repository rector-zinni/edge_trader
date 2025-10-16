
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const InvestorSection = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 600 },
      items: 2,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 600, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const investors = [
    {
      name: "Stanley64",
      img: "assets/admin/images/default.png",
      amount: "$15585",
    },
    {
      name: "Samk916",
      img: "assets/uploads/users/67597881b6a801733916801.jpg",
      amount: "$15096",
    },
    {
      name: "July51",
      img: "assets/uploads/users/675b49998e52e1734035865.jpg",
      amount: "$7042",
    },
    {
      name: "Omolozo88",
      img: "assets/admin/images/default.png",
      amount: "$500",
    },
  ];

  return (
    <section className="investor-section">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="header-text text-center">
              <h5>INVESTOR</h5>
              <h2>World Wide Top Investor</h2>
              <p>
                Company Road Map 2012: First phase of the assets creation 2022:
                Further automation of services 2023.
              </p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col">
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={3000}
              keyBoardControl
              transitionDuration={800}
              removeArrowOnDeviceType={["tablet", "mobile"]}
              containerClass="carousel-container"
              itemClass="p-3"
            >
              {investors.map((inv, index) => (
                <div key={index} className="investor-box text-center">
                  <div className="img-box">
                    <img
                      src={inv.img}
                      alt={inv.name}
                      style={{
                        width: "100%",
                        height: "200px",
                        objectFit: "cover",
                        borderRadius: "10px",
                      }}
                    />
                  </div>
                  <div className="text-box mt-3">
                    <h5>{inv.name}</h5>
                    <span>Investor</span>
                    <h4>Invest: {inv.amount}</h4>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InvestorSection;
