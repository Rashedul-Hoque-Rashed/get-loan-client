import contactBanner from '../../assets/images/contact_banner.webp'

const Contact = () => {
    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">Services</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; <span className="text-[#fcb650]">Contact</span></p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className=''>
                        <img src={contactBanner} alt="" />
                    </div>
                </div>
            </div>
            <div className='px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto grid grid-cols-1 md:grid-cols-3'>
                <div className='col-span-2 bg-base-200 rounded-xl p-6'>
                    <h2 className='text-4xl font-bold text-[#222E48] pb-6 border-b-4 border-dashed'>
                        Get in touch with us.
                    </h2>
                    <form className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                </div>
                <div className='col-span-1'>

                </div>
            </div>
        </div>
    );
};

export default Contact;