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
    const [victory, setVictory] = React.useState()

    const clickHandler = (e) => {
        let htmlScroll = document.getElementsByTagName('html')[0].scrollTop
        let screenWidth = document.documentElement.clientWidth
        let screenHeight = document.documentElement.clientHeight

        let xPercent = (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
        let yPercent = (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
     

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
        const wizard = level[0].characters[0].wizard
        const odlaw = level[0].characters[0].odlaw
        // console.log(`X: ${x} xMin ${wizard.xMin} xMax: ${wizard.xMax}`)
        // console.log(`Y: ${y} xMin ${wizard.yMin} xMax: ${wizard.yMax}`)
        if(x >= waldo.xMin && x <= waldo.xMax){
            if(y >= waldo.yMin && y <= waldo.yMax){
                console.log('waldo!')
            }
        }
        if(x >= wizard.xMin && x <= wizard.xMax){
            if(y >= wizard.yMin && y <= wizard.yMax){
                console.log('wizard!')
            }
        }
        if(x >= odlaw.xMin && x <= odlaw.xMax){
            if(y >= odlaw.yMin && y <= odlaw.yMax){
                console.log('odlaw!')
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
                <Route path="/" element={<App playing={playing} setPlaying={setPlaying}/>}>
                    <Route path="/" element={<Game 
                    clickHandler={clickHandler} 
                    coords={coords} visible={visible} 
                    levelSetup={levelSetup} 
                    playing={playing}
                    level={level}
                    
                    />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;