import React, { useRef } from "react";
import Menu from "./Menu";
import images from "../images/images";
import gameData from "../gameData";
import levelData from "../levelData";
import Timer from "./Timer";
import LeaderboardModal from "./LeaderboardModal";

const Game = (props) => {

    const imageRef = useRef(null)

    const [modalStyle, setModalStyle] = React.useState(0)
    const [userData, setUserData] = React.useState({username: '', time: ''})

    React.useEffect(() => {
        const mHeight = imageRef.current?.getBoundingClientRect().height
        const mTop = imageRef.current?.getBoundingClientRect().top
        const style = {
            height: mHeight,
            top: mTop
        }
        setModalStyle(style)
        console.log('game useeffect')
    }, [imageRef.current])

    const levelIndex = levelData.map(data => data.index)
    const imgElements = images.map((pic, i) => {
        return (
            <img src={pic.image}
                key={i}
                alt='find waldo'
                className='game--image--choose'
                onClick={() => props.levelSetup(levelIndex[i])}
                style={{ width: "40%" }} ></img>
        )
    })

    const waldoFound = props.found.filter(item => item.index === 'waldo')
    const wizardFound = props.found.filter(item => item.index === 'wizard')
    const odlawFound = props.found.filter(item => item.index === 'odlaw')

    const avatars = gameData.map((item, i) => {
        // I dont like this. Need a better way
        if (i === 0) {
            return (
                <div>
                    {waldoFound[0].found ? <div className="game--avatar--overlay"> </div> : null}
                    <img alt='waldo avatar' className="game--avatar" src={item.avatar} key={i} />
                </div>
            )
        }
        if (i === 1) {
            return (
                <div>
                    {wizardFound[0].found ? <div className="game--avatar--overlay"> </div> : null}
                    <img alt='wizard avatar' className="game--avatar" src={item.avatar} key={i} />
                </div>
            )
        }
        if (i === 2) {
            return (
                <div>
                    {odlawFound[0].found ? <div className="game--avatar--overlay"> </div> : null}
                    <img alt='odlaw avatar' className="game--avatar" src={item.avatar} key={i} />
                </div>
            )
        }
    })

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    return (
        <div>
            {!props.playing ?
                <div>
                    <h1>Choose Your Difficulty!</h1>
                    <div className="game--selection">
                        {imgElements}
                    </div>
                </div>
                :
                <div>
                    {props.showModal ? <LeaderboardModal resetGame={props.resetGame} setUserData={setUserData} userData={userData} modalStyle={modalStyle} /> : null}
                    <div className="game--avatars--container">
                        {avatars}
                        <Timer userData={userData} setUserData={setUserData} playing={props.playing} win={props.win} />
                    </div>
                    <img ref={imageRef} alt='find waldo' className='game--image' onMouseDown={props.clickHandler} src={props.level[0].image} />
                    <Menu level={props.level} coords={props.coords} showMenu={props.showMenu} checkSelection={props.checkSelection} screenPercent={props.screenPercent} />
                </div>
            }

        </div>
    )
}

export default Game