import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loadSingleGif } from "../../request/request-service";

const GifDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [gif, setGif] = useState(null);


    useEffect(() => {
        loadSingleGif(id).then(setGif);
    }, [id])

    return (
        <div className="gif-details">
            <h3>{gif?.title}</h3>
            {<img src={gif?.images?.downsized?.url} alt="" />}
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
};

export default GifDetails
