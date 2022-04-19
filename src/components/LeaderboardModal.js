import React from "react";
import { getFirestore, getDocs, collection, doc, setDoc, addDoc, deleteDoc, query, where } from "firebase/firestore";
import firebaseApp from "../firebase.js";

const LeaderboardModal = (props) => {

    const [submitted, setSubmitted] = React.useState(false)

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
        const docRef = await setDoc(doc(db, "users", 'test'), props.userData);
        setSubmitted(true)
        setTimeout(() => {
            props.resetGame()
            setSubmitted(false)
        }, 2000)
    }

    console.log(props.userData)

    return (
        <div>
            <div style={props.modalStyle} className="modal--overlay"><h3>You Win!</h3></div>
            <div className="modal--container">
                <div className="modal--header"></div>
                <div className="modal--content">
                    <h4>Enter a username to submit your time!</h4>
                    <input
                        onChange={handleChange}
                        name='username'
                    />
                </div>
                <div className="modal--footer">
                    {!submitted ? <button onClick={modalHandler}>Submit</button> : null} 
                    {submitted && <h6>Now Redireting you home, thanks for submitting!</h6>}
                </div>
            </div>
        </div>

    )
}

export default LeaderboardModal