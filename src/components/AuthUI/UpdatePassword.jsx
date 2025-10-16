import React, { useState } from "react";
import BannerSection from "../publicpage/Banner";
import Header from "../publicpage/Header";
import Footer from "../publicpage/Footer";
import { supabase } from "../../backend engine/superbaseClinet";

const UpdatePassword = () => {
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const { error } = await supabase.auth.updateUser({ password });
      if (error) throw error;
      setMessage("✅ Password updated successfully! You can now log in.");
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <BannerSection title={"Set New Password"} />
      <section className="login-section">
        <div className="container h-100">
          <div className="row h-100 justify-content-center">
            <div className="col-lg-6">
              <div className="form-wrapper d-flex align-items-center h-100">
                <form onSubmit={handleUpdate}>
                  <div className="row g-4">
                    <div className="col-12">
                      <h4>Set New Password</h4>
                      <p className="text-muted">
                        Enter a strong password to secure your account.
                      </p>
                    </div>
                    <div className="input-box col-12">
                      <input
                        type="password"
                        className="form-control"
                        placeholder="New Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
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
                        {loading ? "Updating..." : "Update Password"}
                      </button>
                    </div>
                  </div>
                </form>
                
              </div>
              <div className="text-center mt-3">
          <a href="/login" className="text-light text-decoration-none">
            ← Back to Login
          </a>
        </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default UpdatePassword;
