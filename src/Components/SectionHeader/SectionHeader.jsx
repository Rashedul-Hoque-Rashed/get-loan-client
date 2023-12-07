import icon from '../../assets/icons/title_vector.webp'

const SectionHeader = ({ subTitle, title, description }) => {
    return (
        <div className='text-center max-w-5xl mx-auto'>
            <div className='flex items-center gap-4 justify-center'>
                <img src={icon} alt="" />
                <h4 className="text-xl lg:text-2xl font-bold text-[#074c3e]">{subTitle}</h4>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold my-6 leading-snug">{title}</h2>
            <p className="text-lg lg:text-xl mb-6 text-gray-400">{description}</p>
        </div>
    );
};

export default SectionHeader;