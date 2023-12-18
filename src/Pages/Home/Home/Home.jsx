import AboutUs from "../AboutUs/AboutUs";
import AskedQuestions from "../AskedQuestions/AskedQuestions";
import Calculators from "../Calculators/Calculators";
import FeaturedServices from "../FeaturedServices/FeaturedServices";
import Header from "../Header/Header";
import OurApp from "../OurApp/OurApp";
import Testimonials from "../Testimonials/Testimonials";
import WhyUs from "../WhyUs/WhyUs";
import WorkingProcess from "../WorkingProcess/WorkingProcess";


const Home = () => {
    return (
        <div>
            <Header/>
            <FeaturedServices/>
            <WorkingProcess/>
            <WhyUs/>
            <AboutUs/>
            <Calculators/>
            <Testimonials/>
            <OurApp/>
            <AskedQuestions/>
        </div>
    );
};

export default Home;