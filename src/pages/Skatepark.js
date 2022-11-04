import React  from 'react';
import '../App.css';
import parkDay from '../images/park-day.png';
import parkNight from '../images/park-night.png';
import cly from '../images/Clyy.png';
import byme from '../images/BYME.png';
import zeon from '../images/zeon.png';

import Nav from '../components/Nav';
import Footer from '../components/Footer';

const Skatepark =()=> { 

    return (
        <div className='sktbds-body'>
            <Nav/>
             <div className="sktbds-section top wf-section">
            <div className="sktbds-container park-team">
                <h1 className="heading-11">SkatePark</h1>
                <h2>Community</h2>
                <div className="div-block-34">
                    <div id="w-node-f6a857a1-3fde-86c7-ecc1-148d5062f5fd-805bc396" data-w-id="f6a857a1-3fde-86c7-ecc1-148d5062f5fd" className="park-containerimage">
                        <img src={parkNight} loading="eager" width="1364" alt="" sizes="" className="night image-26" />
                        <img src={parkDay} loading="eager" width="1364" alt="" sizes="" className="image-26" />
                    </div>
                </div>
                <div className="sktbds-50">
                    <div className="sktbds-bigtext park-text">
                        <b>We #KeepOnSkating…</b><br />
                        <br />
                        Throughout our Journey of success, failure and milestones we always want to thank our early supporters!<br />
                        <br />
                        These are the Skaters we build for. These are the Skaters we help, share with and achieve great things with. SkaterBirds aims to bring the 90’s flow back, but there are a few Birds who are exceptionally good at
                        reviving the incomparable vibes of the 90’s through contributing to the growth of the SkaterBirds Brand in their very own creative ways.<br />
                        <br />
                        Birds like these are rare and will be featured in the Skatepark. By adding their Bird to the Skatepark we want to thank those people who are best at supporting SkaterBirds. But don’t feel bad if you are not
                        immortalized in the Skatepark yet… just <b>#KeepOnSkating </b>‍
                    </div>
                    {/* <!-- 
                    <div style="width: 20%;"></div>
                    <div className="park-gif">
                        <div className="gif-container">
                            <img src="../assets-global.website-files.com/622eead55797fc2865c24818/skate.gif" alt="">
                        </div>
                    </div> --><!-- <div className="sktbds-container manifesto">
                        <div className="div-block-19">
                            <div className="sktbds-smalltext">
                                © 2022, Skaterbirds <br />
                            </div>
                        </div>
                    </div> 
                    --> */}
                </div>
            </div>
        </div>
        <div className="sktbds-section middle wf-section">
            <div className="sktbds-container park-topcopy">
                <div className="sktbds-40"><h2 className="heading-3">Our Team</h2></div>
            </div>
            <div className="sktbds-container park-teamcontainer">
                <div className="collection-list-wrapper w-dyn-list">
                    <div role="list" className="collection-list w-dyn-items">
                        <div id="w-node-d006ef8f-a202-dea0-a5b7-b968bd7fba47-805bc396" role="listitem" className="collection-item w-dyn-item">
                            <div className="team-wrapper">
                                <div data-w-id="d006ef8f-a202-dea0-a5b7-b968bd7fba48" className="team-image-container">
                                    {/* <!-- <img src="../assets-global.website-files.com/622eead55797fc2865c24818/zeon.png" loading="eager" alt="" className="sktbds-team-hoverimage" /> --> */}
                                    <img src={zeon} loading="eager" alt="" className="sktbds-team-image" />
                                </div>
                                <div className="sktbds-team-detailscontainer">
                                    <div className="div-block-21"><div className="sktbds-capitaltitletext">XI</div></div>
                                    <a href="https://twitter.com/Xi_web3" target="_blank" className="sktbds--team-twitter w-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16" id="IconChangeColor">
                                            <path
                                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                                id="mainIconPathAttribute"
                                                fill="#6195cf"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="sktbds-team-role-text">Co-Founder</div>
                                <div className="sktbds-text team-bio">
                                    Not only has he a good eye for the web3 space, Xi has been also able to help many gastronomy Start-Ups to establish their cafes and restaurants through his own Consulting Company. With the experience he
                                    got in the past years, he is one of the founders and the head of the upcoming Skaterbirds Cafe Franchise.
                                </div>
                            </div>
                        </div>
                        <div id="w-node-d006ef8f-a202-dea0-a5b7-b968bd7fba47-805bc396" role="listitem" className="collection-item w-dyn-item">
                            <div className="team-wrapper">
                                <div data-w-id="d006ef8f-a202-dea0-a5b7-b968bd7fba48" className="team-image-container">
                                    {/* <!-- <img src="../assets-global.website-files.com/622eead55797fc2865c24818/Clyy.png" loading="eager" alt="" className="sktbds-team-hoverimage" /> --> */}
                                    <img src={cly} loading="eager" alt="" className="sktbds-team-image" />
                                </div>
                                <div className="sktbds-team-detailscontainer">
                                    <div className="div-block-21"><div className="sktbds-capitaltitletext">CLY</div></div>
                                    <a href="https://twitter.com/clyisk" target="_blank" className="sktbds--team-twitter w-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16" id="IconChangeColor">
                                            <path
                                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                                id="mainIconPathAttribute"
                                                fill="#6195cf"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="sktbds-team-role-text">Co-Founder</div>
                                <div className="sktbds-text team-bio">
                                    With tons of experience in fashion, being an art director for many companies like ZARA, Clyy is taking the lead in not only the fashion brand of Skaterbirds, but also in art directing most of our upcoming
                                    products.
                                </div>
                            </div>
                        </div>
                        <div id="w-node-d006ef8f-a202-dea0-a5b7-b968bd7fba47-805bc396" role="listitem" className="collection-item w-dyn-item">
                            <div className="team-wrapper">
                                <div data-w-id="d006ef8f-a202-dea0-a5b7-b968bd7fba48" className="team-image-container">
                                    {/* <!-- <img src="../assets-global.website-files.com/622eead55797fc2865c24818/BYME.png" loading="eager" alt="" className="sktbds-team-hoverimage" /> --> */}
                                    <img src={byme} loading="eager" alt="" className="sktbds-team-image" />
                                </div>
                                <div className="sktbds-team-detailscontainer">
                                    <div className="div-block-21"><div className="sktbds-capitaltitletext">BYME</div></div>
                                    <a href="https://twitter.com/BYMEoriginal" target="_blank" className="sktbds--team-twitter w-inline-block">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-twitter" viewBox="0 0 16 16" id="IconChangeColor">
                                            <path
                                                d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"
                                                id="mainIconPathAttribute"
                                                fill="#6195cf"
                                            ></path>
                                        </svg>
                                    </a>
                                </div>
                                <div className="sktbds-team-role-text">Artist</div>
                                <div className="sktbds-text team-bio">
                                    Byme is our most creative brain, she is the person behind the Skaterbirds Art and most of the Visuals. She has been contributing to all products, ranging from fashion to marketing. She is the one who
                                    brings the skating bird to life.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="sktbds-footer wf-section">
            <div className="sktbds-container">
                <div>
                    <div className="sktbds-smalltext">© 2022, Skaterbirds<br /></div>
                </div>
            </div>
        </div>
    </div>
    )

}

export default Skatepark;