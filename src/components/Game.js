import React, { useRef } from "react";
import Menu from "./Menu";
import images from "../images/images";
import levelData from "../levelData";
import Timer from "./Timer";
import LeaderboardModal from "./LeaderboardModal";
import Avatars from "./Avatars";

const Game = (props) => {



    const getResize = () => {
        const mHeight = imageRef.current?.getBoundingClientRect().height
        const mTop = imageRef.current?.getBoundingClientRect().top
        const style = {
            height: mHeight,
            top: mTop
        }
        setModalStyle(style)
    }

    window.onresize = getResize

    const imageRef = useRef(null)

    const [modalStyle, setModalStyle] = React.useState(0)


    React.useEffect(() => {
        const mHeight = imageRef.current?.getBoundingClientRect().height
        const mTop = imageRef.current?.getBoundingClientRect().top
        const style = {
            height: mHeight,
            top: mTop
        }
        setModalStyle(style)

    }, [imageRef.current])

    const levelIndex = levelData.map(data => data.index)
    const imgElements = images.map((pic, i) => {
        const difficulties = ['Easy', 'Medium', 'Hard', 'Insane']
        return (
            <div key={i} className="leaderboard--item--container">
                <div className="hover--text" onClick={() => props.levelSetup(levelIndex[i])}><p>{difficulties[i]}</p></div>
                <img src={pic.image}
                    alt='find waldo'
                    className='game--image--choose'
                    
                    style={{ width: "60%" }} ></img>
            </div>
        )
    })

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    return (
        <div>
            {!props.playing ?
                <div>
                    <h1 className="game--title">Choose Your Difficulty!</h1>
                    <div className="level--images">
                        {imgElements}
                    </div>
                </div>
                :
                <div>
                    {props.showModal ? <LeaderboardModal difficultySelection={props.difficultySelection} resetGame={props.resetGame} setUserData={props.setUserData} userData={props.userData} modalStyle={modalStyle} /> : null}
                    <div className="game--avatars--container">
                        <Avatars found={props.found} />
                        <Timer userData={props.userData} setUserData={props.setUserData} playing={props.playing} win={props.win} />
                    </div>
                    <img ref={imageRef} alt='find waldo' className='game--image' onMouseDown={props.clickHandler} src={props.level[0].image} />
                    <Menu level={props.level} coords={props.coords} showMenu={props.showMenu} checkSelection={props.checkSelection} screenPercent={props.screenPercent} />
                </div>
            }

        </div>
    )
}

export default Game