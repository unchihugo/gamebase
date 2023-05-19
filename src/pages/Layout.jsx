import { Outlet, useLocation } from "react-router-dom";
import NavBar from "../templates/NavBar";
import Footer from "../templates/Footer";
import "../index.css";

const Layout = () => {
  const location = useLocation();

  return (
    <div className="flex flex-col relative bg-slate-900">
      <NavBar />
      {location.pathname !== "/landing" ? (
        <div className="flex" style={{ minHeight: "80.9vh" }}>
          <div className="flex-1 container py-16 mx-auto">
            <div className="mx-3">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="flex-1" style={{ minHeight: "80.9vh" }}>
          <Outlet />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Layout;
