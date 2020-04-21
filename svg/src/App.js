import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
    <svg width= "250" height= "250">
    <rect rx="15" ry="15" x="25" y="25" height="200" width = "200" fill = "blue"/>
    <circle r="120" cx ="125" cy = "125" fill="none" stroke ="black" stroke-width="10px"></circle>
    <circle r = "70" cx = "125" cy = "125" fill="none" stroke = "black" stroke-width="10px" />
    {/* <line x1 = "10" y1="125"  x2 = "225" y2=" 225" stroke = "green" stroke-width = "10px"/> */}
    <polygon fill="purple" points ="50,50 200,50 200,200 125,125 50,200 " />


    </svg>

         </div>
  );
}

export default App;
