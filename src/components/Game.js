import React from "react";
import Menu from "./Menu";
import waldo from "../images/4B42MkD.jpeg"

const Game = (props) => {

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
      });

    return(
        <div>
            <img alt='find waldo' className='game--image' onMouseDown={props.clickHandler} style={{width:"100%"}} src={waldo} />
            <Menu coords={props.coords} visible={props.visible}/>
        </div>
    )
}

export default Game