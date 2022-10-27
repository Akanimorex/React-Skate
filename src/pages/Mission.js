import React from 'react';
import '../App.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import MusicPlayer from '../MusicPlayer';


const Mission = () => {
    return (
          <div className='sktbds-body'>
            <Nav/>
            <div class="sktbds-manifesto-okhand"></div>
            <div className="sktbds-section zero-padding-bottom wf-section">
                <div className="sktbds-container p-0">
                    <div className="w-layout-grid grid">
                        <div id="w-node-cd9f6dd4-f7a6-8f07-9eeb-fe073e571296-5ea4a0de" className="sktbds-manifesto-text">
                            <h1>MISSION</h1>
                            <h2>Skate with us</h2>
                            <div className="sktbds-bigtext manifesto">
                                Skaterbirds brings the 90’s back…<br />
                                <br />
                                Here at SkaterBirds, we take a trip down memory lane,<br />
                                revive the incomparable vibes of the 90’s and its fashion and<br />
                                create a real bridge between web3 and web2.<br />
                                <br />
                                We strongly believe in building a web2 based brand,<br />
                                partly decoupling it from the web3 market conditions and then<br />
                                connecting the best parts of two worlds through the Skaterbirds Brand.<br />
                                <br />
                                Fashion, Skating, Events and the Skaterbirds Café Franchise are our<br />
                                main routes for creating a more accessible web3 space. As we build<br />
                                the brand we always want to thank our early investors, our beloved<br />
                                community by giving them special access, revenue from our products<br />
                                and provide them with some cool ways for the usage of their Skaterbirds NFTs.<br />
                                With our Community together, we <b>#KeepOnSkating!</b><br />
                                <br />
                                More info about our Roadmap <a href="https://medium.com/@SkaterBirds/skaterbirds-bring-the-90s-flow-back-e1e5a7238bf7">here.</a>
                            </div>
                            {/* <a data-w-id="71e8789d-8156-f8b9-7a63-329019745bd7" href="park.html" className="sktbds-button w-inline-block">
                                <div
                                    style="
                                        -webkit-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                                        -moz-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                                        -ms-transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                                        transform: translate3d(0, 0, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
                                    "
                                    className="sktbds-buttontext"
                                >
                                    BEAR WITH US →
                                </div>
                            </a> */}
                        </div>
                    </div>
                    <div className="manifesto-spacer"></div>
                </div>
            </div>       
            <Footer/>
            <MusicPlayer/>
          </div>
          
    )
};

export default Mission;