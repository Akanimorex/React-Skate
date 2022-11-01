import React  from 'react';
import '../App.css';
import roadmapImage from '../images/roadmap-image.png';
import Nav from '../components/Nav';

const Roadmap = () => {
    return (
        <div>
            <Nav/>
            <div className="parent">
                <div className="skaterbirds-background"></div>
                <div className="skaterbirds-roadmap"><img src={roadmapImage} alt="" /></div>
            </div>
        </div>
    )
};

export default Roadmap;
