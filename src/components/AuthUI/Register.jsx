import BannerSection from "../publicpage/Banner";
import Header from "../publicpage/Header";
import EarningsPopup from "../publicpage/EarningPopUp";
import Footer from "../publicpage/Footer";
import { NavLink, useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { supabase } from "../../backend engine/superbaseClinet";

const Register = () => {
  const { referralId } = useParams();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    phone: "",
    password: "",
    referral_code: "",
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Autofill referral if present in URL
  useEffect(() => {
    if (referralId) {
      setFormData((prev) => ({ ...prev, referral_code: referralId }));
    }
  }, [referralId]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      // Step 1 – Create Supabase Auth account
      const { data, error } = await supabase.auth.signUp({
        email: formData.email,
        password: formData.password,
      });

      if (error) throw error;
      if (!data.user) throw new Error("User creation failed");

      const user = data.user;

      // Step 2 – Generate custom referral code
      const referralCode = `${formData.username.slice(0, 4)}${Math.floor(
        Math.random() * 10000
      )}`;

      // Step 3 – Insert into users table
      const { error: insertError } = await supabase.from("users").insert([
        {
          id: user.id,
          full_name: `${formData.firstname} ${formData.lastname}`,
          username: formData.username,
          email: formData.email,
          phone: formData.phone,
          referral_code: referralCode,
          referred_by: formData.referral_code || null,
          balance: 0,
          created_at: new Date().toISOString(),
        },
      ]);

      if (insertError) throw insertError;

      setMessage("✅ Registration successful! Check your email to verify your account.");
    } catch (err) {
      setMessage(`❌ ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />
      <BannerSection title={"Register"} />

      <section className="login-section">
        <div className="container h-100">
          <div className="row h-100 justify-content-center">
            <div className="col-lg-6">
              <div className="form-wrapper d-flex align-items-center h-100">
                <form onSubmit={handleRegister}>
                  <div className="row g-4">
                    <div className="col-12">
                      <h4>Register Here</h4>
                      {message && (
                        <p
                          className={
                            message.startsWith("✅") ? "text-success" : "text-danger"
                          }
                        >
                          {message}
                        </p>
                      )}
                    </div>

                    <div className="input-box col-12">
                      <input
                        type="text"
                        name="firstname"
                        className="form-control"
                        placeholder="First Name"
                        value={formData.firstname}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-box col-12">
                      <input
                        type="text"
                        name="lastname"
                        className="form-control"
                        placeholder="Last Name"
                        value={formData.lastname}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-box col-12">
                      <input
                        type="text"
                        name="username"
                        className="form-control"
                        placeholder="Username"
                        value={formData.username}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-box col-12">
                      <input
                        type="email"
                        name="email"
                        className="form-control"
                        placeholder="Email Address"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="input-box col-12">
                      <input
                        type="text"
                        name="phone"
                        className="form-control"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
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
                      <div className="form-check">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="terms"
                          required
                        />
                        <label className="form-check-label" htmlFor="terms">
                          I agree to the terms and conditions.
                        </label>
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn-custom mt-3"
                    disabled={loading}
                  >
                    {loading ? "Registering..." : "Register"}
                  </button>

                  <div className="bottom mt-3">
                    Already have an account? <NavLink to="/login">Log In</NavLink>
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

export default Register;
