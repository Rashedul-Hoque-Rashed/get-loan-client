import { useLoaderData } from "react-router-dom";
import banner from '../../assets/images/news_banner.webp'
import { GoCommentDiscussion } from "react-icons/go";
import { FaFacebook, FaLinkedin, FaRegCalendarAlt, FaRegUserCircle, FaTwitter } from "react-icons/fa";


const NewsDetails = () => {

    const news = useLoaderData();

    const shareOnFacebook = () => {
        const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(news.title)}`;
        window.open(facebookShareUrl, "_blank");
    };


    const shareOnTwitter = () => {
        const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(news.title)}`;
        window.open(twitterShareUrl, "_blank");
    };


    const shareOnLinkedIn = () => {
        const linkedInShareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`;
        window.open(linkedInShareUrl, "_blank");
    };

    
    

    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">{news.title}</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; News &gt; <span className="text-[#fcb650]">{news.title}</span></p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className=''>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
            <div className="px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto">
                <div className='rounded-xl pb-6'>
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
                        <h2 className='text-3xl font-bold text-[#222E48] mb-4'>{news.title}</h2>
                        <hr />
                        <p className='text-[#222e48] text-lg font-medium my-10'>
                            {
                                news.descriptions
                            }
                        </p>
                        <hr />
                        <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center gap-4 text-lg font-bold text-[#222e48]">
                                Tags: {
                                    news.tags.map((tag, index) => <p key={index} className="px-4 py-2 bg-[#074c3e] rounded-xl text-white text-base font-medium">
                                        {tag}
                                    </p>)
                                }
                            </div>
                            <div className="flex items-center gap-4 text-[#074c3e]">
                                <p className="text-lg font-bold text-[#222e48]">Share:</p>
                                <FaFacebook onClick={shareOnFacebook} className="w-12 h-12 p-2 border rounded-full border-[#074c3e]"/>
                                <FaTwitter onClick={shareOnTwitter} className="w-12 h-12 p-2 border rounded-full border-[#074c3e]"/>
                                <FaLinkedin onClick={shareOnLinkedIn} className="w-12 h-12 p-2 border rounded-full border-[#074c3e]"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewsDetails;