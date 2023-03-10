import React, { useEffect } from "react";
import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import "./profile.css";

export const Profile = () => {
  const { token } = useAuth();
  const items = [
    { title: "Profile", link: "/profile/" },
    { title: "Settings", link: "./settings" },
  ];
  const navigate = useNavigate();
  useEffect(() => {
    !token && navigate("/login");
  }, [token]);

  const setProfileLink = (isActive) => {
    return {
      color: isActive ? "#0ea5e9" : "#000000",
    };
  };

  return (
    <div className="profile-container">
      <p className="align-center fs-lg mg-xlg">User Profile</p>
      <div className="profile-section">
        <div className="profile-sidebar pd-md">
          <ul className="profile-sidebar-list">
            {items.map(({ title, link }) => (
              <NavLink
                key={title}
                style={({ isActive }) => setProfileLink(isActive)}
                to={link}
              >
                <li className="sidebar-list-item pd-vrtl-sm mg-vrtl-sm">
                  {title}
                </li>
              </NavLink>
            ))}
          </ul>
        </div>
        <div className="profile-info">
          <Outlet />
        </div>
      </div>
    </div>
  );
};