import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
// import './FeaturedServices.css';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { FaQuoteRight } from "react-icons/fa";
import Rating from 'react-rating';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';


const Testimonials = () => {

    const reviewData = [
        {
            "name": "Sarah Johnson",
            "email": "sarah.j@example.com",
            "img": "https://i.ibb.co/1G0ZVfs/p1.jpg",
            "rating": 4.7,
            "details": "I had an excellent experience with the loan services provided. The process was smooth, and the team was very helpful throughout."
        },
        {
            "name": "Alex Carter",
            "email": "alex.c@example.com",
            "img": "https://i.ibb.co/S0MbJbG/p2.jpg",
            "rating": 4.5,
            "details": "The loan application was quick, and I received approval faster than expected. Great rates and professional service."
        },
        {
            "name": "Megan Smith",
            "email": "megan.s@example.com",
            "img": "https://i.ibb.co/8mpTSJs/p3.jpg",
            "rating": 4.8,
            "details": "I appreciate the transparency in the loan terms. The team communicated clearly, and I felt confident throughout the entire process."
        },
        {
            "name": "Robert Davis",
            "email": "robert.d@example.com",
            "img": "https://i.ibb.co/HzdfFwS/p4.jpg",
            "rating": 4.2,
            "details": "The loan officer was knowledgeable and guided me through the options available. The application was straightforward, and I am satisfied with the terms."
        },
        {
            "name": "Emily Turner",
            "email": "emily.t@example.com",
            "img": "https://i.ibb.co/SNkTYRL/p5.jpg",
            "rating": 4.6,
            "details": "I had a positive experience with the loan services. The team was responsive, and the terms were competitive. Would recommend."
        },
        {
            "name": "David Miller",
            "email": "david.m@example.com",
            "img": "https://i.ibb.co/RQr1DqZ/p7.jpg",
            "rating": 4.4,
            "details": "The loan approval process was quick and hassle-free. Competitive rates and friendly customer service. Overall, a great experience."
        },
        {
            "name": "Olivia Reed",
            "email": "olivia.r@example.com",
            "img": "https://i.ibb.co/tCW7XS1/p6.jpg",
            "rating": 4.9,
            "details": "I am impressed with the efficiency of the loan process. The team provided clear information, and I am satisfied with the terms offered."
        },
        {
            "name": "Jake Wilson",
            "email": "jake.w@example.com",
            "img": "https://i.ibb.co/VqfzMpz/p8.jpg",
            "rating": 4.7,
            "details": "Applying for a loan was straightforward, and the team was responsive to my queries. The interest rates were competitive, and I am happy with the service."
        },
        {
            "name": "Sophie Turner",
            "email": "sophie.t@example.com",
            "img": "https://i.ibb.co/2KknmJC/p9.jpg",
            "rating": 4.5,
            "details": "I had a positive experience with the loan services. The team was professional, and the application process was efficient. Would recommend to others."
        },
        {
            "name": "Daniel Evans",
            "email": "daniel.e@example.com",
            "img": "https://i.ibb.co/Wv5vYpz/p10.jpg",
            "rating": 4.8,
            "details": "The loan terms were fair, and the team was helpful in guiding me through the process. I am satisfied with the service provided."
        }
    ]



    return (
        <div data-aos="zoom-out" data-aos-duration="2000" className="my-24 px-4 md:px-10 max-w-[1620px] mx-auto overflow-x-hidden">
            <SectionHeader
                subTitle='Client Testimonials'
                title='Success Stories Shared by Our Customers'
                description='Feel free to customize the text with actual client testimonials, ensuring you have their permission to use their names and occupations'
            ></SectionHeader>
            <Swiper
                breakpoints={{
                    425: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    768: {
                        slidesPerView: 1,
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 2,
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
                    reviewData.map(review => <SwiperSlide className="px-6 py-10" key={review.name}>
                        <div className="border-2 p-4 rounded-xl hover:border-black flex">
                            <div className="px-4 py-8 bg-base-200 rounded-xl text-start">
                                <Rating
                                    initialRating={review.rating}
                                    emptySymbol={<AiOutlineStar className="text-orange-300 w-8 h-8" />}
                                    fullSymbol={<AiFillStar className="text-orange-300 w-8 h-8" />}
                                ></Rating>
                                <p className="text-lg text-[#222e48] my-6 text-start min-h-[100px]">
                                    {review.details}
                                </p>
                                <div className="flex flex-col-reverse md:flex-row items-center justify-between">
                                    <div className="flex flex-col md:flex-row items-center gap-3">
                                        <div className="w-14 h-14">
                                        <img src={review.img} alt="" className="rounded-full " />
                                        </div>
                                        <div className="text-start text-[#222e48]">
                                            <h4 className="text-xl font-semibold mb-2">{review.name}</h4>
                                            <h6 className="font-medium">{review.email}</h6>
                                        </div>
                                    </div>
                                    <div>
                                        <FaQuoteRight className="w-14 h-14 text-base-300" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>)
                }
                <div className="mb-10"></div>

            </Swiper>
        </div>
    );
};

export default Testimonials;