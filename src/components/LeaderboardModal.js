import React from "react";
import { getFirestore, collection, addDoc} from "firebase/firestore";
import firebaseApp from "../firebase.js";

const LeaderboardModal = (props) => {

    const [submitted, setSubmitted] = React.useState(false)
    const [invalidUsername, setInvalidUsername] = React.useState(false)

    const db = getFirestore(firebaseApp)

    const handleChange = (event) => {
        const { name, value } = event.target
        props.setUserData(old => {
            return ({
                ...old,
                [name]: value
            })
        })
    }

    const modalHandler = async (event) => {
        event.preventDefault()
        if (props.userData.username) {
            setInvalidUsername(false)
            const docRef = await addDoc(collection(db, "users", "difficulties", props.difficultySelection), props.userData);
            setSubmitted(true)
            setTimeout(() => {
                props.resetGame()
                setSubmitted(false)
            }, 2000)
        } else{
            setInvalidUsername(true)
        }
    }

    return (
        <div>
            <div style={props.modalStyle} className="modal--overlay"><h3>You Win!</h3></div>
            <div className="modal--container">
                <div className="modal--header"><h1>You Won!</h1></div>
                <div className="modal--content">
                    <h4 className="modal--description">Enter a username to submit your time of: {props.userData.time}</h4>
                    {invalidUsername && <h4 className="modal--invalid">Please enter a valid username.</h4>}
                    <input
                        placeholder="username"
                        maxLength='20'
                        onChange={handleChange}
                        name='username'
                        required
                    />
                </div>
                <div className="modal--footer">
                    {!submitted ? <button className="modal--submit" onClick={modalHandler}>Submit</button> : null}
                    {submitted && <h5 className="modal--redirect">Now Redireting you home, thanks for submitting!</h5>}
                </div>
            </div>
        </div>

    )
}

export default LeaderboardModal