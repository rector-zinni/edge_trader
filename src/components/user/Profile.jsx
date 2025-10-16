import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { supabase } from "../../backend engine/superbaseClinet";
import "./Transaction.css";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({
    full_name: "",
    email: "",
    phone: "",
    address: "",
    profile_image: "",
  });
  const [uploading, setUploading] = useState(false);
  const [activeTab, setActiveTab] = useState("profile");
  const [passwords, setPasswords] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState("");

  // 🔹 Supabase Base URL (hardcoded, since no env vars)
  const BASE_URL = "https://rjpljfomoqneroewgant.supabase.co";

  // 🔹 Fetch authenticated user
  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) console.error("Auth error:", error);
      else setUser(data.user);
    };
    getUser();
  }, []);

  // 🔹 Load profile info after user loads
  useEffect(() => {
    if (!user) return;
    const loadProfile = async () => {
      const { data, error } = await supabase
        .from("users")
        .select("full_name, email, phone, address, profile_image")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Profile fetch error:", error.message);
        return;
      }

      if (data) {
        // ✅ Build the full image URL if it's not already a full link
        const imageUrl = data.profile_image
          ? data.profile_image.startsWith("http")
            ? data.profile_image
            : `${BASE_URL}/storage/v1/object/public/profiles/${data.profile_image}`
          : "";

        setProfile({ ...data, profile_image: imageUrl });
      }
    };

    loadProfile();
  }, [user]);

  // 🔹 Upload image to Supabase bucket
  const handleImageUpload = async (e) => {
    try {
      setUploading(true);
      setMessage("");
      const file = e.target.files[0];
      if (!file || !user?.id) return;

      const ext = file.name.split(".").pop();
      const fileName = `${user.id}_${Date.now()}.${ext}`;

      // 1️⃣ Upload image
      const { error: uploadError } = await supabase.storage
        .from("profiles")
        .upload(fileName, file, { upsert: true });
      if (uploadError) throw uploadError;

      // 2️⃣ Get public URL
      const { data } = supabase.storage.from("profiles").getPublicUrl(fileName);
      const publicUrl = data.publicUrl;

      // 3️⃣ Save only the file name in the DB
      const { error: updateError } = await supabase
        .from("users")
        .update({ profile_image: fileName })
        .eq("id", user.id);
      if (updateError) throw updateError;

      // 4️⃣ Update state
      setProfile((prev) => ({ ...prev, profile_image: publicUrl }));
      setMessage("✅ Profile image updated!");
    } catch (error) {
      console.error("Image upload error:", error.message);
      setMessage("❌ Failed to upload image");
    } finally {
      setUploading(false);
    }
  };

  // 🔹 Save profile edits
  const handleSave = async () => {
    if (!user?.id) return;
    const { error } = await supabase
      .from("users")
      .update({
        full_name: profile.full_name,
        phone: profile.phone,
        address: profile.address,
      })
      .eq("id", user.id);

    if (error) {
      setMessage("❌ Error saving profile");
      console.error(error);
    } else {
      setMessage("✅ Profile updated successfully");
    }
  };

  // 🔹 Change password
  const handlePasswordChange = async () => {
    if (passwords.newPassword !== passwords.confirmPassword) {
      setMessage("❌ Passwords do not match!");
      return;
    }

    const { error } = await supabase.auth.updateUser({
      password: passwords.newPassword,
    });

    if (error) {
      console.error("Password error:", error);
      setMessage("❌ Failed to change password");
    } else {
      setMessage("✅ Password changed successfully");
      setPasswords({ newPassword: "", confirmPassword: "" });
    }
  };

  return (
    <section className="Transaction-section py-5">
      <div className="container">
        <h2 className="text-white fw-bold mb-4">My Profile</h2>

        {/* Tabs */}
        <ul className="nav nav-tabs mb-4">
          <li className="nav-item">
            <button
              className={` ${activeTab === "profile" ? "btn-custom fw-normal" : "text-white" } `}
              onClick={() => setActiveTab("profile")}
            >
              Profile Info
            </button>
          </li>
          <li className="nav-item">
            <button
              className={` ${activeTab === "password" ? "btn-custom fw-normal" : "text-white" } `}
              onClick={() => setActiveTab("password")}
            >
              Change Password
            </button>
          </li>
          <li className="nav-item">
            <button
              className={`nav-link ${activeTab === "verify"  ? "btn-custom fw-normal" : "text-white" } `}
              onClick={() => setActiveTab("verify")}
            >
              Verification
            </button>
          </li>
        </ul>

        {message && (
          <div className="alert alert-info text-center py-2">{message}</div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="card bg-dark text-white p-4 border-0 shadow">
            <div className="text-center mb-4">
              <img
                src={
                  profile.profile_image ||
                  "https://optimizetradingtips.com/assets/admin/images/default.png"
                }
                alt="Profile"
                className="rounded-circle mb-3"
                width="120"
                height="120"
                style={{ objectFit: "cover", border: "2px solid #666" }}
              />
              <div>
                <input
                  type="file"
                  className="form-control w-auto d-inline-block"
                  onChange={handleImageUpload}
                  disabled={uploading}
                />
              </div>
            </div>

            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={profile.full_name || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, full_name: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  value={profile.email || ""}
                  disabled
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Phone</label>
                <input
                  type="text"
                  className="form-control"
                  value={profile.phone || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Address</label>
                <input
                  type="text"
                  className="form-control"
                  value={profile.address || ""}
                  onChange={(e) =>
                    setProfile({ ...profile, address: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="text-center mt-4">
              <button onClick={handleSave} className="btn search-btn fw-bold">
                Save Changes
              </button>
            </div>
          </div>
        )}

        {/* Password Tab */}
        {activeTab === "password" && (
          <div className="card bg-dark text-white p-4 border-0 shadow">
            <div className="row g-3">
              <div className="col-md-6">
                <label className="form-label">New Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={passwords.newPassword}
                  onChange={(e) =>
                    setPasswords({ ...passwords, newPassword: e.target.value })
                  }
                />
              </div>
              <div className="col-md-6">
                <label className="form-label">Confirm Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={passwords.confirmPassword}
                  onChange={(e) =>
                    setPasswords({
                      ...passwords,
                      confirmPassword: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="text-center mt-4">
              <button
                onClick={handlePasswordChange}
                className="btn search-btn fw-bold"
              >
                Update Password
              </button>
            </div>
          </div>
        )}

        {/* Verification Tab */}
        {activeTab === "verify" && (
          <div className="card bg-dark text-white p-5 text-center shadow border-0">
            <h4 className="text-success fw-bold">✅ Email Verified</h4>
            <p>Your email has been successfully verified.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Profile;
