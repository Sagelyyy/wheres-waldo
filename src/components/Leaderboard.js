import React from "react";
import images from "../images/images";
import levelData from "../levelData";
import { getFirestore, getDocs, collection, doc, setDoc, addDoc, deleteDoc, query, where, orderBy, limit } from "firebase/firestore";
import firebaseApp from "../firebase.js";

const Leaderboard = (props) => {

    const db = getFirestore(firebaseApp)

    const [leaderboardData, setLeaderboardData] = React.useState()


    const getLeaderboardData = async (difficulty) => {
        const dbData = []
        const userRef = collection(db, `users`, 'difficulties', props.difficultySelection);
        const q = query(userRef, orderBy('time'))
        const querySnapshot = await getDocs(q)

        querySnapshot.forEach(doc => {
            dbData.push(doc.data())
        })

        setLeaderboardData(dbData)
    }

    React.useEffect(() => {
        if (props.difficultySelection) {
            getLeaderboardData(props.difficultySelection)
        }
    }, [props.difficultySelection])

    const leaderboardElements = leaderboardData?.map((elem, i) => {
        return (
            <div className="leaderboard--container" key={i}>
                <h1 className="leaderboard--title">{props.difficultySelection} Leaderboard</h1>
                <h3 className="leaderboard--item">{elem.username}: {elem.time}</h3>
                <hr className="leaderboard--hr"></hr>
            </div>
        )
    })

    const levelIndex = levelData.map(data => data.index)
    const selectionElements = images.map((pic, i) => {
        const difficulties = ['Easy', 'Medium', 'Hard', 'Insane']
        return (
            <div className="leaderboard--item--container">
                <div className="hover--text">{difficulties[i]}</div>
            <img src={pic.image}
                key={i}
                alt='find waldo'
                className='game--image--choose'
                onClick={() => props.setDifficultySelection(levelIndex[i])}
                style={{ width: "35%" }} ></img>
            </div>
        )
    })

    return (
        <div>
            {!props.difficultySelection && <h1>Choose which Leaderboard</h1>}
            {props.difficultySelection ? leaderboardElements : <div className="game--selection">{selectionElements}</div>}
        </div>
    )
}


export default Leaderboard