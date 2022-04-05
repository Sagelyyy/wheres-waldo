import React from "react";
import Menu from "./Menu";
import waldo from "../images/easy.jpeg"
import images from "../images/images";

const Game = (props) => {

    const imgElements = images.map((pic, i) => {
        return(
            <img src={pic}
            key={i}     
            alt='find waldo' 
            className='game--image--choose' 
            onClick={() => props.levelSetup('easy')} 
            style={{ width: "25%" }} ></img>
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
                    {console.log(props.level)}
                    <img alt='find waldo' className='game--image' onMouseDown={props.clickHandler} style={{ width: "100%" }} src={props.level[0].image} />
                    <Menu level={props.level} coords={props.coords} visible={props.visible} />
                </div>
            }

        </div>
    )
}

export default Game