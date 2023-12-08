import AboutUs from "../AboutUs/AboutUs";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import Header from "../Header/Header";
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
        </div>
    );
};

export default Home;