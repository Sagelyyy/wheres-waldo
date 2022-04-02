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

    if (props.visible) {
        return (
            <ul className="menu" style={menuStyle}>
                <li className="menu--item">Test 1</li>
                <li className="menu--item">Test 2</li>
            </ul>
        )
    }
}

export default Menu