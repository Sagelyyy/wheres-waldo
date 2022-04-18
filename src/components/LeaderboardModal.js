import React from "react";
import { getFirestore, getDocs, collection, doc, setDoc, addDoc, deleteDoc, query, where } from "firebase/firestore";
import firebaseApp from "../firebase.js";

const LeaderboardModal = (props) => {

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
        // can we use the submit button to route back to the home page?
        event.preventDefault()
        const docRef = await setDoc(doc(db, "users", 'test'), props.userData);
    }

    console.log(props.userData)

    return (
        <div>
            <div style={props.modalStyle} className="modal--overlay">        </div>
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
                    <button onClick={modalHandler}>Submit</button>
                </div>
            </div>
        </div>

    )
}

export default LeaderboardModal