import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Shared/Navbar";
import Footer from "../Pages/Shared/Footer";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Scroll from "../Components/Scroll/Scroll";


AOS.init();

const MainLayout = () => {
    return (
        <div className="overflow-x-hidden">
            <Scroll/>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default MainLayout;