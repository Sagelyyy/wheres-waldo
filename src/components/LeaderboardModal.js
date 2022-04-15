import React from "react";

const LeaderboardModal = (props) => {

    return (
        <div>
            <div style={props.modalStyle} className="modal--overlay">        </div>
            <div className="modal--container">
                <div className="modal--header"></div>
                <div className="modal--content">
                    <h4>Enter a username to submit your time!</h4>
                    <input />
                </div>
                <div className="modal--footer">
                    <button>Submit</button>
                </div>
            </div>
        </div>

    )
}

export default LeaderboardModal