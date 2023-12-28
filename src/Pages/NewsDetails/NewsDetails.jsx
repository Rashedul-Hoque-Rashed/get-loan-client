import { useLoaderData } from "react-router-dom";
import banner from '../../assets/images/news_banner.webp'
import { GoCommentDiscussion } from "react-icons/go";
import { FaRegCalendarAlt, FaRegUserCircle } from "react-icons/fa";


const NewsDetails = () => {

    const news = useLoaderData();

    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">News Details</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; News &gt; <span className="text-[#fcb650]">News Details</span></p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className=''>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto">
                <div key={news._id} className='bg-base-200 rounded-xl pb-6'>
                    <img src={news.img} alt="" className='rounded-t-xl' />
                    <div className='px-4'>
                        <div className='flex flex-wrap items-center gap-4 mt-6 mb-2
                        '>
                            <p className='text-[#222e48] text-sm flex items-center gap-1'>
                                <FaRegCalendarAlt className='text-[#074c3e]' />
                                {news.publishedDate}</p> /
                            <p className='text-[#222e48] text-sm flex items-center gap-1'>
                                <FaRegUserCircle className='text-[#074c3e]' />
                                {news.userRole}</p> /
                            <p className='text-[#222e48] text-sm flex items-center  gap-1'>
                                <GoCommentDiscussion className='text-[#074c3e]' />
                                {news.comments.length} Comments</p>

                        </div>
                        <h2 className='text-xl font-bold text-[#222E48] mb-4'>{news.title}</h2>
                        <hr />
                        <p className='text-[#222e48] my-4'>
                            {
                                news.descriptions
                            }
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;