import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game.js";
import App from "./App.js";
import Home from "./components/Home.js";

const RouteSwitch = () => {

    // Going to be storing state in here, and passing it down to the different routes.

    const [coords, setCoords] = React.useState({x: 0, y: 0})
    const [visible, setVisible] = React.useState(false)

    const clickHandler = (e) => {
      console.log(`CLICK! ${e.clientX} , ${e.clientY}`)
      setCoords({x: e.clientX, y: e.clientY})
      setVisible(old => !old)
    }
  
    console.log(visible)

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="game" element={<Game clickHandler={clickHandler} coords={coords} visible={visible}/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;