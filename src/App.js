import React from 'react';
import './App.css';
import { Outlet, Link } from "react-router-dom"

function App(props) {
  
  const style = {
    borderBottom: "solid 1px",
    paddingBottom: "1rem",
    backgroundColor: "white"
  }
  return (
    <div className="App">
      Navigation
      <nav style={style}>
        <div className='nav--links--container'>
          <Link onClick={() => {props.setPlaying(false)}} className='nav--link' to="/">Home</Link> | {" "}
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
