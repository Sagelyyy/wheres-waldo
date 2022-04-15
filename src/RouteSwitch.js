import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import gameData from "./gameData.js";
import Game from "./components/Game.js";
import App from "./App.js";
import avatarData from "./images/avatars.js";
import levelData from "./levelData.js";
import Leaderboard from "./components/Leaderboard.js";
import firebaseApp from "./firebase.js";
import { getFirestore, getDocs, collection, doc, setDoc, addDoc, deleteDoc, query, where } from "firebase/firestore";


const RouteSwitch = () => {
    const [coords, setCoords] = React.useState({ x: 0, y: 0 })
    const [screenPercent, setScreenpercent] = React.useState({ x: 0, y: 0 })
    const [showMenu, setShowMenu] = React.useState(false)
    const [playing, setPlaying] = React.useState(false)
    const [characters, setCharacters] = React.useState([])
    const [level, setLevel] = React.useState()
    const [found, setFound] = React.useState([
        { index: 'waldo', image: avatarData[0], found: false },
        { index: 'wizard', image: avatarData[1], found: false },
        { index: 'odlaw', image: avatarData[2], found: false }
    ])
    const [win, setWin] = React.useState(false)


    const db = getFirestore(firebaseApp)

    const getScoreData = async () => {
        const dbItems = []
        const querySnapshot = await getDocs(collection(db, 'users'));
        querySnapshot.forEach((doc) => {
            dbItems.push(doc.data())
        });
        console.log(dbItems.map(item => item.score))
    }

    const getCoordData = async (difficulty) => {
        const names = ['waldo', 'wizard', 'odlaw']
        const dbItems = []
        for (let i = 0; i < names.length; i += 1) {
            const querySnapshot = await getDocs(collection(db, `coordinates`, difficulty, names[i]));
            querySnapshot.forEach((doc) => {
                dbItems.push(doc.data())
            });
        }
        return dbItems
    }

    React.useEffect(() => {
        // getScoreData()
        // .then(data => console.log(data))
    }, [])


    const clickHandler = (e) => {
        let htmlScroll = document.getElementsByTagName('html')[0].scrollTop
        let screenWidth = document.documentElement.clientWidth
        let screenHeight = document.documentElement.clientHeight
        let xPercent = (e.nativeEvent.offsetX / e.nativeEvent.target.offsetWidth) * 100
        let yPercent = (e.nativeEvent.offsetY / e.nativeEvent.target.offsetHeight) * 100
        setScreenpercent({ x: xPercent, y: yPercent })

        if (e.clientY > screenHeight - 50) {
            e.clientY -= 50
        }
        if (e.clientX > screenWidth - 100) {
            e.clientX -= 100
        }

        setCoords({ x: e.clientX, y: e.clientY + htmlScroll })

        setShowMenu(old => !old)

        console.log('x: ' + xPercent, 'y: ' + yPercent)
    }

    console.log(characters)

    const checkSelection = (x, y, character) => {



        const waldo = characters.filter(item => item.index === 'waldo')
        const wizard = characters.filter(item => item.index === 'wizard')
        const odlaw = characters.filter(item => item.index === 'odlaw')
        if (x >= waldo[0].xMin && x <= waldo[0].xMax) {
            if (y >= waldo[0].yMin && y <= waldo[0].yMax) {
                if (character === 'waldo') {
                    const arr = found.slice()
                    const charIndex = arr.findIndex(i => i.index === character)
                    arr[charIndex].found = true
                    setFound(arr)
                }
            }
        }
        if (x >= wizard[0].xMin && x <= wizard[0].xMax) {
            if (y >= wizard[0].yMin && y <= wizard[0].yMax) {
                if (character === 'wizard') {
                    const arr = found.slice()
                    const charIndex = arr.findIndex(i => i.index === character)
                    arr[charIndex].found = true
                    setFound(arr)
                }
            }
        }
        if (x >= odlaw[0].xMin && x <= odlaw[0].xMax) {
            if (y >= odlaw[0].yMin && y <= odlaw[0].yMax) {
                if (character === 'odlaw') {
                    const arr = found.slice()
                    const charIndex = arr.findIndex(i => i.index === character)
                    arr[charIndex].found = true
                    setFound(arr)
                }
            }
        }
        setShowMenu(false)
        checkWin()
    }

    const levelSetup = (difficulty) => {
        getCoordData(difficulty)
        .then (data => setCharacters(data))
        setPlaying(true)
        setWin(false)
        switch (difficulty) {
            case 'easy':
                setLevel(levelData.filter(data => data.index === difficulty))
                break;
            case 'medium':
                setLevel(levelData.filter(data => data.index === difficulty))
                break;
            case 'hard':
                setLevel(levelData.filter(data => data.index === difficulty))
                break;
            case 'insane':
                setLevel(levelData.filter(data => data.index === difficulty))
                break;
            default:
                console.log('something went wrong')
                break;
        }
        setupCharacters()
    }

    const setupCharacters = () => {
        setFound([
            { index: 'waldo', image: avatarData[0], found: false },
            { index: 'wizard', image: avatarData[1], found: false },
            { index: 'odlaw', image: avatarData[2], found: false }
        ])
    }

    const checkWin = () => {
        let win = false
        for (let i = 0; i < found.length; i += 1) {
            if (found[i].found === true) {
                win = true
            } else {
                win = false
            }
        }
        if (win === true) {
            setWin(true)
        }
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App playing={playing} setPlaying={setPlaying} />}>
                    <Route path="/" element={<Game
                        clickHandler={clickHandler}
                        coords={coords} 
                        showMenu={setShowMenu}
                        levelSetup={levelSetup}
                        playing={playing}
                        level={level}
                        checkSelection={checkSelection}
                        screenPercent={screenPercent}
                        found={found}
                        win={win}
                    />} />
                    <Route path='/leaderboard' element={<Leaderboard />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default RouteSwitch;