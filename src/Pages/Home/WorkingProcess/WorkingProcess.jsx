import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import icon1 from '../../../assets/icons/research-and-development.png'
import icon2 from '../../../assets/icons/icon2.png'
import icon3 from '../../../assets/icons/icon3.png'
import icon4 from '../../../assets/icons/icon4.png'


const WorkingProcess = () => {
    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className='my-24 bg-gradient-to-r from-[#FDF7ED] to-[#E6ECEB] overflow-x-hidden'>
            <div className="px-4 md:px-10 py-28 max-w-[1620px] mx-auto">
                <SectionHeader
                    subTitle='Our Working Process'
                    title='Simplified Steps to Find Your Ideal Loan'
                    description='Our working process is designed to make your loan search and selection as seamless as possible.'
                />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-24">
                    <div className="border-2 p-4 rounded-xl hover:border-black">
                        <div className="px-4 py-8 bg-base-200 rounded-xl">
                            <div className="w-fit h-fit mx-auto bg-white p-4 rounded-full mb-8 relative">
                                <div className="p-4 rounded-full border-2 border-dashed border-[#074c3e]">
                                    <img className="w-14 h-14" src={icon1} alt="" />
                                </div>
                                <h2 className="text-white bg-[#074c3e] text-lg font-semibold text-center w-8 h-8 absolute top-0 right-0 rounded-full p-1">01</h2>
                            </div>
                            <h2 className="text-2xl font-bold text-[#222e48] cursor-pointer">Research & Explore</h2>
                            <p className="my-6 text-[#222e48] ">An online quote is an estimate of the cost of a product or service provided</p>
                        </div>
                    </div>
                    <div className="border-2 p-4 rounded-xl hover:border-black">
                        <div className="px-4 py-8 bg-base-200 rounded-xl">
                            <div className="w-fit h-fit mx-auto bg-white p-4 rounded-full mb-8 relative">
                                <div className="p-4 rounded-full border-2 border-dashed border-[#074c3e]">
                                    <img className="w-14 h-14" src={icon2} alt="" />
                                </div>
                                <h2 className="text-white bg-[#074c3e] text-lg font-semibold text-center w-8 h-8 absolute top-0 right-0 rounded-full p-1">02</h2>
                            </div>
                            <h2 className="text-2xl font-bold text-[#222e48] cursor-pointer">Comparison Tools</h2>
                            <p className="my-6 text-[#222e48] ">Picking a product refers to the process a specific from a range</p>
                        </div>
                    </div>
                    <div className="border-2 p-4 rounded-xl hover:border-black">
                        <div className="px-4 py-8 bg-base-200 rounded-xl">
                            <div className="w-fit h-fit mx-auto bg-white p-4 rounded-full mb-8 relative">
                                <div className="p-4 rounded-full border-2 border-dashed border-[#074c3e]">
                                    <img className="w-14 h-14" src={icon3} alt="" />
                                </div>
                                <h2 className="text-white bg-[#074c3e] text-lg font-semibold text-center w-8 h-8 absolute top-0 right-0 rounded-full p-1">03</h2>
                            </div>
                            <h2 className="text-2xl font-bold text-[#222e48] cursor-pointer">Reviews & Feedback</h2>
                            <p className="my-6 text-[#222e48] ">Product packaging refers to the materials and design used to protect</p>
                        </div>
                    </div>
                    <div className="border-2 p-4 rounded-xl hover:border-black">
                        <div className="px-4 py-8 bg-base-200 rounded-xl">
                            <div className="w-fit h-fit mx-auto bg-white p-4 rounded-full mb-8 relative">
                                <div className="p-4 rounded-full border-2 border-dashed border-[#074c3e]">
                                    <img className="w-14 h-14" src={icon4} alt="" />
                                </div>
                                <h2 className="text-white bg-[#074c3e] text-lg font-semibold text-center w-8 h-8 absolute top-0 right-0 rounded-full p-1">04</h2>
                            </div>
                            <h2 className="text-2xl font-bold text-[#222e48] cursor-pointer">Secure Your Loan</h2>
                            <p className="my-6 text-[#222e48] ">Product transport refers to the process of products from location</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default WorkingProcess;