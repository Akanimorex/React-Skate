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
            "title": " Through The Wire",
            "artist":"Kanye West",
            "url": KanyeSong,
            "art":Kanye
        },
        {
            "title": "Ms Jackson",
            "artist": "Outkast",
            "url": MsJacksonSong,
            "art": MsJackson
        },
        {
            "title": "cloud 9",
            "artist":"cloud9",
            "url": Cloud9Song ,
            "art":cloud9
        },
        {
            "title": "Seaside",
            "artist":"Seaside",
            "url": SeasideSong,
            "art": Seaside
        }
        ,
        {
            "title": "Telepatia",
            "artist":"Kali Uchis",
            "url": TelepatiaSong ,
            "art": Telepatia
        },
        {
            "title": "Whirlwind",
            "artist":"Afu Ra",
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
    
    };

    //audioelem

    const skipBack = ()=>
    {
        const index = songs.findIndex(x=>x.title == currentSong.title);
        if (index === 0)
        {
        setCurrentSong(songs[songs.length - 1]);
    }
    else
    {
        setCurrentSong(songs[index - 1]);
        }
        audioElem.current.currentTime = 0;
      
        
    };

    const skiptoNext = ()=>
    {
        const index = songs.findIndex(x=>x.title == currentSong.title);

        if (index == songs.length-1)
        {
        setCurrentSong(songs[0])
    }
    else
    {
        setCurrentSong(songs[index + 1])
        }
        audioElem.current.currentTime = 0;
       


        
    }


    return(
       <div className='App' style={{}}>
            <audio src={currentSong.url} onEnded={()=>skiptoNext()} ref={audioElem} onTimeUpdate={onPlaying} />
            <Player songs={songs} setSongs={setSongs} isplaying={isplaying} setisplaying={setisplaying} audioElem={audioElem} skipBack={skipBack} skipNext={skiptoNext} currentSong={currentSong} setCurrentSong={setCurrentSong} />
       </div>
    )
};

export default MusicPlayer;