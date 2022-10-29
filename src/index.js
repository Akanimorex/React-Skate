import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App'
import reportWebVitals from './reportWebVitals';
import Roadmap from './pages/Roadmap';
import Mission from './pages/Mission';
import Skatepark from './pages/Skatepark';
import Cafe from './pages/Cafe';
import { 
        BrowserRouter,
        Route,
        Routes
        } 
from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' index element={<App/>}/> 
      <Route path='Mission'  element={<Mission/>}/> 
      <Route path='Skatepark'  element={<Skatepark/>}/> 
      <Route path='Roadmap' element={<Roadmap/>}/> 
      <Route path='Cafe' element={<Cafe/>}/> 
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
