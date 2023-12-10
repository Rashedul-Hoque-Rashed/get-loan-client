import icon from '../../../assets/icons/title_vector.webp'
import { TbPointFilled } from "react-icons/tb";
import { LuArrowUpRight } from 'react-icons/lu';
import { useState } from 'react';
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';


const Calculators = () => {


    const [loanAmount, setLoanAmount] = useState(10000);
    const [loanTerm, setLoanTerm] = useState(1);

    const calculateLoan = () => {
        const monthlyInterestRate = 0.1;
        const totalPayments = loanAmount + (loanAmount * monthlyInterestRate);
        const calculatedMonthlyPayment = (totalPayments / loanTerm);

        return {
            monthlyPayment: calculatedMonthlyPayment.toFixed(2),
            termOfUse: loanTerm,
            totalPayBack: totalPayments,
        };
    };

    const loanResults = calculateLoan();






    return (
        <div className='my-24 '>
            <div className="px-4 md:px-10 py-28 flex items-center justify-center gap-20 flex-col-reverse lg:flex-row max-w-[1620px] mx-auto">
                <div className='flex-1 border-2 p-4 rounded-xl'>
                    <div className=" bg-[#E6ECEB] p-20 rounded-xl">

                        <div className="mb-16">
                            <label htmlFor="loan-amount" className="block text-lg font-semibold mb-6 text-[#222e48]">
                                Loan Amount: ${loanAmount}
                            </label>
                            <InputRange
                                maxValue={100000}
                                minValue={10000}
                                value={loanAmount}
                                onChange={(value) => setLoanAmount(value)}
                            />
                        </div>

                        <div className="mb-16">
                            <label htmlFor="loan-term" className="block text-lg font-semibold mb-6 text-[#222e48]">
                                Loan Term (Months): {loanTerm}
                            </label>
                            <InputRange
                                maxValue={12}
                                minValue={1}
                                value={loanTerm}
                                onChange={(value) => setLoanTerm(value)}
                            />
                        </div>

                        <div className="my-4">
                            <div className="flex justify-between items-center pb-4 mb-8 border-b-2 border-[#404A60]">
                                <p className="text-lg font-semibold text-[#404A60] mb-2">Pay Monthly:</p>
                                <p className="text-lg font-semibold text-[#222e48]">${loanResults.monthlyPayment}</p>
                            </div>
                            <div className="flex justify-between items-center pb-4 mb-8 border-b-2 border-[#404A60]">
                                <p className="text-lg font-semibold text-[#404A60] mb-2">Term of Use (Months):</p>
                                <p className="text-lg font-semibold text-[#222e48]">{loanResults.termOfUse} Months</p>
                            </div>
                            <div className="flex justify-between items-center pb-4">
                                <p className="text-lg font-semibold text-[#404A60] mb-2">Total Pay Back:</p>
                                <p className="text-lg font-semibold text-[#222e48]">${loanResults.totalPayBack}</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex-1">
                    <div className='max-w-[856px] mx-auto px-4'>
                        <div className='flex items-center gap-4 justify-start'>
                            <img src={icon} alt="" />
                            <h4 className="text-lg md:text-xl font-semibold text-[#074c3e]">Loan Calculators</h4>
                        </div>
                        <h2 className="text-xl md:text-2xl lg:text-3xl font-semibold mt-4 mb-4 md:mb-6 leading-snug text-[#222e48]">Empower Yourself with Accurate Loan Estimates</h2>
                        <p className="mb-6 text-[#404A60]">Our loan calculators are powerful tools designed to assist you in making informed financial decisions. Whether you are planning a major purchase, estimating monthly payments</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#404A60] text-base font-semibold my-8 px-4">
                        <div className="flex items-center gap-2">
                            <TbPointFilled className="w-6 h-6 text-[#404a60]" />
                            <h6 className='text-[#404a60] text-xl font-semibold'>Loan Payment Calculator</h6>
                        </div>
                        <div className="flex items-center gap-2">
                            <TbPointFilled className="w-6 h-6 text-[#404a60]" />
                            <h6 className='text-[#404a60] text-xl font-semibold'>Amortization Calculator</h6>
                        </div>
                        <div className="flex items-center gap-2">
                            <TbPointFilled className="w-6 h-6 text-[#404a60]" />
                            <h6 className='text-[#404a60] text-xl font-semibold'>Affordability Calculator</h6>
                        </div>
                        <div className="flex items-center gap-2">
                            <TbPointFilled className="w-6 h-6 text-[#404a60]" />
                            <h6 className='text-[#404a60] text-xl font-semibold'>Interest Calculator</h6>
                        </div>
                    </div>
                    <div className='px-4'>
                        <button className="bg-[#074c3e] w-fit text-white border border-[#074c3e] rounded-full px-6 py-3 text-xs md:text-base font-semibold hover:text-[#074c3e] hover:bg-white flex items-center gap-2">
                            Apply For Loan
                            <LuArrowUpRight className='w-6 h-6' />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculators;
