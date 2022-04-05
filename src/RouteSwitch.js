import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gameData from "./gameData.js";
import Game from "./components/Game.js";
import App from "./App.js";


const RouteSwitch = () => {

    // Going to be storing state in here, and passing it down to the different routes.

    const [coords, setCoords] = React.useState({ x: 0, y: 0 })
    const [visible, setVisible] = React.useState(false)
    const [playing, setPlaying] = React.useState(false)
    const [level, setLevel] = React.useState()

    const clickHandler = (e) => {
        let htmlScroll = document.getElementsByTagName('html')[0].scrollTop
        let screenWidth = document.documentElement.clientWidth
        let screenHeight = document.documentElement.clientHeight

        let yPercent = (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
        let xPercent = (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100

        if (e.clientY > screenHeight - 50) {
            e.clientY -= 50
        }
        if (e.clientX > screenWidth - 100) {
            e.clientX -= 100
        }

        checkSelection(xPercent, yPercent)
        setCoords({ x: e.clientX, y: e.clientY + htmlScroll })
        setVisible(old => !old)
    }

    const checkSelection = (x, y) => {
        const waldo = level[0].characters[0].waldo
        console.log(`X: ${x} xMin ${waldo.xMin} xMax: ${waldo.xMax}`)
        console.log(`Y: ${y} xMin ${waldo.yMin} xMax: ${waldo.yMax}`)
        if(x >= waldo.xMin && x <= waldo.xMax){
            if(y >= waldo.yMin && y <= waldo.yMax){
                console.log('waldo!')
            }
        }
    }

    const levelSetup= (difficulty) => {
        switch (difficulty) {
            case 'easy':
                setLevel(gameData.map(data => data.easy[0]))
                setPlaying(true)
                break;
            default:
                console.log('something went wrong')
                break;
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="/" element={<Game 
                    clickHandler={clickHandler} 
                    coords={coords} visible={visible} 
                    levelSetup={levelSetup} 
                    playing={playing}
                    
                    />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;