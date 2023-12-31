import { LuArrowUpRight } from 'react-icons/lu';
import banner from '../../assets/images/faq_banner.webp'
import loginImg from '../../assets/images/sign_up.webp'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { IoMdEye } from "react-icons/io";
import { IoMdEyeOff } from "react-icons/io";


const Login = () => {

    const [showPass, setShowPass] = useState(false);

    return (
        <div>
            <div className='bg-[#03211b] overflow-x-hidden'>
                <div className="flex flex-col md:flex-row items-center justify-between px-4 md:px-10 pt-32 pb-28 gap-10 max-w-[1620px] mx-auto">
                    <div data-aos="fade-right" data-aos-duration="2000" className="">
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug text-white">Sing In</h2>
                        <p className="text-lg lg:text-xl font-semibold mb-6 text-white">Home &gt; <span className="text-[#fcb650]">Sing In</span></p>
                    </div>
                    <div data-aos="fade-left" data-aos-duration="2000" className=''>
                        <img src={banner} alt="" />
                    </div>
                </div>
            </div>
            <div className="hero px-4 md:px-10 pt-32 pb-28 max-w-[1620px] mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse gap-20">
                    <div data-aos="fade-left" data-aos-duration="2000" className="flex-1">
                        <img src={loginImg} alt="" />
                    </div>
                    <div data-aos="fade-right" data-aos-duration="2000" className="card shrink-0 w-full shadow-2xl bg-base-100 flex-1">
                        <h4 className='px-8 text-2xl font-semibold text-[#222E48] mt-6 mb-3'>Welcome Back!</h4>
                        <h6 className='px-8 text-[#222E48] font-medium'>Sign in to your account and join us</h6>
                        <form className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="Enter Your Email" className="input input-bordered rounded-full" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPass ? 'text' : 'password'} name='password' placeholder="Enter Your Password" className="input input-bordered rounded-full" required />
                                <button onClick={() => setShowPass(!showPass)} className='absolute right-4 top-12'>
                                {
                                    showPass ? <IoMdEye className='text-[#074c3e] w-6 h-6'/> : <IoMdEyeOff className='text-[#074c3e] w-6 h-6'/>
                                }
                                </button>
                            </div>
                            <p className='mx-1 text-[#222E48]'>Do you new here? <Link to='/register' className='text-[#074c3e] font-medium hover:underline'>
                                SignUp
                            </Link></p>
                            <div className="form-control mt-6">
                                <button className="btn text-[#074c3e] text-start border border-[#074c3e] rounded-full px-6 py-3 flex items-center gap-4 hover:text-white hover:bg-[#074c3e]">
                                    Login
                                    <LuArrowUpRight className='w-6 h-6' />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;