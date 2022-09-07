import React, { useRef } from 'react';
import './App.css';


const Player =({audioElem, isplaying, setisplaying, currentSong, setCurrentSong, songs})=>{

    const clickRef = useRef();
    const artRef = useRef();
    const playerWidthRef = useRef();
    const prevPlayerRef = useRef();
    const nextPlayerRef = useRef();
    const albumNameRef = useRef();
    const trackNameRef = useRef();
    const playerTrackRef = useRef();
    const compressExpandButtonRef = useRef()

    const compressExpandPlayer =()=>{
        if (playerWidthRef.current.classList.contains('compress')){
            playerWidthRef.current.classList.remove('compress');
            playerWidthRef.current.classList.add('expand');
            // compressExpandButtonRef.current.classList.remove('fa-plus');
            // compressExpandButtonRef.current.classList.add('fa-minus');
            setTimeout(() => {
                console.log('timer worked')
                // playerTrackRef.current.classList.add('expand');
                // prevPlayerRef.current.classList.add('expand');
                // nextPlayerRef.current.classList.add('expand');
                // $('#control-previous').css({'display': 'block'})
                // $('#control-next').css({'display': 'block'})
                // $('#control-play-pause').removeClass('pen-4')
            }, 1000)


        }
        // prevPlayerRef.current.classList.toggle('expand');
        // nextPlayerRef.current.classList.toggle('expand');
        // albumNameRef.current.classList.toggle('expand');
        // trackNameRef.current.classList.toggle('expand');
        // playerTrackRef.current.classList.toggle('expand');
    }

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

        <div className='compress' id='app-cover' ref={playerWidthRef}>
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
                        <div id='player-track'  ref={playerTrackRef}>
                            <div className="title">
                                {currentSong.title}
                            </div>
                            <div className=''  >
                                {currentSong.artist}
                            </div>
                        </div>
                        <div className="controls" id='player-controls'>
                            <i className='fas fa-backward btn_action control' onClick={skipBack}  id='control-previous' ref={prevPlayerRef}/>
                            {isplaying ? <i className='fas fa-pause btn_action pp control' onClick={PlayPause} id="play-pause-button" /> : <i className='fas fa-play btn_action pp control' onClick={PlayPause} i/>}
                            <i className='fas fa-forward btn_action control' onClick={skiptoNext} id='control-next' ref={nextPlayerRef}/>        
                        </div>
                        <i className='fa fa-plus' id='compress_expand' onClick={compressExpandPlayer} ref={compressExpandButtonRef}></i>
                    </div>
                   

                  
                </div>
                
            </div>
           
         </div>
    )
}

export default Player;