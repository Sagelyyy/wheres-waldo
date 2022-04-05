import React from "react";
import "../App.css"

const Menu = (props) => {

    const menuStyle =
    {
        position: 'absolute',
        top: props.coords.y,
        left: props.coords.x,
        backgroundColor: 'white',
        listStyleType: 'none',
        width: '6rem',
        borderRadius: '4px',
        border: '1px solid black'
    }

    const characters = props.level[0].characters[0]
    
    if (props.visible) {
        return (
            <ul className="menu" style={menuStyle}>
                <li className="menu--item">{characters.waldo.name}</li>
                <li className="menu--item">{characters.wizard.name}</li>
                <li className="menu--item">{characters.odlaw.name}</li>
            </ul>
        )
    }
}

export default Menu