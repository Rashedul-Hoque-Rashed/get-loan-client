import { useLoaderData } from "react-router-dom";
import banner from '../../assets/images/service_banner.webp'



const ServicesDetails = () => {

    const details = useLoaderData();

    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">Services</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; Pages &gt; Services &gt; <span className="text-[#fcb650]">Services Details</span></p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className=''>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>

            <div className='px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto'>
                {details.title}
            </div>
        </div>
    );
};

export default ServicesDetails;