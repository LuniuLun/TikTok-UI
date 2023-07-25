import axios from "axios";
import { useEffect, useState } from "react";
import Video from "~/components/Video";


function Home() {
    const [Videos, setVideos] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/videos')
            .then(res => {    
                setVideos(res.data.videos);
            }) 
            .catch(() => {
                
            })
        return () => {
            
        }
        // const fecthApi = showAllVideo();
        // setVideos(fecthApi);
    }, []);

    return (
        <>
            {Videos && Videos.map(result => {
                return <Video key={result.id} data={result}/>
            })}
        </>
    );
}

export default Home;