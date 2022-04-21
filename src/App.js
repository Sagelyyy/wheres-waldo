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
      <nav style={style}>
        <div className='nav--links--container'>
          <Link onClick={props.resetGame} className='nav--link' to="/">Home</Link>
          <Link onClick={props.resetGame} to="/leaderboard">Leaderboard</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
