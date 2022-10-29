import React from 'react';
import '../App.css';
import logo from '../images/pfp_transparent.png';
import navBoard from '../images/skateboard_rdy.png';
import { BrowserRouter, Link } from "react-router-dom";


const Nav =()=> {
    return(
    
        <div data-animation="over-right" data-collapse="medium" data-duration="400" data-easing="ease" data-easing2="ease" data-no-scroll="1" role="banner" className="sktbds-navbar w-nav">
            <div className="nav-container w-container">
            <Link to="/" className="brand w-nav-brand w--current">
                {/* skaterbirds logo for the desktop view  */}
                <img src={logo} loading="eager" width="75" alt="logo" className="image-16" />
            </Link>
            <div className="spacer"></div>
            <div className="menu-button w-nav-button">
                <div className="w-embed">
                    <svg width="20" height="20" viewBox="0 0 15 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                           
                            d="M2.99231 9.7867C3.44542 10.1044 3.89853 10.1044 4.35164 10.1044C5.62036 10.1044 6.93438 10.286 8.2031 10.1498C9.15463 10.0136 10.378 10.1044 11.5108 10.1044C11.6014 10.1044 11.7374 10.059 11.8733 10.059C12.8248 9.87748 13.7311 9.7867 14.6826 10.059C14.8185 9.87748 14.9092 9.69592 14.9998 9.51437C14.7732 8.51581 14.8185 7.83498 14.8185 6.79103C14.5467 6.60948 14.6373 6.15559 14.2748 5.97403C14.2748 5.97403 14.2295 5.92864 14.1389 5.88325C13.9123 5.92864 13.2326 6.20097 12.9155 5.97403C12.8248 5.92864 12.553 5.92864 12.4623 6.01942C12.0545 6.24636 12.1452 6.1102 11.7374 6.1102C10.3327 6.1102 8.92807 5.97403 7.52343 5.97403C7.20625 6.01942 6.88907 6.01942 6.52658 6.1102C6.16409 6.20098 5.75629 6.20097 5.34849 6.20097H0.636127C0.409571 6.20097 0.183015 6.20097 0.00176997 6.42792V7.51725C0.0470811 7.92575 0.00177001 8.24348 0.137704 8.5612C0.273637 8.9697 0.228326 9.19664 0.0923924 9.51437C0.228326 9.74131 0.273637 9.96825 0.545504 10.1044C1.27048 10.0136 2.08608 10.286 2.99231 9.7867Z"
                            fill="#BB9772"
                        />
                        <path
                            
                            d="M2.99054 15.5862C3.44365 15.904 3.89676 15.904 4.34987 15.904C5.61859 15.904 6.93262 16.0855 8.20133 15.9494C9.15287 15.8132 10.3763 15.904 11.509 15.904C11.5997 15.904 11.7356 15.8586 11.8715 15.8586C12.8231 15.677 13.7293 15.5862 14.6808 15.8586C14.8168 15.677 14.9074 15.4955 14.998 15.3139C14.7715 14.3154 14.8168 13.6345 14.8168 12.5906C14.5449 12.409 14.6355 11.9551 14.273 11.7736C14.273 11.7736 14.2277 11.7282 14.1371 11.6828C13.9105 11.7282 13.2309 12.0005 12.9137 11.7736C12.8231 11.7282 12.5512 11.7282 12.4606 11.819C12.0528 12.0459 12.1434 11.9097 11.7356 11.9097C10.331 11.9097 8.92631 11.7736 7.52166 11.7736C7.20448 11.819 6.88731 11.819 6.52482 11.9097C6.16233 12.0005 5.75453 12.0005 5.34673 12.0005H0.634356C0.4078 12.0005 0.181245 12.0005 0 12.2275V13.3168C0.0453111 13.7253 -2.8358e-07 14.043 0.135933 14.3607C0.271867 14.7692 0.226555 14.9962 0.090621 15.3139C0.226555 15.5409 0.271866 15.7678 0.543733 15.904C1.26871 15.8132 2.08431 16.0855 2.99054 15.5862Z"
                            fill="#BB9772"
                        />
                        <path
                            
                            d="M2.99253 3.90345C3.44564 4.22117 3.89875 4.22117 4.35186 4.22117C5.62058 4.22117 6.93461 4.40272 8.20332 4.26656C9.15486 4.13039 10.3783 4.22117 11.511 4.22117C11.6017 4.22117 11.7376 4.17578 11.8735 4.17578C12.8251 3.99422 13.7313 3.90344 14.6828 4.17578C14.8188 3.99422 14.9094 3.81267 15 3.63111C14.7734 2.63256 14.8188 1.95172 14.8188 0.907778C14.5469 0.726223 14.6375 0.272332 14.275 0.0907764C14.275 0.0907764 14.2297 0.045389 14.1391 0C13.9125 0.045389 13.2329 0.317721 12.9157 0.0907764C12.8251 0.0453876 12.5532 0.0453868 12.4626 0.136165C12.0548 0.363109 12.1454 0.226945 11.7376 0.226945C10.3329 0.226945 8.9283 0.0907764 7.52365 0.0907764C7.20647 0.136165 6.8893 0.136167 6.52681 0.226945C6.16432 0.317722 5.75651 0.317721 5.34871 0.317721H0.636349C0.409793 0.317721 0.183236 0.317721 0.00199121 0.544666V1.634C0.0473023 2.0425 0.0019892 2.36022 0.137923 2.67795C0.273856 3.08645 0.228546 3.31339 0.0926122 3.63111C0.228546 3.85806 0.273857 4.085 0.545724 4.22117C1.2707 4.13039 2.08631 4.40272 2.99253 3.90345Z"
                            fill="#BB9772"
                        />
                    </svg>
                </div>
            </div>
            <nav role="navigation" className="nav-menu w-nav-menu">
                <div className="div-block-29" >
                    <Link to="/" className="brand w-nav-brand w--current">
                        <img src={logo} loading="lazy" width="75" alt="logo" className="image-16" />
                    </Link>        
                    <div className="spacer"></div>
                    <div className="menu-button w-nav-button">
                        <div className="html-embed-2 w-embed">
                            <svg width="50" height="50" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill="CurrentColor"
                                    d="M16.0801 12.0877C16.1758 12.6327 16.4962 12.9531 16.8166 13.2735C17.7137 14.1706 18.5145 15.2282 19.5079 16.029C20.277 16.6056 21.0779 17.5348 21.8789 18.3358C21.943 18.3999 22.0712 18.4639 22.1673 18.5601C22.9685 19.1045 23.6735 19.6811 24.1538 20.5465C24.3783 20.5143 24.5707 20.45 24.7632 20.3857C25.3091 19.5194 25.8225 19.07 26.5607 18.3318C26.4969 18.0112 26.8819 17.7543 26.754 17.3696C26.754 17.3696 26.754 17.3055 26.722 17.2093C26.5297 17.0812 25.8566 16.7932 25.7928 16.4084C25.7608 16.3123 25.5685 16.12 25.4403 16.1201C24.9914 15.9922 25.1518 15.96 24.8634 15.6717C23.8702 14.6785 22.9732 13.5889 21.98 12.5957C21.7236 12.4035 21.4994 12.1792 21.1789 11.9871C20.8583 11.795 20.57 11.5066 20.2816 11.2183L16.9495 7.88611C16.7893 7.72591 16.6291 7.56571 16.3404 7.59803L15.5702 8.3683C15.3134 8.6892 15.0567 8.88182 14.9281 9.2026C14.7354 9.58758 14.5429 9.71601 14.2221 9.84455C14.1577 10.1011 14.0293 10.2937 14.1252 10.5822C14.7021 11.0306 15.0862 11.7999 16.0801 12.0877Z"
                                    fill="#BB9772"
                                />
                                <path
                                    fill="CurrentColor"
                                    d="M18.5467 18.4639C19.0917 18.3681 19.4121 18.0477 19.7325 17.7273C20.6296 16.8302 21.6872 16.0295 22.488 15.0361C23.0646 14.2669 23.9938 13.466 24.7948 12.6651C24.8589 12.601 24.9229 12.4728 25.019 12.3766C25.5635 11.5754 26.1401 10.8704 27.0055 10.3902C26.9732 10.1657 26.9089 9.97321 26.8446 9.78075C25.9784 9.23487 25.529 8.7214 24.7908 7.98322C24.4702 8.04708 24.2133 7.66205 23.8286 7.79C23.8286 7.79 23.7645 7.78994 23.6683 7.82192C23.5402 8.01422 23.2522 8.68738 22.8674 8.75119C22.7712 8.78318 22.579 8.97541 22.5791 9.10368C22.4512 9.55251 22.419 9.39215 22.1307 9.68051C21.1374 10.6737 20.0479 11.5707 19.0547 12.5639C18.8625 12.8203 18.6382 13.0446 18.4461 13.3651C18.254 13.6856 17.9656 13.974 17.6772 14.2623L14.3451 17.5945C14.1849 17.7547 14.0247 17.9149 14.057 18.2035L14.8273 18.9738C15.1482 19.2306 15.3408 19.4873 15.6616 19.6158C16.0466 19.8086 16.175 20.0011 16.3035 20.3219C16.5601 20.3862 16.7526 20.5147 17.0412 20.4187C17.4896 19.8419 18.2589 19.4577 18.5467 18.4639Z"
                                    fill="#BB9772"
                                />
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="regular-links">
                    <Link to="/" className="sktbds-nav-box w--current"> HOME</Link>
                    <Link to="/Skatepark" className="sktbds-nav-box">SKATEPARK</Link>
                    <Link to="/Mission" className="sktbds-nav-box">MISSION</Link>
                    <Link to="/Roadmap" className="sktbds-nav-box">ROADMAP</Link>
                    <Link to="/Cafe" className="sktbds-nav-box">CAFE</Link>
                    <a href="https://shopskaterbirds.com/" className="sktbds-nav-box">SHOP</a>
                     <a href="https://www.buzzsprout.com/2027710" className="sktbds-nav-box">RADIO</a>
                </div>
                <div className="social-links">
                    <a href="https://twitter.com/SkaterBirdsNFT" target="_blank" className="sktbds-menusociallink w-inline-block">
                        <div className="twitter-svg w-embed">
                            <svg width="19" height="12" viewBox="0 0 19 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.79478 15C12.7559 15 16.565 9.22736 16.565 4.22982C16.565 4.06742 16.565 3.90502 16.5576 3.74262C17.2958 3.21112 17.938 2.53937 18.4473 1.77904C17.7682 2.08169 17.0374 2.281 16.2697 2.37697C17.0522 1.91191 17.6501 1.16634 17.938 0.280511C17.2072 0.716043 16.3952 1.02608 15.5315 1.19587C14.8376 0.457677 13.8558 0 12.7707 0C10.6816 0 8.98376 1.69783 8.98376 3.78691C8.98376 4.08218 9.02067 4.37008 9.07973 4.65059C5.93504 4.49557 3.14469 2.98228 1.27707 0.693898C0.952264 1.25492 0.767717 1.90453 0.767717 2.59843C0.767717 3.9124 1.43947 5.07136 2.45079 5.75049C1.83071 5.72835 1.24754 5.55856 0.738189 5.27805C0.738189 5.29281 0.738189 5.30758 0.738189 5.32972C0.738189 7.16043 2.04478 8.69586 3.77215 9.04281C3.45472 9.1314 3.12254 9.17569 2.77559 9.17569C2.53199 9.17569 2.29577 9.15354 2.06693 9.10925C2.54675 10.6152 3.94931 11.7077 5.60285 11.7372C4.30364 12.7559 2.67224 13.3612 0.900591 13.3612C0.597933 13.3612 0.295276 13.3465 0 13.3095C1.66831 14.3725 3.66142 15 5.79478 15Z"
                                    fill="#F28519"
                                />
                            </svg>
                        </div>
                    </a>
                    
                    <a href="https://www.instagram.com/skaterbirds/" target="_blank" className="sktbds-menusociallink w-inline-block">
                        <div className="instagram-svg w-embed">
                            <svg width="13" height="13" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill="CurrentColor"
                                    d="M7.99936 1.44257C10.1354 1.44257 10.3882 1.45082 11.2319 1.48924C12.0117 1.52481 12.4353 1.655 12.7173 1.76455C13.0652 1.89264 13.3799 2.09718 13.6382 2.3631C13.9041 2.62139 14.1086 2.93608 14.2367 3.28396C14.3463 3.56593 14.4765 3.98952 14.512 4.76939C14.5504 5.61308 14.5587 5.86584 14.5587 8.00191C14.5587 10.138 14.5504 10.3907 14.512 11.2344C14.4765 12.0143 14.3463 12.4379 14.2367 12.7199C14.1035 13.0648 13.8996 13.378 13.6382 13.6394C13.3767 13.9009 13.0635 14.1048 12.7186 14.238C12.4366 14.3475 12.013 14.4777 11.2332 14.5133C10.3898 14.5517 10.1367 14.56 8.00064 14.56C5.86457 14.56 5.6115 14.5517 4.76812 14.5133C3.98825 14.4777 3.56466 14.3475 3.28269 14.238C2.93481 14.1099 2.62012 13.9054 2.36183 13.6394C2.09591 13.3811 1.89137 13.0665 1.76328 12.7186C1.65373 12.4366 1.52354 12.013 1.48797 11.2332C1.44955 10.3895 1.4413 10.1367 1.4413 8.00064C1.4413 5.86457 1.44955 5.61181 1.48797 4.76812C1.52354 3.98825 1.65373 3.56466 1.76328 3.28269C1.89137 2.93481 2.09591 2.62012 2.36183 2.36183C2.62012 2.09591 2.93481 1.89137 3.28269 1.76328C3.56466 1.65373 3.98825 1.52354 4.76812 1.48797C5.61181 1.44955 5.86457 1.4413 8.00064 1.4413L7.99936 1.44257ZM8.00064 0C5.82805 0 5.55561 0.00920854 4.70239 0.0482655C3.84917 0.0873224 3.2684 0.223545 2.75939 0.42137C2.22566 0.622196 1.74215 0.936989 1.34254 1.34381C0.936292 1.74358 0.622048 2.22708 0.421688 2.76066C0.222275 3.26967 0.0870048 3.85108 0.0482655 4.70239C0.00952608 5.5537 0 5.82805 0 8.00064C0 10.1732 0.00920854 10.4457 0.0482655 11.2989C0.0873224 12.1521 0.222275 12.7316 0.4201 13.2406C0.620926 13.7743 0.935719 14.2578 1.34254 14.6575C1.74222 15.0643 2.22571 15.3792 2.75939 15.5802C3.26744 15.7777 3.84981 15.913 4.70112 15.9521C5.55243 15.9911 5.82678 16 7.99936 16C10.1719 16 10.4444 15.9908 11.2976 15.9521C12.1508 15.9133 12.7303 15.7777 13.2393 15.5802C13.7707 15.3746 14.2533 15.0603 14.6562 14.6575C15.0591 14.2546 15.3734 13.772 15.5789 13.2406C15.7765 12.7326 15.9117 12.1502 15.9508 11.2989C15.9898 10.4476 15.9987 10.1732 15.9987 8.00064C15.9987 5.82805 15.9895 5.55561 15.9508 4.70239C15.912 3.84917 15.7765 3.26967 15.5789 2.76066C15.3779 2.22698 15.063 1.74349 14.6562 1.34381C14.2564 0.937562 13.7729 0.623318 13.2393 0.422958C12.7303 0.223545 12.1489 0.088275 11.2976 0.0495356C10.4463 0.0107962 10.1719 0.00127014 7.99936 0.00127014L8.00064 0Z"
                                    fill="#F28519"
                                />
                                <path
                                    fill="CurrentColor"
                                    d="M7.99957 3.89453C7.18707 3.89453 6.39283 4.13547 5.71727 4.58687C5.04171 5.03827 4.51519 5.67987 4.20427 6.43052C3.89336 7.18117 3.81203 8.00716 3.97056 8.80403C4.12909 9.60091 4.52037 10.3329 5.09491 10.9074C5.66945 11.4819 6.40145 11.8731 7.19834 12.0316C7.99522 12.19 8.82121 12.1086 9.57183 11.7977C10.3225 11.4867 10.964 10.9601 11.4154 10.2845C11.8667 9.60893 12.1076 8.81467 12.1075 8.00218C12.1076 7.46271 12.0013 6.92853 11.7949 6.43013C11.5885 5.93172 11.2859 5.47887 10.9044 5.09743C10.5229 4.71598 10.0701 4.41343 9.57164 4.20703C9.07322 4.00064 8.53903 3.89445 7.99957 3.89453ZM7.99957 10.6685C7.47202 10.6685 6.95633 10.5121 6.51769 10.219C6.07906 9.92592 5.73718 9.50934 5.5353 9.02195C5.33342 8.53457 5.2806 7.99826 5.38352 7.48086C5.48643 6.96345 5.74047 6.48818 6.1135 6.11516C6.48653 5.74213 6.96179 5.48809 7.4792 5.38517C7.99661 5.28225 8.53291 5.33508 9.0203 5.53696C9.50768 5.73884 9.92426 6.08071 10.2173 6.51935C10.5104 6.95799 10.6669 7.47368 10.6669 8.00122C10.6669 8.70864 10.3858 9.38707 9.88563 9.88729C9.38542 10.3875 8.70698 10.6685 7.99957 10.6685Z"
                                    fill="#F28519"
                                />
                                <path
                                    fill="CurrentColor"
                                    d="M12.27 4.69131C12.8001 4.69131 13.2299 4.26154 13.2299 3.7314C13.2299 3.20125 12.8001 2.77148 12.27 2.77148C11.7398 2.77148 11.3101 3.20125 11.3101 3.7314C11.3101 4.26154 11.7398 4.69131 12.27 4.69131Z"
                                    fill="#F28519"
                                />
                            </svg>
                        </div>
                    </a>
                    <a href="http://discord.gg/skatepark" className="sktbds-menusociallink mr-0 w-inline-block">
                        <div className="sktbds-green-soon"><div className="soontext">SOON</div></div>
                        <div className="discord-svg w-embed">
                            <svg width="17" height="15" viewBox="0 0 20 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    fill="CurrentColor"
                                    d="M16.6594 1.24342C15.4051 0.667894 14.0601 0.243873 12.6537 0.00101874C12.6281 -0.00366827 12.6025 0.00804483 12.5894 0.0314716C12.4164 0.339138 12.2248 0.740513 12.0906 1.05599C10.578 0.829542 9.07315 0.829542 7.59157 1.05599C7.45737 0.733501 7.2588 0.339138 7.08504 0.0314716C7.07185 0.00882646 7.04626 -0.00288664 7.02065 0.00101874C5.6151 0.243097 4.27006 0.667118 3.01499 1.24342C3.00412 1.2481 2.99481 1.25592 2.98863 1.26606C0.437367 5.07759 -0.261531 8.79544 0.081325 12.4672C0.0828764 12.4852 0.0929602 12.5023 0.106923 12.5133C1.79017 13.7494 3.42069 14.4998 5.02092 14.9973C5.04654 15.0051 5.07367 14.9957 5.08997 14.9746C5.4685 14.4577 5.80594 13.9126 6.09525 13.3394C6.11232 13.3059 6.09603 13.266 6.06113 13.2528C5.52591 13.0497 5.01627 12.8022 4.52603 12.5211C4.48725 12.4984 4.48415 12.443 4.51982 12.4164C4.62299 12.3391 4.72618 12.2587 4.82469 12.1775C4.84251 12.1626 4.86734 12.1595 4.8883 12.1689C8.10895 13.6393 11.5957 13.6393 14.7783 12.1689C14.7993 12.1587 14.8241 12.1619 14.8427 12.1767C14.9413 12.2579 15.0444 12.3391 15.1484 12.4164C15.184 12.443 15.1817 12.4984 15.1429 12.5211C14.6527 12.8076 14.1431 13.0497 13.6071 13.252C13.5722 13.2653 13.5566 13.3059 13.5737 13.3394C13.8692 13.9118 14.2067 14.4569 14.5782 14.9738C14.5937 14.9957 14.6217 15.0051 14.6473 14.9973C16.2553 14.4998 17.8858 13.7494 19.569 12.5133C19.5838 12.5023 19.5931 12.4859 19.5946 12.468C20.005 8.22302 18.9073 4.53566 16.685 1.26684C16.6796 1.25592 16.6703 1.2481 16.6594 1.24342ZM6.5762 10.2315C5.60657 10.2315 4.80761 9.34128 4.80761 8.24802C4.80761 7.15476 5.59107 6.26456 6.5762 6.26456C7.56907 6.26456 8.36029 7.16258 8.34477 8.24802C8.34477 9.34128 7.56131 10.2315 6.5762 10.2315ZM13.1153 10.2315C12.1457 10.2315 11.3467 9.34128 11.3467 8.24802C11.3467 7.15476 12.1301 6.26456 13.1153 6.26456C14.1082 6.26456 14.8994 7.16258 14.8839 8.24802C14.8839 9.34128 14.1082 10.2315 13.1153 10.2315Z"
                                    fill="#7EAEFF"
                                />
                            </svg>
                        </div>
                    </a>
                    <a href="https://medium.com/@SkaterBirds" className="sktbds-menusociallink mr-0 w-inline-block">
                        <div className="sktbds-green-soon"><div className="soontext">SOON</div></div>
                        <div className="medium-svg w-embed">
                            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="15" fill="none" className="bi bi-medium" viewBox="0 0 16 16">
                                <path
                                    d="M9.025 8c0 2.485-2.02 4.5-4.513 4.5A4.506 4.506 0 0 1 0 8c0-2.486 2.02-4.5 4.512-4.5A4.506 4.506 0 0 1 9.025 8zm4.95 0c0 2.34-1.01 4.236-2.256 4.236-1.246 0-2.256-1.897-2.256-4.236 0-2.34 1.01-4.236 2.256-4.236 1.246 0 2.256 1.897 2.256 4.236zM16 8c0 2.096-.355 3.795-.794 3.795-.438 0-.793-1.7-.793-3.795 0-2.096.355-3.795.794-3.795.438 0 .793 1.699.793 3.795z"
                                    id="mainIconPathAttribute"
                                    fill="#46474a"
                                ></path>
                            </svg>
                        </div>
                    </a>
                    <a href="https://opensea.io/collection/skater-birds-skatepark" target="_blank" className="sktbds-menusociallink mr-0 w-inline-block">
                            <div className="opensea-svg w-embed roadmap-socials">
                                <svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" id="IconChangeColor" height="15" width="15" transform="scale(1,1)">
                                    <title>OpenSea</title>
                                    <path
                                        d="M12 0C5.374 0 0 5.374 0 12s5.374 12 12 12 12-5.374 12-12S18.629 0 12 0ZM5.92 12.403l.051-.081 3.123-4.884a.107.107 0 0 1 .187.014c.52 1.169.972 2.623.76 3.528-.088.372-.335.876-.614 1.342a2.405 2.405 0 0 1-.117.199.106.106 0 0 1-.09.045H6.013a.106.106 0 0 1-.091-.163zm13.914 1.68a.109.109 0 0 1-.065.101c-.243.103-1.07.485-1.414.962-.878 1.222-1.548 2.97-3.048 2.97H9.053a4.019 4.019 0 0 1-4.013-4.028v-.072c0-.058.048-.106.108-.106h3.485c.07 0 .12.063.115.132-.026.226.017.459.125.67.206.42.636.682 1.099.682h1.726v-1.347H9.99a.11.11 0 0 1-.089-.173l.063-.09c.16-.231.391-.586.621-.992.156-.274.308-.566.43-.86.024-.052.043-.107.065-.16.033-.094.067-.182.091-.269a4.57 4.57 0 0 0 .065-.223c.057-.25.081-.514.081-.787 0-.108-.004-.221-.014-.327-.005-.117-.02-.235-.034-.352a3.415 3.415 0 0 0-.048-.312 6.494 6.494 0 0 0-.098-.468l-.014-.06c-.03-.108-.056-.21-.09-.317a11.824 11.824 0 0 0-.328-.972 5.212 5.212 0 0 0-.142-.355c-.072-.178-.146-.339-.213-.49a3.564 3.564 0 0 1-.094-.197 4.658 4.658 0 0 0-.103-.213c-.024-.053-.053-.104-.072-.152l-.211-.388c-.029-.053.019-.118.077-.101l1.32.357h.01l.173.05.192.054.07.019v-.783c0-.379.302-.686.679-.686a.66.66 0 0 1 .477.202.69.69 0 0 1 .2.484V6.65l.141.039c.01.005.022.01.031.017.034.024.084.062.147.11.05.038.103.086.165.137a10.351 10.351 0 0 1 .574.504c.214.199.454.432.684.691.065.074.127.146.192.226.062.079.132.156.19.232.079.104.16.212.235.324.033.053.074.108.105.161.096.142.178.288.257.435.034.067.067.141.096.213.089.197.159.396.202.598a.65.65 0 0 1 .029.132v.01c.014.057.019.12.024.184a2.057 2.057 0 0 1-.106.874c-.031.084-.06.17-.098.254-.075.17-.161.343-.264.502-.034.06-.075.122-.113.182-.043.063-.089.123-.127.18a3.89 3.89 0 0 1-.173.221c-.053.072-.106.144-.166.209-.081.098-.16.19-.245.278-.048.058-.1.118-.156.17-.052.06-.108.113-.156.161-.084.084-.15.147-.208.202l-.137.122a.102.102 0 0 1-.072.03h-1.051v1.346h1.322c.295 0 .576-.104.804-.298.077-.067.415-.36.816-.802a.094.094 0 0 1 .05-.03l3.65-1.057a.108.108 0 0 1 .138.103z"
                                        id="mainIconPathAttribute"
                                        fill="#46474a"
                                    ></path>
                                </svg>
                            </div>
                        </a>
                </div>
                <img src={navBoard} loading="eager" alt="" className="image-21" />
            </nav>
        </div>
    </div>
      
    )
};

export default Nav;