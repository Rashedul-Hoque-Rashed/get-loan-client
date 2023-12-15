import { MdNavigateNext } from 'react-icons/md';
import banner from '../../assets/images/service_banner.webp'
import { Link } from 'react-router-dom';
import UseServicesData from '../../Hooks/UseServicesData';

const Services = () => {


    const servicesData = UseServicesData();


    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">Services</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; <span className="text-[#fcb650]">Services</span></p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className=''>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
            <div className='px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
{
    servicesData.map(loan => <div data-aos="zoom-in" data-aos-duration="2000" key={loan._id} className="border-2 p-4 rounded-xl text-center">
    <div className="px-4 py-8 bg-base-200 text-[#222e48] rounded-xl hover:text-white hover:bg-[#074c3e]">
        <div className="h-20 w-20 mx-auto bg-white p-3 rounded-full mb-6">
        <img className="w-16 h-16" src={loan.icons} alt="" />
        </div>
        <h2 className="text-2xl font-bold hover:text-[#fcb650] cursor-pointer">{loan.title}</h2>
        <p className="my-6 min-h-[96px] px-6">{loan.description.length > 100 ? loan.description.slice(0, 100) + '...' : loan.description}</p>
        <Link to={`/service/details/${loan._id}`}>
        <button className="rounded-full bg-white p-3 text-[#074c3e] hover:bg-[#fcb650] hover:text-white">
            <MdNavigateNext className="w-6 h-6"/>
        </button>
        </Link>
    </div>
    </div>)
}
            </div>
        </div>
    );
};

export default Services;