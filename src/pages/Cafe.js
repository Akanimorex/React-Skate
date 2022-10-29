import React from 'react';
import '../App.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MusicPlayer from '../MusicPlayer';


const Cafe = () => {
    return (
        <div className='sktbds-body'>
            <Nav/>
             <div className="sktbds-section zero-padding-bottom wf-section">
                 <div className="sktbds-container p-0">
                    <h1>CAFE</h1>
                    <h2>Catch Up With Our Developments</h2>
                    <div className="row mt-5">
                        <div className="col-md-7">
                            <iframe width={560} height={315} src="https://www.youtube.com/embed/BN0Ks2ECIw4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>     
                            </iframe>
                        </div>
                        <div className="col-md-5">

                            <div className="sktbds-bigtext manifesto">
                                Dont know anything about the Skaterbirds Cafe? Start here! Watch this Q&A to get a basic understanding about what our concept is,
                                who we want to attract and what benefits there are for Holders! Keep an Eye on our Youtube channel for future Q&A's and updates!
                                <br></br>

                                <span className="skate-date" style={{ fontSize:'16px' }}> 06.09.2022, The Skatepark</span>                           
                            </div>

                            <div className="mt-5">
                                
                                <a href="https://www.youtube.com/channel/UC6PT7ZiU2rF1drnV4DHnAAA" target="_blank" className="btn btn-danger"> YouTube Channel </a>
                            </div>


                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
};

export default Cafe;