import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './FeaturedServices.css';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { MdNavigateNext } from "react-icons/md";
import { Link } from "react-router-dom";
import UseServicesData from "../../../Hooks/UseServicesData";


const FeaturedServices = () => {

    const loanData = UseServicesData();


    return (
        <div className="my-24 px-4 md:px-10 max-w-[1620px] mx-auto">
            <SectionHeader
                subTitle='Featured Services'
                title='Empowering You with Loan Knowledge and Comparison Tools'
                description='We are dedicated to providing you with valuable services that simplify your loan search and empower you to make informed borrowing decisions. Our comprehensive range of services'
            ></SectionHeader>
            <Swiper
                breakpoints={{
                    425: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    }
                  }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    loanData.slice(0, 6).map(loan => <SwiperSlide className="px-6 py-10" key={loan._id}>
                        <div className="border-2 p-4 rounded-xl">
                        <div className="px-4 py-8 bg-base-200 text-[#222e48] rounded-xl hover:text-white hover:bg-[#074c3e]">
                            <div className="h-20 w-20 mx-auto bg-white p-3 rounded-full mb-6">
                            <img className="w-6 h-6" src={loan.icons} alt="" />
                            </div>
                            <h2 className="text-2xl font-bold hover:text-[#fcb650] cursor-pointer">{loan.title}</h2>
                            <p className="my-6 min-h-[96px]">{loan.description.length > 100 ? loan.description.slice(0, 100) + '...' : loan.description}</p>
                            <Link to={`/service/details/${loan._id}`}>
        <button className="rounded-full bg-white p-3 text-[#074c3e] hover:bg-[#fcb650] hover:text-white">
            <MdNavigateNext className="w-6 h-6"/>
        </button>
        </Link>
                        </div>
                        </div>
                    </SwiperSlide>)
                }
                <div className="mb-10"></div>

            </Swiper>
        </div>
    );
};

export default FeaturedServices;