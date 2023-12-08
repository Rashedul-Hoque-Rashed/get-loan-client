import icon from '../../../assets/icons/title_vector.webp'
import aboutUsImg from "../../../assets/images/about_us.webp"
import { LuArrowUpRight } from 'react-icons/lu';
import icon2 from '../../../assets/icons/icon2.png'
import icon3 from '../../../assets/icons/icon3.png'
import icon5 from '../../../assets/icons/icon5.png'
import icon6 from '../../../assets/icons/icon6.png'

const AboutUs = () => {
    return (
        <div className='my-24 bg-gradient-to-r from-[#FDF7ED] to-[#E6ECEB] '>
            <div className="px-4 md:px-10 py-28 flex items-center justify-center gap-20 flex-col-reverse lg:flex-row max-w-[1620px] mx-auto">

                <div className="flex-1">
                    <div className='max-w-[856px] mx-auto px-4'>
                        <div className='flex items-center gap-4 justify-start'>
                            <img src={icon} alt="" />
                            <h4 className="text-lg md:text-xl font-semibold text-[#074c3e]">About Us</h4>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 mb-4 md:mb-6 leading-snug text-[#222e48]">Your Trusted Source for Loan Reviews and Comparison</h2>
                        <p className="mb-6 text-[#404A60]">We are dedicated to providing you with a reliable and user-friendly platform for loan reviews and comparison. With a mission to simplify the loan selection</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#404A60] text-base font-semibold my-8 px-4">
                        <div className="flex items-center gap-3">
                            <img src={icon5} alt="" className='w-16 h-16' />
                            <div>
                                <h4 className='text-xl font-semibold mb-2'>Expertise & Objectivity</h4>
                                <p className='text-sm font-normal'>With years of experience in the financial industry</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={icon6} alt="" className='w-16 h-16' />
                            <div>
                                <h4 className='text-xl font-semibold mb-2'>Loan Database</h4>
                                <p className='text-sm font-normal'>With years of experience in the financial industryWe have curated a comprehensive database of loan products</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={icon2} alt="" className='w-16 h-16' />
                            <div>
                                <h4 className='text-xl font-semibold mb-2'>Transparent Comparison</h4>
                                <p className='text-sm font-normal'>Our user-friendly loan comparison tools allow you to effortlessly</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <img src={icon3} alt="" className='w-16 h-16' />
                            <div>
                                <h4 className='text-xl font-semibold mb-2'>Reviews and Ratings</h4>
                                <p className='text-sm font-normal'>We pride ourselves on providing unbiased loan reviews</p>
                            </div>
                        </div>

                    </div>
                    <div className='px-4'>
                        <button className="bg-[#074c3e] w-fit text-white border border-[#074c3e] rounded-full px-6 py-3 text-xs md:text-base font-semibold hover:text-[#074c3e] hover:bg-white flex items-center gap-2">
                            Read On
                            <LuArrowUpRight className='w-6 h-6' />
                        </button>
                    </div>
                </div>


                <div className="flex-1">
                    <img src={aboutUsImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default AboutUs;