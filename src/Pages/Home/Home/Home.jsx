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
        </div>
    );
};

export default Home;