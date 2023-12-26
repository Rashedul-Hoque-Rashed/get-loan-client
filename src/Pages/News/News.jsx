import { useEffect, useState } from 'react';
import banner from '../../assets/images/news_banner.webp'
import UseAxios from './../../Hooks/UseAxios';

const News = () => {

    const [newses, setNewses] = useState([]);
    const axios = UseAxios();
    useEffect(() => {
        axios.get('/newses')
            .then(res => {
                setNewses(res.data)
            })
    }, [axios])

    console.log(newses)


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
                        newses.map(news => <div key={news._id}>
                            <img src={news.images} alt="" />
                            <h2>{news.title}</h2>
                        </div>)
                    }
                </div>
        </div>
    );
};

export default News;