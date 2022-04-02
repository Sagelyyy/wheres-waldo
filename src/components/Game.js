import React from "react";
import Menu from "./Menu";
import waldo from "../images/4B42MkD.jpeg"

const Game = (props) => {

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });

    return(
        <div>
            <img className='game--image' onMouseDown={props.clickHandler} style={{width:"75%"}} src={waldo} />
            <Menu coords={props.coords} visible={props.visible}/>
        </div>
    )
}

export default Game