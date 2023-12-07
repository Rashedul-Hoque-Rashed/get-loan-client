import icon from '../../assets/icons/title_vector.webp'
import PropTypes from 'prop-types';


const SectionHeader = ({ subTitle, title, description }) => {
    return (
        <div className='text-center max-w-[856px] mx-auto px-4'>
            <div className='flex items-center gap-4 justify-center'>
                <img src={icon} alt="" />
                <h4 className="text-xl lg:text-2xl font-semibold text-[#074c3e]">{subTitle}</h4>
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mt-4 mb-4 md:mb-6 leading-snug text-[#222e48]">{title}</h2>
            <p className="md:text-lg mb-6 text-[#404A60]">{description}</p>
        </div>
    );
};

SectionHeader.propTypes = {
    subTitle: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default SectionHeader;