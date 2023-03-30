import { Outlet } from "react-router-dom";
import NavBar from "../templates/NavBar";
import SideBar from "../templates/SideBar";
import Footer from "../templates/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col relative bg-slate-900">
      <NavBar />
      <div className="flex" style={{minHeight: '80.9vh'}}>
        <div className="fixed h-screen">
          <SideBar />
        </div>
        <div className="container py-16 lg:pl-60 mx-auto">
          <div className="mx-3">
            <Outlet />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
