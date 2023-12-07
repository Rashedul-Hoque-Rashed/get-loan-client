import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.webp"
import { useEffect, useState } from "react";
import { LuLogIn } from "react-icons/lu";


const Navbar = () => {


    const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);





    const navLink = <>
        <NavLink
            to="/"
            className={({ isActive }) =>
             isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            Home
        </NavLink>
        <NavLink
            to="/services"
            className={({ isActive }) =>
             isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            Services
        </NavLink>
        <NavLink
            to="/news"
            className={({ isActive }) =>
             isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            News
        </NavLink>
        <NavLink
            to="/about"
            className={({ isActive }) =>
             isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            About
        </NavLink>
        <NavLink
            to="/contact"
            className={({ isActive }) =>
             isActive ? "mr-6 text-[#fcb650] text-lg font-semibold" : "mr-6 text-white text-lg font-semibold"
            }
        >
            Contact
        </NavLink>
        
    </>;





    return (
        <div className={`navbar fixed max-w-[1620px] px-4 md:px-10 py-4 md:py-6 z-10 ${
            isScrolled ? 'bg-black' : 'bg-none'
          }`}>
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost text-white lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52">
                        <li>{navLink}</li>
                    </ul>
                </div>
                <Link>
                <img src={logo} alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className=" px-1">
                    <li>{navLink}</li>
                </ul>
            </div>
            <div className="navbar-end">
                <Link to='/login'>
                <button className="bg-[#074c3e] text-white border border-[#074c3e] rounded-3xl mr-4 px-6 py-3 text-xs md:text-base font-semibold hover:border-white hover:text-[#074c3e] hover:bg-white flex items-center gap-2">
                Sing In
                <LuLogIn className="w-6 h-6"/>
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;