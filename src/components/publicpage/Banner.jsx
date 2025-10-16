import { NavLink } from "react-router-dom";

const BannerSection = ({ title, path }) => {
  return (
    <section className="banner-section">
      <div className="overlay">
        <div className="container">
          <div className="row">
            <div className="col text-center">
              <h3>{title}</h3>
              <nav aria-label="breadcrumb">
                <ol className="breadcrumb justify-content-center">
                  <li className="breadcrumb-item">
                    <NavLink to="/">Home</NavLink>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {title}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BannerSection;
