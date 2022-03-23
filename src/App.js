import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import DetailCharacter from './pages/detailCharacter';
//On this program all the information gets together to show the home page 
// and the bar option were you can select one of the three screens available to open
function App() {
  return (
    <Router>
      <Routes>
        <Route exact path= '/' element = {<Home/>}/>
        <Route exact path= '/home' element = {<Home/>}/>
        <Route exact path = '/character/:id' element = {<DetailCharacter/>}/>
      </Routes>
    </Router>
  );
}

export default App;
