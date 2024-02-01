import { useEffect, useState } from "react";
import { loadTrendingGifs } from "../../request/request-service";
import Gif from "../Views/Gif";
import './Trending.css';

const Trending = () => {
    const [trending, setTrending] = useState([]);
    // const [refresh, setRefresh] = useState(1);


    // useEffect(() => {
    //     loadTrendingGifs(refresh).then(setTrending);
    // }, [refresh]);

    useEffect(() => {
        loadTrendingGifs().then(setTrending);
    }, []);

    return (
        <div className="trend">
            <h1>Trending</h1>
            {/* <button onClick={() => setRefresh(refresh + 1)}>Add one more</button> */}
            <div className="trending">{trending.map(gif => <Gif key={gif.id} gif={gif} />)}</div>
        </div>
    );
};

export default Trending;