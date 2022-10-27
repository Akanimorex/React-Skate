import React  from 'react';
import MusicPlayer from './MusicPlayer';
import Nav from './components/Nav';




import './App.css';

function App() {



  return (
    <div className="sktbds-body homepage-skate">
        <Nav/>
        <div className="homepage"></div>
        <MusicPlayer/>
    </div>
  );
}

export default App;
