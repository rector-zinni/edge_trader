import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Testimonials() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 3,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const testimonials = [
    {
      text: "They make you feel important and give you the info you need at the level you can understand.",
      img: "assets/uploads/content/62778ce92d4d51652002025.jpg",
      name: "Rethabile",
      location: "From South Africa",
    },
    {
      text: "Thanks to edge trader TIPS. All I had to do was to look at my investment to see how well it is being looked after.",
      img: "assets/uploads/content/62778d06d1a991652002054.jpg",
      name: "John Doe",
      location: "From NY, USA",
    },
    {
      text: "They make you feel important and give you the info you need at the level you can understand.",
      img: "assets/uploads/content/605aeaf009ddb1616571120.png",
      name: "Maria Jacket",
      location: "From Georgia",
    },
    {
      text: "They make all payout processing easy according to the stipulated time.",
      img: "assets/uploads/content/605aeb033ff771616571139.png",
      name: "Tom Latham",
      location: "From Solomon Island",
    },
  ];

  return (
    <section className="testimonial-section">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <div className="header-text">
              <h5>TESTIMONIAL</h5>
              <h2>Check Our Client Feedback</h2>
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
              arrows={false}
              showDots
              removeArrowOnDeviceType={["tablet", "mobile"]}
            >
              {testimonials.map((item, index) => (
                <div className="review-box" key={index}>
                  <div className="text">
                    <p>
                      <b>{item.text}</b>
                    </p>
                    <div className="quote">
                      <img src="assets/themes/darkpurple/img/icon/quote-2.png" alt="quote" />
                    </div>
                  </div>
                  <div className="top">
                    <img src={item.img} alt="testimonial" />
                    <div>
                      <h4>{item.name}</h4>
                      <a className="organization" href="#">
                        {item.location}
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
