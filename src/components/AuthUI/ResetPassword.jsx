import React, { useState } from "react";
import BannerSection from "../publicpage/Banner";
import Header from "../publicpage/Header";
import EarningsPopup from "../publicpage/EarningPopUp";
import Footer from "../publicpage/Footer";
import { NavLink } from "react-router-dom";
import { supabase } from "../../backend engine/superbaseClinet";

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(email, {
        redirectTo: "http://localhost:3000/update-password",
      });

      if (error) throw error;
      setMessage("✅ Password reset link sent! Check your email inbox.");
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <BannerSection title={"Reset Password"} />
      <section className="login-section">
        <div className="container h-100">
          <div className="row h-100 justify-content-center">
            <div className="col-lg-6">
              <div className="form-wrapper d-flex align-items-center h-100">
                <form onSubmit={handleReset}>
                  <div className="row g-4">
                    <div className="col-12">
                      <h4>Forgot your password?</h4>
                      <p className="text-muted">
                        Enter your email below and we’ll send you a reset link.
                      </p>
                    </div>

                    <div className="input-box col-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    {message && (
                      <div className="col-12">
                        <div
                          className={`alert ${
                            message.startsWith("✅")
                              ? "alert-success"
                              : "alert-danger"
                          }`}
                        >
                          {message}
                        </div>
                      </div>
                    )}

                    <div className="col-12">
                      <button
                        type="submit"
                        className="btn-custom w-100"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Reset Link"}
                      </button>
                    </div>

                    <div className="bottom text-center">
                      <p className="mt-3 mb-0">
                        Remembered your password?{" "}
                        <NavLink to="/login" className="text-decoration-none">
                          Back to Login
                        </NavLink>
                      </p>
                    </div>
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

export default ResetPassword;
