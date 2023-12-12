import logo from "../../assets/images/logo.webp"
import { FaFacebook, FaInstagram, FaLinkedin, FaPinterest, FaTwitter } from "react-icons/fa";
import { BiSolidPhoneCall } from "react-icons/bi";
import { HiOutlineMailOpen } from "react-icons/hi";
import { IoLocationOutline } from "react-icons/io5";
import { Link } from "react-router-dom";




const Footer = () => {
  return (
    <div className="bg-[#03211b]">
      <footer className="footer py-20 px-4 md:px-10 max-w-[1620px] mx-auto">
        <nav>
          <img src={logo} alt="" />
          <p className="text-white max-w-xs font-semibold my-4">Welcome to Finview, your trusted resource for financial loan reviews and comparisons. Our dedicated team of experts analyzes</p>
          <div className="flex items-center gap-3">
            <FaFacebook className="w-10 h-10 text-white p-2 rounded-full border border-[#074c3e] hover:bg-[#074c3e]" />
            <FaTwitter className="w-10 h-10 text-white p-2 rounded-full border border-[#074c3e] hover:bg-[#074c3e]" />
            <FaPinterest className="w-10 h-10 text-white p-2 rounded-full border border-[#074c3e] hover:bg-[#074c3e]" />
            <FaLinkedin className="w-10 h-10 text-white p-2 rounded-full border border-[#074c3e] hover:bg-[#074c3e]" />
            <FaInstagram className="w-10 h-10 text-white p-2 rounded-full border border-[#074c3e] hover:bg-[#074c3e]" />
          </div>
        </nav>
        <nav>
          <header className="text-2xl font-bold text-white mb-4">Contact</header>
          <div className="flex items-center gap-3">
            <BiSolidPhoneCall className="w-10 h-10 text-white p-2 rounded-full border border-[#074c3e] hover:bg-[#074c3e]" />
            <h4 className="text-white cursor-pointer text-lg font-semibold hover:text-[#fcb650]">+1 234 567 891</h4>
          </div>
          <div className="flex items-center gap-3 my-2">
            <HiOutlineMailOpen className="w-10 h-10 text-white p-2 rounded-full border border-[#074c3e] hover:bg-[#074c3e]" />
            <h4 className="text-white cursor-pointer text-lg font-semibold hover:text-[#fcb650]">info@example.com</h4>
          </div>
          <div className="flex items-center gap-3">
            <IoLocationOutline className="w-10 h-10 text-white p-2 rounded-full border border-[#074c3e] hover:bg-[#074c3e]" />
            <h4 className="text-white cursor-pointer text-lg font-semibold hover:text-[#fcb650]">31 Brandy Way, Sutton, SM2 6SE</h4>
          </div>
        </nav>
        <nav>
          <header className="text-2xl font-bold text-white mb-4">Quick Link</header>
          <Link to='/about' className="text-white cursor-pointer text-lg font-semibold hover:text-[#fcb650]">About us</Link>
          <Link to='/loanReviews' className="text-white cursor-pointer text-lg font-semibold hover:text-[#fcb650]">Loan Reviews</Link>
          <Link to='/loanComparison' className="text-white cursor-pointer text-lg font-semibold hover:text-[#fcb650]">Loan Comparison</Link>
          <Link to='/faq' className="text-white cursor-pointer text-lg font-semibold hover:text-[#fcb650]">FAQs</Link>
          <Link to='/blog' className="text-white cursor-pointer text-lg font-semibold hover:text-[#fcb650]">Blog</Link>
        </nav>
      </footer>
      <footer className="flex px-4 md:px-10 py-4 border-t border-[#ffffff1e] items-center flex-col-reverse md:flex-row justify-between gap-6 max-w-[1620px] mx-auto">
        <aside className="items-center grid-flow-col">
          <p className="text-white font-semibold">Copyright © {new Date().getFullYear()} <span className="text-[#fcb650]">FINVIEW</span>.</p>
        </aside>
        <nav className="md:place-self-center md:justify-self-end">
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to='/help&support' className="text-white cursor-pointer text-sm font-semibold hover:text-[#fcb650]">Help & Support</Link>
            <Link to='/privacyPolicy' className="text-white cursor-pointer text-sm font-semibold hover:text-[#fcb650]">Privacy policy</Link>
            <Link to='/terms&conditions' className="text-white cursor-pointer text-sm font-semibold hover:text-[#fcb650]">Terms & Conditions</Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;