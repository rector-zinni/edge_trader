import { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { supabase } from "../../backend engine/superbaseClinet"; // make sure this is your correct import
import BannerSection from "../publicpage/Banner";
import Header from "../publicpage/Header";
import EarningsPopup from "../publicpage/EarningPopUp";
import Footer from "../publicpage/Footer";

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;

      // ✅ Successful login
      setMessage("Login successful!");
      navigate("/user/dashboard");
    } catch (err) {
      setMessage(err.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <BannerSection title={"login"} />

      <section className="login-section">
        <div className="container h-100">
          <div className="row h-100 justify-content-center">
            <div className="col-lg-6">
              <div className="form-wrapper d-flex align-items-center h-100">
                <form onSubmit={handleLogin}>
                  <div className="row g-4">
                    <div className="col-12">
                      <h4>Login here</h4>
                    </div>

                    <div className="input-box col-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-box col-12">
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="col-12">
                      <div className="links d-flex justify-content-between align-items-center">
                        <div className="form-check">
                          <input
                            type="checkbox"
                            className="form-check-input"
                            id="remember"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember"
                          >
                            Remember me
                          </label>
                        </div>
                        <a href="/reset-password">Forgot password?</a>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-custom w-100 mt-4"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Log In"}
                  </button>

                  {message && (
                    <p
                      className={`text-center mt-3 ${
                        message.includes("success") ? "text-success" : "text-danger"
                      }`}
                    >
                      {message}
                    </p>
                  )}

                  <div className="bottom text-center mt-3">
                    Don't have an account?{" "}
                    <NavLink to="/register">Create account</NavLink>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EarningsPopup />
      <Footer />
    </div>
  );
};

export default Login;
