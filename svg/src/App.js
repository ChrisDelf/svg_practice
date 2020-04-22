import React, { useRef, useLayoutEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Example2 from './components/example2';

function App() {
  const targetRef = useRef();
  const [dimensions, setDimensions] = useState([]);

  useLayoutEffect(() => {
    const logo = document.querySelectorAll('.example2 path');
    console.log(logo);
    logo.forEach(n => {
      console.log(n , n.getTotalLength())})
  }, []);

  return (
    <div className="App">
      {/* <svg width= "250" height= "250"> */}
      {/* <rect rx="15" ry="15" x="25" y="25" height="200" width = "200" fill = "blue"/> */}
      {/* <circle r="120" cx ="125" cy = "125" fill="none" stroke ="black" stroke-width="10px"></circle> */}
      {/* <circle r = "70" cx = "125" cy = "125" fill="none" stroke = "black" stroke-width="10px" /> */}
      {/* {/* <line x1 = "10" y1="125"  x2 = "225" y2=" 225" stroke = "green" stroke-width = "10px"/> */}

      {/* <polygon fill="purple" points ="50,50 200,50 200,200 125,125 50,200 " /> */}
      {/*  */}
      {/*  */}
      {/* </svg> */}
      <svg
        className="example"
        viewBox=" 100 100 300 300"
        width="300"
        height="200"
      >
        <circle r="75" cx="150" cy="150" />
      </svg>
      <Example2 ref={targetRef} />
    </div>
  );
}

export default App;
