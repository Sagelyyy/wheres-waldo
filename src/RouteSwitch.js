import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gameData from "./gameData.js";
import Game from "./components/Game.js";
import App from "./App.js";
import avatarData from "./images/avatars.js";


const RouteSwitch = () => {

    // Going to be storing state in here, and passing it down to the different routes.

    const [coords, setCoords] = React.useState({ x: 0, y: 0 })
    const [visible, setVisible] = React.useState(false)
    const [playing, setPlaying] = React.useState(false)
    const [characters, setCharacters] = React.useState([])
    const [level, setLevel] = React.useState()
    const [found, setFound] = React.useState([
        {index: 'waldo', image: avatarData[0], found: false},
        {index: 'wizard', image: avatarData[1], found: false},
        {index: 'odlaw', image: avatarData[2], found: false}
    ])

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
        console.log(characters[0].waldo[0].xMin)

        // const wizard = level.map(data => data.characters.filter(char => char.name === 'wizard')).flat()
        // const odlaw = level.map(data => data.characters.filter(char => char.name === 'odlaw')).flat()
        // if (x >= characters[0].waldo.xMin && x <= waldo[0].xMax) {
        //     if (y >= waldo[0].yMin && y <= waldo[0].yMax) {
        //         console.log('waldo!')
        //     }
        // }
        // if (x >= wizard[0].xMin && x <= wizard[0].xMax) {
        //     if (y >= wizard[0].yMin && y <= wizard[0].yMax) {
        //         console.log('wizard!')
        //     }
        // }
        // if (x >= odlaw[0].xMin && x <= odlaw[0].xMax) {
        //     if (y >= odlaw[0].yMin && y <= odlaw[0].yMax) {
        //         console.log('odlaw!')
        //     }
        // }
    }

    const levelSetup = (difficulty) => {
        switch (difficulty) {
            case 'easy':
                const waldo = gameData.filter(item => item.waldo).map(item => item.waldo.easy)
                console.log(waldo)
                setLevel(gameData[0].levels.filter(data => data.index === 'easy'))
                setCharacters([{waldo: waldo}])
                setPlaying(true)
                break;
            case 'medium':
                setLevel(gameData[0].levels.filter(data => data.index === 'medium'))
                setPlaying(true)
                break;
            case 'hard':
                setLevel(gameData[0].levels.filter(data => data.index === 'hard'))
                setPlaying(true)
                break;
            case 'insane':
                setLevel(gameData[0].levels.filter(data => data.index === 'insane'))
                setPlaying(true)
                break;
            default:
                console.log('something went wrong')
                break;
        }
        setupCharacters()
    }

    const setupCharacters = () => {
        setFound([{
            waldo: {image: avatarData[0], found: false},
            wizard: {image: avatarData[1], found: false},
            odlaw: {image: avatarData[2], found: false}
        }])
    }

    const checkWin = () => {

    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App playing={playing} setPlaying={setPlaying} />}>
                    <Route path="/" element={<Game
                        clickHandler={clickHandler}
                        coords={coords} visible={visible}
                        levelSetup={levelSetup}
                        playing={playing}
                        level={level}
                        found={found}

                    />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;