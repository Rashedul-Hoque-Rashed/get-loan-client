import icon from '../../../assets/icons/title_vector.webp'
import ourApp from "../../../assets/images/ourApp.webp"
import { TbPointFilled } from "react-icons/tb";
import { BiLogoPlayStore } from "react-icons/bi";
import { FaApple } from "react-icons/fa";



const OurApp = () => {
    return (
        <div className='my-24 bg-gradient-to-r from-[#FDF7ED] to-[#E6ECEB] overflow-x-hidden'>
            <div className="px-4 md:px-10 py-28 flex items-center justify-center gap-20 flex-col-reverse lg:flex-row max-w-[1620px] mx-auto">
            <div data-aos="fade-right" data-aos-duration="2000" className="flex-1">
                <img src={ourApp} alt="" />
            </div>


            <div data-aos="fade-left" data-aos-duration="2000" className="flex-1">
                <div className='max-w-[856px] mx-auto px-4'>
                    <div className='flex items-center gap-4 justify-start'>
                        <img src={icon} alt="" />
                        <h4 className="text-lg md:text-xl font-semibold text-[#074c3e]">Download Our Apps</h4>
                    </div>
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 mb-4 md:mb-6 leading-snug text-[#222e48]">Get Our Apps for Easy Financial Management</h2>
                    <p className="mb-6 text-[#404A60]">Take advantage of our convenient mobile apps to access our services anytime, anywhere. Download our apps today and experience the ease of managing your finances</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#404A60] text-base font-semibold my-8 px-4">
                    <div className="flex items-center gap-2">
                        <TbPointFilled className="w-6 h-6 text-[#404a60]" />
                        <h6 className='text-[#404a60] text-xl font-semibold'>Comprehensive and Reviews</h6>
                    </div>
                    <div className="flex items-center gap-2">
                        <TbPointFilled className="w-6 h-6 text-[#404a60]" />
                        <h6 className='text-[#404a60] text-xl font-semibold'>Expert Guidance and Insights</h6>
                    </div>
                    <div className="flex items-center gap-2">
                        <TbPointFilled className="w-6 h-6 text-[#404a60]" />
                        <h6 className='text-[#404a60] text-xl font-semibold'>User-Friendly Comparison</h6>
                    </div>
                    <div className="flex items-center gap-2">
                        <TbPointFilled className="w-6 h-6 text-[#404a60]" />
                        <h6 className='text-[#404a60] text-xl font-semibold'>Trusted User Reviews</h6>
                    </div>
                </div>
                <div className='px-4 flex flex-col md:flex-row items-center gap-4'>
                <button className="text-[#074c3e] text-start w-fit border border-[#074c3e] rounded-full px-6 py-3 flex items-center gap-4 hover:text-white hover:bg-[#074c3e]"> 
                <BiLogoPlayStore className='w-10 h-10' />
                <p className='text-lg md:text-xl font-bold'>
                    <span className='text-xs font-medium'>GET IT ON</span> <br />
                Google Play
                </p>
                </button>
                <button className="text-[#074c3e] text-start w-fit border border-[#074c3e] rounded-full px-6 py-3 flex items-center gap-4 hover:text-white hover:bg-[#074c3e]"> 
                <FaApple className='w-10 h-10' />
                <p className='text-lg md:text-xl font-bold'>
                    <span className='text-xs font-medium'>Download on the</span> <br />
                App Store
                </p>
                </button>
                </div>
            </div>
        </div>
        </div>
    );
};

export default OurApp;
