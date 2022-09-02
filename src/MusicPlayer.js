
import React, { useRef, useState , useEffect} from 'react';
import Player from './Player';


import MsJacksonSong from './Music/MsJackson/msjackson_by_outkast.mp3';
import Cloud9Song from './Music/Cloud 9/Cloud 9.mp3';
import SeasideSong from './Music/Seaside/Seaside.mp3';
import TelepatiaSong from './Music/Telepatia/telepatia_by_kali_uchis.mp3';
import KanyeSong from './Music/Through The Wire/throughthewire_kanye_west.mp3';
import WhirlwindSong from './Music/Whirlwind/Whirlwind_Thru_Cities_by_Afu-Ra.mp3';

import MsJackson from './Music/MsJackson/MsJackson.png';
import cloud9 from './Music/Cloud 9/Cloud 9.jpeg';
import Seaside from './Music/Seaside/Seaside.jpeg';
import Telepatia from './Music/Telepatia/telepatia.png';
import Kanye from './Music/Through The Wire/throughthewire.png';
import Whirlwind from './Music/Whirlwind/Whirlwind.png';



const MusicPlayer = ()=>{

    const songData = [
        {
            "title": "Kanye West - Through The Wire",
            "url": KanyeSong,
            "art":Kanye
        },
        {
            "title": "Outkast - Ms Jackson",
            "url": MsJacksonSong,
            "art": MsJackson
        },
        {
            "title": "cloud9 - cloud 9",
            "url": Cloud9Song ,
            "art":cloud9
        },
        {
            "title": "Seaside - Seaside",
            "url": SeasideSong,
            "art": Seaside
        }
        ,
        {
            "title": "Kali Uchis - Telepatia",
            "url": TelepatiaSong ,
            "art": Telepatia
        },
        {
            "title": "Afu Ra - Whirlwind",
            "url": WhirlwindSong ,
            "art": Whirlwind
        }
    ];
    let realSongData = {songData};
    const [songs, setSongs] = useState(songData);
    const [isplaying, setisplaying] = useState(false);
    const [currentSong, setCurrentSong] = useState(songData[1]);
    const audioElem = useRef();

    useEffect(() => {
        if (isplaying) {
          audioElem.current.play();
        }
        else {
          audioElem.current.pause();
        }
    }, [isplaying]);

    const onPlaying = () => {
        const duration = audioElem.current.duration;
        const ct = audioElem.current.currentTime;
    
        setCurrentSong({ ...currentSong, "progress": ct / duration * 100, "length": duration })
    
    }


    return(
       <div className='App' style={{backgroundColor:'black',height:'100vh'}}>
            <audio src={currentSong.url} ref={audioElem} onTimeUpdate={onPlaying} />
            <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} currentSong={currentSong} setCurrentSong={setCurrentSong} />
       </div>
    )
};

export default MusicPlayer;