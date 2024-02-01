import PropTypes from 'prop-types';

import { useState } from 'react';

const Gif = ({ gif }) => {
    const [clicked, setClicked] = useState(false)

    const handleClick = () => {

        setClicked(!clicked)

    };

    return (
        <>
            <div className='single-gif'>
                <img onClick={handleClick} src={gif.images.fixed_width.url} alt={gif.title} />
            </div>
        </>
    )
}

Gif.propTypes = {
    gif: PropTypes.object,
}

export default Gif;


//clicked ? (<GifDetails gif={gif} />) :