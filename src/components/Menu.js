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
                <li onClick={() => props.checkSelection(props.screenPercent.x, props.screenPercent.y, 'waldo')} className="menu--item">Waldo</li>
                <li onClick={() => props.checkSelection(props.screenPercent.x, props.screenPercent.y, 'wizard')} className="menu--item">Wizard</li>
                <li onClick={() => props.checkSelection(props.screenPercent.x, props.screenPercent.y, 'odlaw')} className="menu--item">Odlaw</li>
            </ul>
        )
    }
}

export default Menu