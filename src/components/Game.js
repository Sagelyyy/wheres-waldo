import React from "react";
import Menu from "./Menu";
import images from "../images/images";
import gameData from "../gameData";

const Game = (props) => {
    
    const testIndex = gameData[0].levels.map(item => item.index)
    const test = (gameData.filter(data => data.levels))
    const testElements = test[0].levels.map((item, i) => {
        return (
            <img src={item.image}
                key={i}
                alt='find waldo'
                className='game--image--choose'
                onClick={() => props.levelSetup(testIndex[i])}
                style={{ width: "40%" }} ></img>
        )
    })

    const imgIndex = images.map((data, j) => data.index)

    const imgElements = images.map((pic, i) => {
        return (
            <img src={pic.image}
                key={i}
                alt='find waldo'
                className='game--image--choose'
                onClick={() => props.levelSetup(imgIndex[i])}
                style={{ width: "40%" }} ></img>
        )
    })

    const avatars = props.found.map(data => {
        return(data.image)
        // return (
        //     <img className="game--avatars" src={data.image}></img>
        //     )
    })

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    return (
        <div>
            {!props.playing ?
                <div>
                    <h1>Choose Your Difficulty!</h1>
                    {testElements}
                </div>
                :
                <div>
                    {/* {avatars} */}
                    <img alt='find waldo' className='game--image' onMouseDown={props.clickHandler} style={{ width: "100%" }} src={props.level[0].image} />
                    <Menu level={props.level} coords={props.coords} visible={props.visible} />
                </div>
            }

        </div>
    )
}

export default Game