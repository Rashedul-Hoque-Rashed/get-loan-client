import AboutUs from "../AboutUs/AboutUs";
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
        </div>
    );
};

export default Home;