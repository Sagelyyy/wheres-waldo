import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Game from "./components/Game.js";
import App from "./App.js";
import Home from "./components/Home.js";

const RouteSwitch = () => {

    // Going to be storing state in here, and passing it down to the different routes.

    const [coords, setCoords] = React.useState({ x: 0, y: 0 })
    const [visible, setVisible] = React.useState(false)

    const clickHandler = (e) => {
        let htmlScroll = document.getElementsByTagName('html')[0].scrollTop
        let screenWidth = document.documentElement.clientWidth
        let screenHeight = document.documentElement.clientHeight
        let realX = e.clientX
        let realY = e.clientY
        

        if (e.clientY > screenHeight - 50) {
            e.clientY -= 50
        }
        if (e.clientX > screenWidth - 100) {
            e.clientX -= 100
        }

        if(realX >= 805 && realX <= 833){
            if(realY + htmlScroll >= 920  && realY + htmlScroll <= 986 ){
                console.log('walldo!')
            }
        }

        console.log('x: ' + e.clientX, 'y: ' + parseInt(e.clientY + htmlScroll))
        setCoords({ x: e.clientX, y: e.clientY + htmlScroll })
        setVisible(old => !old)
    }

    const getDifficulty = () => {
        
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Home />} />
                    <Route path="game" element={<Game clickHandler={clickHandler} coords={coords} visible={visible} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;