import OurApp from "../../OurApp/OurApp";
import AboutUs from "../AboutUs/AboutUs";
import FAQ from "../FAQ/FAQ";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import Header from "../Header/Header";
import Testimonials from "../Testimonials/Testimonials";
import WhyUs from "../WhyUs/WhyUs";
import WorkingProcess from "../WorkingProcess/WorkingProcess";


const Home = () => {
    return (
        <div>
            <Header/>
            <FeaturedServices/>
            <WhyUs/>
            <WorkingProcess/>
            <AboutUs/>
            <Testimonials/>
            <OurApp/>
            <FAQ/>
        </div>
    );
};

export default Home;