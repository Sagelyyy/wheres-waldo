import React from "react";
import gameData from "../gameData";
import avatarData from "../images/avatars";

const Avatars = (props) => {

    const waldoFound = props.found.filter(item => item.index === 'waldo')
    const wizardFound = props.found.filter(item => item.index === 'wizard')
    const odlawFound = props.found.filter(item => item.index === 'odlaw')

    const avatars = avatarData.map((item, i) => {
        return(
            <div key={i}>
                {i === 0 ? waldoFound[0].found ? <div className="game--avatar--overlay"> </div> : null : null}
                {i === 1 ? wizardFound[0].found ? <div className="game--avatar--overlay"> </div> : null : null}
                {i === 2 ? odlawFound[0].found ? <div className="game--avatar--overlay"> </div> : null : null}
                <img  alt='character avatar' className="game--avatar" src={item}/>
            </div>
        )
    })

    return (
        avatars
    )
}

export default Avatars