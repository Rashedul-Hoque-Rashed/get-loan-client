import banner from '../../assets/images/faq_banner.webp'
import loginImg from '../../assets/images/sign_up.webp'

const Login = () => {
    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">Services</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; <span className="text-[#fcb650]">Sing In</span></p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className=''>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
            <div className="hero px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div className="flex-1 w-full">
                        <img src={loginImg} alt="" />
                    </div>
                    <div className="card shrink-0 w-full shadow-2xl bg-base-100 flex-1">
                        <h4 className='px-8 text-2xl font-semibold text-[#222E48] mt-6 mb-3'>Welcome Back!</h4>
                        <h6 className='px-8 text-[#222E48] font-medium'>Sign in to your account and join us</h6>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter Your Email" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Enter Your Password" className="input input-bordered rounded-full" required />
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;