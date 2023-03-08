import {Outlet} from "react-router-dom";
import NavBar from '../templates/NavBar';
import SideBar from "../templates/SideBar";

const Layout = () => {
    return (
<div className='flex flex-col relative'>
    <NavBar/>
<div className='flex min-h-screen'>
<div className='fixed h-screen'>
  <SideBar/>
</div>

<div className='container mx-auto pt-16 lg:pl-60'>
    <Outlet/>
    </div>
    </div>
    </div>
 );
};

export default Layout;