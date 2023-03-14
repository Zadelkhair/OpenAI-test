// layout compornt

// import router
import { NavLink, Outlet, useNavigate } from "react-router-dom";

export default function LayoutComponent() {
  const navigate = useNavigate();

  return (
    <>
      <div className="header">
        <div className="container">
          <div className="logo">
            <NavLink to="/">
              <img src="/logo.png" alt="Netflix Logo" />
            </NavLink>
          </div>
          <div className="menu">
            <a href="#signup" className="signup-btn">
              Sign In
            </a>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}
