import React from 'react';
import '../App.css';
import Nav from '../components/Nav';
import Footer from '../components/Footer';


const Mission = () => {
    return (
          <div className='sktbds-body'>
            <Nav/>
            <div className="sktbds-manifesto-okhand"></div>
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
                        </div>
                    </div>
                    <div className="manifesto-spacer"></div>
                </div>
            </div>       
            <Footer/>
          </div>
          
    )
};

export default Mission;