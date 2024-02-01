import PropTypes from 'prop-types';

// import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Gif = ({ gif }) => {
    const navigate = useNavigate();
    // const [clicked, setClicked] = useState(false)

    // const handleClick = () => {

    //     setClicked(!clicked)

    // };

    return (
        <>
            <div className='single-gif'>
                <img onClick={() => navigate(`/details/${gif.id}`)} src={gif.images.fixed_width.url} alt={gif.title} />
            </div>
        </>
    )
}

Gif.propTypes = {
    gif: PropTypes.object,
}

export default Gif;


//clicked ? (<GifDetails gif={gif} />) :