import SectionHeader from "../../../Components/SectionHeader/SectionHeader";


const AskedQuestions = () => {

    const faqData = [
        {
            "question": "What types of loans do you offer?",
            "answer": "We offer a variety of loans, including personal loans, home loans, car loans, and business loans."
        },
        {
            "question": "How can I apply for a loan?",
            "answer": "You can easily apply for a loan through our online application process on our website. Simply fill out the required information, and our team will guide you through the rest of the process."
        },
        {
            "question": "What are the eligibility criteria for obtaining a loan?",
            "answer": "Eligibility criteria may vary depending on the type of loan. Generally, factors such as credit score, income, and employment history are considered. Specific requirements will be outlined during the application process."
        },
        {
            "question": "How long does it take to get approved for a loan?",
            "answer": "The approval process varies based on the type of loan and the completeness of your application. Typically, you can expect a response within a few business days."
        },
        {
            "question": "What is the maximum loan amount I can qualify for?",
            "answer": "The maximum loan amount depends on several factors, including your creditworthiness, income, and the type of loan you are applying for. During the application process, you will receive information about the approved loan amount."
        },
        {
            "question": "Can I apply for a loan if I have bad credit?",
            "answer": "Yes, we consider applicants with various credit histories. However, the terms and interest rates may vary based on your credit score. We encourage you to apply, and our team will work with you to find suitable options."
        },
        {
            "question": "What is the interest rate on your loans?",
            "answer": "Interest rates are determined based on various factors, including market conditions, your credit score, and the type of loan. Specific details on interest rates will be provided to you during the application process."
        },
        {
            "question": "Is there a penalty for early loan repayment?",
            "answer": "No, we do not charge penalties for early loan repayment. In fact, we encourage responsible financial behavior and offer flexibility for borrowers who wish to pay off their loans ahead of schedule."
        },
        {
            "question": "What documents are required for the loan application?",
            "answer": "The required documents may vary depending on the type of loan. Generally, you will need proof of identity, income documents, and other relevant financial information. Specific document requirements will be communicated during the application process."
        },
        {
            "question": "How can I check the status of my loan application?",
            "answer": "You can check the status of your loan application by logging into your account on our website. Additionally, our customer support team is available to provide updates and answer any questions you may have."
        }
    ]

    return (
        <div data-aos="zoom-in" data-aos-duration="2000" className="my-24 px-4 md:px-10 max-w-[1620px] mx-auto overflow-x-hidden">

            <SectionHeader
                subTitle='Frequently Asked Questions'
                title='Find Answers to Common Questions'
                description='We have compiled a list of frequently asked questions to provide you with quick and helpful answers. If you have a question that is not addressed below'
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16">
                {
                    faqData.map(faq => <details key={faq.question} className="w-full rounded-xl bg-base-200">
                        <summary className="px-6 py-10 text-[#222e48] text-xl font-semibold">
                            {faq.question}
                        </summary>
                        <p className="px-6 py-10 pt-0 ml-4 -mt-4 text-[#222e48] text-lg font-medium">
                            {faq.answer}
                        </p>
                    </details>)
                }
            </div>


        </div>
    );
};

export default AskedQuestions;