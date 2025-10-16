import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function PaymentGateways() {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };

  const gateways = [
    {
      img: "assets/uploads/gateway/6537ea51461561698163281.png",
      alt: "Bitcoin Wallet (BTC)",
    },
    {
      img: "assets/uploads/gateway/67da9314392c91742377748.webp",
      alt: "Tether USDT",
    },
  ];

  return (
    <section className="payment-gateway">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={2500}
              arrows={false}
              showDots={false}
              swipeable
              draggable
            >
              {gateways.map((g, i) => (
                <div className="box" key={i}>
                  <img src={g.img} alt={g.alt} />
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
}
