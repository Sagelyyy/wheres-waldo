import React from "react";
import Menu from "./Menu";
import images from "../images/images";
import gameData from "../gameData";
import levelData from "../levelData";

const Game = (props) => {

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

    const avatars = props.found.map(data => {
        return(
        <img className='game--avatars' src={data.image} />
        )
    })

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    return (
        <div>
            {!props.playing ?
                <div>
                    <h1>Choose Your Difficulty!</h1>
                    {imgElements}
                </div>
                :
                <div>
                    {avatars}
                    <img alt='find waldo' className='game--image' onMouseDown={props.clickHandler} style={{ width: "100%" }} src={props.level[0].image} />
                    <Menu level={props.level} coords={props.coords} visible={props.visible} />
                </div>
            }

        </div>
    )
}

export default Game