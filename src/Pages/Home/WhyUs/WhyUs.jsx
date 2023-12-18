import icon from '../../../assets/icons/title_vector.webp'
import whyUsImg from "../../../assets/images/whyUs.webp"
import { FiCheckCircle } from "react-icons/fi";
import { LuArrowUpRight } from 'react-icons/lu';



const WhyUs = () => {
    return (
        <div className='my-24 overflow-x-hidden'>
            <div className="px-4 md:px-10 py-28 flex items-center justify-center gap-20 flex-col-reverse lg:flex-row max-w-[1620px] mx-auto">
            <div data-aos="fade-right" data-aos-duration="2000" className="flex-1">
                <img src={whyUsImg} alt="" />
            </div>


            <div data-aos="fade-left" data-aos-duration="2000" className="flex-1">
                <div className='max-w-[856px] mx-auto px-4'>
                    <div className='flex items-center gap-4 justify-start'>
                        <img src={icon} alt="" />
                        <h4 className="text-lg md:text-xl font-semibold text-[#074c3e]">Why Choose Us</h4>
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 mb-4 md:mb-6 leading-snug text-[#222e48]">Experience Excellence in Loan Review and Comparison</h2>
                    <p className="mb-6 text-[#404A60]">Our dedicated team of experts conducts thorough research and analysis to provide you with comprehensive and unbiased reviews of various loan options.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#404A60] text-base font-semibold my-8 px-4">
                    <div className="flex items-center gap-2">
                        <FiCheckCircle className="w-6 h-6 text-[#074c3e]" />
                        <h6>Comprehensive and Reviews</h6>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiCheckCircle className="w-6 h-6 text-[#074c3e]" />
                        <h6>Expert Guidance and Insights</h6>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiCheckCircle className="w-6 h-6 text-[#074c3e]" />
                        <h6>User-Friendly Comparison</h6>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiCheckCircle className="w-6 h-6 text-[#074c3e]" />
                        <h6>Trusted User Reviews</h6>
                    </div>
                </div>
                <div className='px-4'>
                <button className="bg-[#074c3e] w-fit text-white border border-[#074c3e] rounded-full px-6 py-3 text-xs md:text-base font-semibold hover:text-[#074c3e] hover:bg-white flex items-center gap-2">
                Read On
                <LuArrowUpRight className='w-6 h-6'/>
                </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default WhyUs;