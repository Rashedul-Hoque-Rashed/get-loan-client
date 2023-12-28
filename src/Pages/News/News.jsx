import { useEffect, useState } from 'react';
import banner from '../../assets/images/news_banner.webp'
import UseAxios from './../../Hooks/UseAxios';
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaRegUserCircle } from "react-icons/fa";
import { GoCommentDiscussion } from "react-icons/go";
import { Link } from 'react-router-dom';
import { LuArrowUpRight } from 'react-icons/lu';


const News = () => {

    const [newses, setNewses] = useState([]);
    const axios = UseAxios();
    useEffect(() => {
        axios.get('/newses')
            .then(res => {
                setNewses(res.data)
            })
    }, [axios])

    newses.forEach(entry => {
        const dateObject = new Date(entry.publishedDate);
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = dateObject.toLocaleDateString(undefined, options);
        entry.publishedDate = formattedDate;
    });


    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">News</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; <span className="text-[#fcb650]">News</span></p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className=''>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
            <div className='px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6'>
                {
                    newses.map(news => <div key={news._id} className='bg-base-200 rounded-xl pb-6'>
                        <img src={news.img} alt="" className='rounded-t-xl w-full h-96' />
                        <div className='px-4'>
                        <div className='flex flex-wrap items-center gap-4 mt-6 mb-2
                        '>
                            <p className='text-[#222e48] text-sm flex items-center gap-1'>
                                <FaRegCalendarAlt className='text-[#074c3e]'/>
                                {news.publishedDate}</p> /
                            <p className='text-[#222e48] text-sm flex items-center gap-1'>
                                <FaRegUserCircle className='text-[#074c3e]'/>
                                {news.userRole}</p> /
                            <p className='text-[#222e48] text-sm flex items-center  gap-1'>
                                <GoCommentDiscussion className='text-[#074c3e]' />
                                {news.comments.length} Comments</p>

                        </div>
                        <h2 className='text-xl font-bold text-[#222E48] mb-4'>{news.title}</h2> 
                        <hr />
                        <p className='text-[#222e48] my-4'>
                            {
                                news.descriptions.length > 150 ? news.descriptions.slice(0, 150) + '.....' : news.descriptions
                            }
                        </p>
                        <Link to={`/news/${news._id}`}>
                        <button className="bg-[#074c3e] w-fit text-white border border-[#074c3e] rounded-full px-6 py-3 text-xs md:text-base font-semibold hover:text-[#074c3e] hover:bg-white flex items-center gap-2">
                            Read More
                            <LuArrowUpRight className='w-6 h-6' />
                        </button>
                        </Link>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default News;