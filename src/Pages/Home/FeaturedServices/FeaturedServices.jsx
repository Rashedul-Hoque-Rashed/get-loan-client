import SectionHeader from "../../../Components/SectionHeader/SectionHeader";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './FeaturedServices.css';
import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { MdNavigateNext } from "react-icons/md";


const FeaturedServices = () => {

    const loanData = [
        {
            "title": "Personal Loan",
            "description": "Experience unparalleled financial flexibility with our Personal Loan services. Whether you're planning a dream vacation, consolidating debt, or covering unexpected expenses, our low-interest rates and flexible terms make it easy to achieve your financial goals. Our streamlined approval process ensures you get the funds you need precisely when you need them. Unlock the possibilities with FINVIEW's Personal Loan, designed to empower your financial journey with convenience and reliability.",
            "benefits": [
              "Low-interest rates",
              "Flexible repayment options",
              "Quick approval process"
            ],
            "serviceImage": "personal_loan_image.jpg",
            "benefitImage": "personal_loan_benefits_image.jpg",
            "icons" : "https://i.ibb.co/JKs1rBq/Personal-Loan.png"
          },
          {
            "title": "Home Loan",
            "description": "Transform your homeownership dreams into reality with our competitive Home Loan solutions. Offering fixed and variable rate options along with extended repayment terms, we provide expert guidance throughout the entire process. Whether you're a first-time homebuyer or seeking to refinance, FINVIEW offers tailored solutions for your unique home financing needs. Step into a world of possibilities and secure your future with a Home Loan that aligns with your aspirations.",
            "benefits": [
              "Fixed and variable rate options",
              "Extended repayment terms",
              "Expert guidance throughout the process"
            ],
            "serviceImage": "home_loan_image.jpg",
            "benefitImage": "home_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/fNDPBdj/Home-loan.png"
          },
          {
            "title": "Auto Loan",
            "description": "Drive away in your dream car hassle-free with our Auto Loan options. Benefit from competitive interest rates, flexible loan terms, and a simple application process that puts you behind the wheel in no time. Whether you're eyeing a sleek sports car or a reliable family vehicle, FINVIEW's Auto Loan services are tailored to meet your automotive aspirations with ease and convenience.",
            "benefits": [
              "Competitive interest rates",
              "Flexible loan terms",
              "Simple application process"
            ],
            "serviceImage": "auto_loan_image.jpg",
            "benefitImage": "auto_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/N9nHfZh/Auto-Loan.png"
          },
          {
            "title": "Small Business Loan",
            "description": "Fuel the growth of your business with our tailored Small Business Loan solutions. Gain access to capital for expansion, benefit from customized repayment plans, and receive dedicated business support to propel your enterprise forward. FINVIEW understands the unique financial needs of small businesses, offering a comprehensive solution to drive success and foster long-term prosperity.",
            "benefits": [
              "Capital for expansion",
              "Customized repayment plans",
              "Dedicated business support"
            ],
            "serviceImage": "business_loan_image.jpg",
            "benefitImage": "business_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/drYzNT8/Small-Business-Loan.png"
          },
          {
            "title": "Education Loan",
            "description": "Invest in your future with our Education Loan options, ensuring a smooth academic journey. Benefit from competitive student-friendly rates, deferred repayment options, and quick loan approval. Whether you're pursuing higher education or supporting a loved one's academic endeavors, FINVIEW is your partner in making educational aspirations a reality.",
            "benefits": [
              "Competitive student-friendly rates",
              "Deferred repayment options",
              "Quick loan approval"
            ],
            "serviceImage": "education_loan_image.jpg",
            "benefitImage": "education_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/m9P19kb/Education-Loan.png"
          },
          {
            "title": "Debt Consolidation Loan",
            "description": "Simplify your finances with our Debt Consolidation Loan, merging multiple debts into one manageable payment. Benefit from lower interest rates, reduced monthly payments, and financial counseling support to regain control of your financial well-being. FINVIEW is committed to helping you achieve a debt-free future with a tailored solution designed for your peace of mind.",
            "benefits": [
              "Lower interest rates",
              "Reduced monthly payments",
              "Financial counseling support"
            ],
            "serviceImage": "debt_consolidation_image.jpg",
            "benefitImage": "debt_consolidation_benefits_image.jpg",
            "icons": "https://i.ibb.co/SvPfcMs/Debt-Consolidation-Loan.png"
          },
          {
            "title": "Emergency Cash Loan",
            "description": "Address unexpected financial needs with our Emergency Cash Loan options, providing quick access to funds when you need them the most. Benefit from a fast approval process, flexible repayment terms, and 24/7 customer support to navigate unforeseen financial challenges with confidence. FINVIEW is here to support you in times of urgency with a reliable and accessible financial solution.",
            "benefits": [
              "Fast approval process",
              "Flexible repayment terms",
              "24/7 customer support"
            ],
            "serviceImage": "emergency_cash_loan_image.jpg",
            "benefitImage": "emergency_cash_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/fX7mdFk/Emergency-Cash-Loan.png"
          },
          {
            "title": "Vacation Loan",
            "description": "Plan your dream vacation with our Vacation Loan options, offering competitive rates and easy repayment plans. Benefit from special vacation interest rates, customized loan terms, and travel assistance services to turn your travel dreams into reality. FINVIEW is your partner in creating memorable experiences, ensuring your vacations are stress-free and financially sound.",
            "benefits": [
              "Special vacation interest rates",
              "Customized loan terms",
              "Travel assistance services"
            ],
            "serviceImage": "vacation_loan_image.jpg",
            "benefitImage": "vacation_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/10chbGK/Vacation-Loan.png"
          },
          {
            "title": "Renovation Loan",
            "description": "Transform your space with our Renovation Loan services, providing the funds needed to enhance your home. Benefit from low-interest rates specifically tailored for renovations, flexible budget-friendly terms, and expert renovation guidance to bring your vision to life. FINVIEW is committed to making your home improvement dreams a reality with a personalized and accessible financing solution.",
            "benefits": [
              "Low-interest rates for renovations",
              "Flexible budget-friendly terms",
              "Expert renovation guidance"
            ],
            "serviceImage": "renovation_loan_image.jpg",
            "benefitImage": "renovation_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/hHF9ZLj/Renovation-Loan.png"
          },
          {
            "title": "Green Energy Loan",
            "description": "Contribute to a sustainable future with our Green Energy Loan options, designed to fund eco-friendly projects and improvements. Benefit from special rates for green projects, environmentally conscious financing, and energy-saving consultations to support your commitment to a greener lifestyle. FINVIEW is your partner in building a sustainable future with accessible and responsible financing solutions.",
            "benefits": [
              "Special rates for green projects",
              "Environmentally conscious financing",
              "Energy-saving consultations"
            ],
            "serviceImage": "green_energy_loan_image.jpg",
            "benefitImage": "green_energy_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/d4wRy2X/Green-Energy-Loan.png"
          },
          {
            "title": "Wedding Loan",
            "description": "Celebrate your love without financial stress with our Wedding Loan services, providing funds for your dream wedding. Benefit from wedding-specific loan rates, tailored wedding financing, and personalized wedding planning assistance to ensure your special day is everything you've imagined. FINVIEW is honored to be part of your journey to a joyous and memorable wedding celebration.",
            "benefits": [
              "Wedding-specific loan rates",
              "Tailored wedding financing",
              "Personalized wedding planning assistance"
            ],
            "serviceImage": "wedding_loan_image.jpg",
            "benefitImage": "wedding_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/f9SYVh9/Wedding-Loan.png"
          },
          {
            "title": "Medical Expense Loan",
            "description": "Prioritize your health with our Medical Expense Loan options, ensuring access to necessary funds for medical treatments. Benefit from quick medical loan approval, flexible repayment options, and support for various medical expenses to ease the financial burden during challenging times. FINVIEW is dedicated to supporting your well-being with accessible and compassionate financing solutions.",
            "benefits": [
              "Quick medical loan approval",
              "Flexible repayment options",
              "Support for various medical expenses"
            ],
            "serviceImage": "medical_expense_loan_image.jpg",
            "benefitImage": "medical_expense_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/gZF4z6M/Medical-Expense-Loan.png"
          },
        {
            "title": "Auto Refinancing Loan",
            "description": "Optimize your auto financing with our Auto Refinancing Loan options. If you currently have an auto loan, explore the benefits of refinancing with us. Enjoy lower interest rates, reduced monthly payments, and the potential to save money over the life of your loan. With FINVIEW's Auto Refinancing Loan, take control of your vehicle financing and drive towards a more cost-effective solution tailored to your financial needs.",
            "benefits": [
                "Lower interest rates",
                "Reduced monthly payments",
                "Savings over the life of the loan"
            ],
            "serviceImage": "auto_refinancing_image.jpg",
            "benefitImage": "auto_refinancing_benefits_image.jpg",
            "icons": "https://i.ibb.co/KbTDLLh/Auto-Refinancing-Loan.png"
        },
        {
            "title": "Travel Loan",
            "description": "Embark on your travel adventures with our Travel Loan options, providing the funds needed to explore the world. Whether it's a spontaneous getaway or a meticulously planned expedition, FINVIEW's Travel Loan ensures that finances never limit your travel dreams. Enjoy competitive rates, flexible repayment terms, and the freedom to discover new destinations without compromise.",
            "benefits": [
                "Competitive rates",
                "Flexible repayment terms",
                "Freedom to explore without financial constraints"
            ],
            "serviceImage": "travel_loan_image.jpg",
            "benefitImage": "travel_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/mRj85CK/Travel-Loan.png"
        },
        {
            "title": "Home Equity Loan",
            "description": "Leverage the equity in your home with our Home Equity Loan options. Whether you're renovating your property, consolidating debt, or funding a major expense, tap into the value of your home. Benefit from competitive interest rates, flexible terms, and the potential for tax-deductible interest. With FINVIEW's Home Equity Loan, unlock the financial potential of your home for a variety of needs.",
            "benefits": [
                "Competitive interest rates",
                "Flexible terms",
                "Potential for tax-deductible interest"
            ],
            "serviceImage": "home_equity_loan_image.jpg",
            "benefitImage": "home_equity_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/q92cPyq/Home-Equity-Loan.png"
        },
        {
            "title": "Startup Business Loan",
            "description": "Ignite your entrepreneurial journey with our Startup Business Loan solutions. Whether you're launching a new venture or expanding your startup, secure the capital needed for success. Benefit from customized financing plans, expert business guidance, and the support to turn your startup ideas into a thriving reality. FINVIEW is dedicated to fueling innovation and entrepreneurship with accessible funding options.",
            "benefits": [
                "Customized financing plans",
                "Expert business guidance",
                "Support for startup growth"
            ],
            "serviceImage": "startup_business_loan_image.jpg",
            "benefitImage": "startup_business_loan_benefits_image.jpg",
            "icons": "https://i.ibb.co/MVcs2v6/Startup-Business-Loan.png"
        },
        {
            "title": "Personal Line of Credit",
            "description": "Empower your financial flexibility with our Personal Line of Credit options. Access funds whenever you need them, without the need for a specific purpose. Enjoy the convenience of a revolving line of credit with competitive interest rates and flexible repayment terms. FINVIEW's Personal Line of Credit is the perfect financial tool for ongoing needs and unexpected expenses.",
            "benefits": [
                "Access funds whenever needed",
                "Revolving line of credit",
                "Competitive interest rates"
            ],
            "serviceImage": "personal_line_of_credit_image.jpg",
            "benefitImage": "personal_line_of_credit_benefits_image.jpg",
            "icons": "https://i.ibb.co/zHf5rT6/Personal-Line-of-Credit.png"
        }
        // Add more loan services as needed
    ]


    return (
        <div className="my-24 px-4 md:px-10 max-w-[1620px] mx-auto">
            <SectionHeader
                subTitle='Featured Services'
                title='Empowering You with Loan Knowledge and Comparison Tools'
                description='We are dedicated to providing you with valuable services that simplify your loan search and empower you to make informed borrowing decisions. Our comprehensive range of services'
            ></SectionHeader>
            <Swiper
                breakpoints={{
                    425: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 2,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 3,
                      spaceBetween: 20,
                    }
                  }}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                autoplay={{ delay: 1500, disableOnInteraction: false }}
                modules={[FreeMode, Pagination, Autoplay]}
                className="mySwiper"
            >
                {
                    loanData.map(loan => <SwiperSlide className="px-6 py-10" key={loan.title}>
                        <div className="border-2 p-4 rounded-xl">
                        <div className="px-4 py-8 bg-base-200 text-[#222e48] rounded-xl hover:text-white hover:bg-[#074c3e]">
                            <div className="h-20 w-20 mx-auto bg-white p-3 rounded-full mb-6">
                            <img className="w-6 h-6" src={loan.icons} alt="" />
                            </div>
                            <h2 className="text-2xl font-bold hover:text-[#fcb650] cursor-pointer">{loan.title}</h2>
                            <p className="my-6 min-h-[96px]">{loan.description.length > 100 ? loan.description.slice(0, 100) + '...' : loan.description}</p>
                            <button className="rounded-full bg-white p-3 text-[#074c3e] hover:bg-[#fcb650] hover:text-white">
                                <MdNavigateNext className="w-6 h-6"/>
                            </button>
                        </div>
                        </div>
                    </SwiperSlide>)
                }
                <div className="mb-10"></div>

            </Swiper>
        </div>
    );
};

export default FeaturedServices;