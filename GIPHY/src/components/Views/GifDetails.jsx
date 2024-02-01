import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { loadSingleGif } from "../../request/request-service";

const GifDetails = () => {
    const {id} = useParams();
    const navigate = useNavigate();
    const [gif, setGif] = useState({});

    useEffect(() => {
        loadSingleGif(id).then(setGif);
    }, [])

    return (
        <div>
            <h1>{gif.title}</h1>
            <button onClick={() => navigate(-1)}>Go Back</button>
        </div>
    )
};

export default GifDetails