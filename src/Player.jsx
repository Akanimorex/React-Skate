import React, { useRef } from 'react';
import './App.css';


const Player =({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs})=>{

    const clickRef = useRef();
    const artRef = useRef()

    const PlayPause = ()=>
    {
      setisplaying(!isplaying);
      artRef.current.classList.toggle('active')
  
    };
    const checkWidth = (e)=>
    {
        let width = clickRef.current.clientWidth;
        const offset = e.nativeEvent.offsetX;

        const divprogress = offset / width * 100;
        audioElem.current.currentTime = divprogress / 100 * currentSong.length;

    }

    const skipBack = ()=>
    {
        const index = songs.findIndex(x=>x.title == currentSong.title);
        if (index == 0)
        {
        setCurrentSong(songs[songs.length - 1])
        }
        else
        {
        setCurrentSong(songs[index - 1])
        }
        audioElem.current.currentTime = 0;
        
    }

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

    return (

        

        <div className='compress' id='app-cover'>
            <div id='player'>
                <div id='player-content' className='testing'>       
                   
                    {/* <div className="navigation">
                        <div className="navigation_wrapper" onClick={checkWidth} ref={clickRef}>
                            <div className="seek_bar" style={{width: `${currentSong.progress+"%"}`}}></div>
                        </div>
                    </div> */}

                    <div id="album-art" ref={artRef}>
                        <img src={currentSong.art} className="active" id="_1" /> 
                        
                        <div id="buffer-box">Buffering ...</div>
                    </div>
                    <div id='player-controls'>
                        <div id='player-track' >
                            <div className="title" id='album-name'>
                                <p>{currentSong.title}</p>
                            </div>
                        </div>

                        <div className="controls" id='player-controls'>
                            <i className='fas fa-backward btn_action control' onClick={skipBack}/>
                            {isplaying ? <i className='fas fa-pause btn_action pp control' onClick={PlayPause}/> : <i className='fas fa-play btn_action pp control' onClick={PlayPause}/>}
                            <i className='fas fa-forward btn_action control' onClick={skiptoNext}/>        
                        </div>
                        <i className='fa fa-plus' id='compress_expand'></i>
                    </div>
                   

                  
                </div>
                
            </div>
           
         </div>
    )
}

export default Player;