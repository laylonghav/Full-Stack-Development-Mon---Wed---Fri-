import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../assets/logo/logo.png";
import "./style.css";

const MasterLayout = () => {
  return (
    <div>
      <header
        style={{
          height: "10vh",
          paddingRight: "2rem",
          paddingLeft: "2rem",
          backgroundColor: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "1rem",
          position: "sticky",
          top: 0,
          boxShadow: "0px 5px 5px rgba(0,0,0,0.2)",
        }}
      >
        <div
          className="logoBrand"
          style={{ display: "flex", alignItems: "center", gap: "1rem" }}
        >
          <div
            className="logo"
            style={{
              width: "50px",
              height: "50px",
              borderRadius: "30px",
              overflow: "hidden",
            }}
          >
            <img style={{ width: "100%", height: "100%" }} src={logo} alt="" />
          </div>
          <div className="brand">
            <div className="">ICT center</div>
            <div className="">Teacher</div>
          </div>
        </div>
        <nav style={{ display: "flex", gap: "2rem" }}>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : "Inactive")}
            to={"/"}
          >
            Home
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : "Inactive")}
            to={"/about"}
          >
            About
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? "isActive" : "Inactive")}
            to={"/profile"}
          >
            Profile
          </NavLink>
        </nav>
      </header>
      <main style={{ minHeight: "78vh", padding: "1vh" }} className="container">
        <Outlet />
      </main>

      <footer>
        <div
          className="footer"
          style={{
            height: "10vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "gray",
          }}
        >
          <p>ICT center. All right reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default MasterLayout;
