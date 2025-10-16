import { useEffect, useState } from "react";
import { useUser } from "../../context/userContext";
import { supabase } from "../../backend engine/superbaseClinet";
import { NavLink } from "react-router-dom";

const DashboardNavbar = () => {
  const { user } = useUser();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(
    "https://optimizetradingtips.com/assets/admin/images/default.png"
  );

  // 🔹 Fetch user's profile image
  useEffect(() => {
    const fetchProfileImage = async () => {
      if (!user?.id) return;

      const { data, error } = await supabase
        .from("users")
        .select("profile_image")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Error fetching profile image:", error.message);
        return;
      }

      if (data?.profile_image) {
        // If it's already a full URL, use it directly
        if (data.profile_image.startsWith("http")) {
          setProfileImage(data.profile_image);
        } else {
          // Otherwise, construct the public URL from your fixed Supabase bucket
          const publicUrl = `https://rjpljfomoqneroewgant.supabase.co/storage/v1/object/public/profiles/${data.profile_image}`;
          setProfileImage(publicUrl);
          alert(publicUrl);
        }
      }
    };

    fetchProfileImage();
  }, [user?.id]);

  const toggleUserDropdown = () => setIsDropdownOpen(!isDropdownOpen);
  const toggleNotification = () => setIsNotifOpen(!isNotifOpen);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = "/login";
  };

  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">
          OPTIMIZE TRADING TIP
        </NavLink>

        <button
          className="sidebar-toggler"
          onClick={() => {
            const sidebar = document.querySelector("#sidebar");
            const content = document.querySelector("#content");
            sidebar?.classList.toggle("active");
            content?.classList.toggle("active");
          }}
        >
          <i className="fal fa-bars"></i>
        </button>

        <span className="navbar-text d-flex align-items-center gap-3">
          {/* 🔔 Notification */}
          <div className="notification-panel position-relative">
            <button className="dropdown-toggle" onClick={toggleNotification}>
              <i className="far fa-bell"></i>
              <span className="count">3</span>
            </button>

            {isNotifOpen && (
              <ul className="notification-dropdown dropdown-box">
                <li>
                  <i className="fal fa-bell"></i>
                  <div className="text">
                    <h4>Deposit Approved</h4>
                    <p>2 hours ago</p>
                  </div>
                </li>
                <div className="clear-all text-center mt-2">
                  <button className="btn btn-sm btn-light">Clear all</button>
                </div>
              </ul>
            )}
          </div>

          {/* 👤 User dropdown */}
          <div className="user-panel position-relative">
            <span className="profile" onClick={toggleUserDropdown}>
              <img
                src={profileImage}
                alt="user"
                className="img-fluid rounded-circle"
                style={{
                  width: "40px",
                  height: "40px",
                  objectFit: "cover",
                  border: "2px solid #444",
                }}
              />
            </span>

            {isDropdownOpen && (
              <ul className="user-dropdown show">
                <li>
                  <span className="dropdown-item text-white fw-light">
                    {user ? user.email : "Loading..."}
                  </span>
                </li>
                <li>
                  <NavLink to="/user/dashboard">
                    <i className="fal fa-border-all"></i> Dashboard
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/user/dashboard/profile">
                    <i className="fal fa-user"></i> My Profile
                  </NavLink>
                </li>
                <li onClick={handleLogout}>
                  <a href="#" className="dropdown-item text-white fw-light">
                    <i className="fal fa-sign-out-alt"></i> Logout
                  </a>
                </li>
              </ul>
            )}
          </div>
        </span>
      </div>
    </nav>
  );
};

export default DashboardNavbar;
