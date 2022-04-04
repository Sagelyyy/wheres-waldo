import React from "react";
import Menu from "./Menu";
import waldo from "../images/4B42MkD.jpeg"

const Game = (props) => {

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    const [playing, setPlaying] = React.useState(false)

    return (
        <div>
            {!playing ?
                <div>
                    <h1>Choose Your Difficulty!</h1>
                    <img alt='find waldo' className='game--image--choose' onClick={() => setPlaying(true)} style={{ width: "25%" }} src={waldo} />
                </div>
                    : 
                <div>
                    <img alt='find waldo' className='game--image' onMouseDown={props.clickHandler} style={{ width: "100%" }} src={waldo} />
                    <Menu coords={props.coords} visible={props.visible} />
                </div>
            }

        </div>
    )
}

export default Game