import icon from '../../assets/icons/title_vector.webp'

const Header = () => {
    return (
        <div className="flex items-center justify-center bg-[#03211b] px-40 pt-32 pb-28 gap-10">
            <div className="">
                <div className='flex items-center gap-4'>
                    <img src={icon} alt="" />
                <h4 className="text-2xl font-semibold text-[#fcb650]">Compare and Choose the Best Loan</h4>
                </div>
                <h2 className="text-5xl font-bold my-6 leading-snug text-white">Find the <span className="text-[#fcb650]">Perfect</span>Loan for Your Needs</h2>
                <p className="text-xl font-semibold mb-6 text-gray-400">Welcome to Finview, your trusted resource for financial loan reviews and comparisons. Our dedicated team of experts analyzes various loan</p>
                <button className="bg-[#074c3e] text-white border border-[#074c3e] rounded-3xl mr-4 px-6 py-3 font-semibold hover:border-white hover:text-[#074c3e] hover:bg-white">
                Loan Calculator
                </button>
                <button className="text-[#fcb650] border border-[#fcb650] rounded-3xl px-6 py-3 font-semibold hover:border-[#074c3e] hover:text-white hover:bg-[#074c3e]">
                About us
                </button>
            </div>
            <div>
<img className="h-[500px] w-[900px]" src="https://finview-bootstrap.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fhero_img.8f43f92c.png&w=750&q=75" alt="" />
            </div>
        </div>
    );
};

export default Header;