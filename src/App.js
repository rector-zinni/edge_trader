import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <header id="header-section">
  <div className="overlay">
    {/* TOPBAR */}
    {/* navbar */}
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container">
        <a className="navbar-brand" to="">
          {" "}
          <img src="assets/uploads/logo/logo.png" alt="OPTIMIZE TRADING TIP" />
        </a>
        <button
          className="navbar-toggler p-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" href="index.html">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="about.html">
                About Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="plan.html">
                Plan
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="blog.html">
                Blogs
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="faq.html">
                FAQ
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="contact.html">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="login.html">
                LOGIN
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    {/* /TOPBAR */}
  </div>
</header>

  );
}

export default App;
