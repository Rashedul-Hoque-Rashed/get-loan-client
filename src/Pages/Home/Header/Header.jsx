import icon from '../../../assets/icons/title_vector.webp'
import { CiCalculator2 } from "react-icons/ci";
import { LuArrowUpRight } from "react-icons/lu";
import banner from '../../../assets/images/banner.webp'




const Header = () => {
    return (
        <div className='bg-[#03211b] overflow-x-hidden'>
            <div className="flex flex-col md:flex-row items-center justify-center px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                <div data-aos="fade-right" data-aos-duration="2000" className="flex-1">
                    <div className='flex items-center gap-4'>
                        <img src={icon} alt="" />
                        <h4 className="text-xl lg:text-2xl font-semibold text-[#fcb650]">Compare and Choose the Best Loan</h4>
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">Find the <span className="text-[#fcb650]">Perfect</span>Loan for Your Needs</h2>
                    <p className="text-lg lg:text-xl font-semibold mb-6 text-gray-400">Welcome to Finview, your trusted resource for financial loan reviews and comparisons. Our dedicated team of experts analyzes various loan</p>
                    <div className="flex gap-4">
                        <button className="bg-[#074c3e] w-fit text-white border border-[#074c3e] rounded-full px-6 py-3 text-xs md:text-base font-semibold hover:border-white hover:text-[#074c3e] hover:bg-white flex items-center gap-2">
                            Loan Calculator
                            <CiCalculator2 className='w-6 h-6' />
                        </button>
                        <button className="text-[#fcb650] w-fit border border-[#fcb650] rounded-full px-6 py-3 text-xs md:text-base font-semibold hover:border-[#074c3e] hover:text-white hover:bg-[#074c3e] flex items-center gap-2">
                            About us
                            <LuArrowUpRight className='w-6 h-6' />
                        </button>
                    </div>
                </div>
                <div data-aos="fade-left" data-aos-duration="2000" className='flex-1'>
                    <img src={banner} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;