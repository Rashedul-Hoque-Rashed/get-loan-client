import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';

AOS.init();

const MainLayout = () => {
    return (
        <div className="overflow-x-hidden">
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;