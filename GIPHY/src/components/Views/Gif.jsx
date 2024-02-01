import PropTypes from 'prop-types';

const Gif = ({gif}) => {

    return (
        <div className='single-gif'>
            <img src={gif.images.fixed_width.url} alt={gif.title} />
        </div>
    )
}

Gif.propTypes = {
    gif: PropTypes.object,
}

export default Gif;