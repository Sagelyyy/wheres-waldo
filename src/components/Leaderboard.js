import React from "react";
import images from "../images/images";
import levelData from "../levelData";
import { getFirestore, getDocs, collection, query, orderBy, limit } from "firebase/firestore";
import firebaseApp from "../firebase.js";

const Leaderboard = (props) => {

    const db = getFirestore(firebaseApp)

    const [leaderboardData, setLeaderboardData] = React.useState()


    const getLeaderboardData = async (difficulty) => {
        const dbData = []
        const userRef = collection(db, `users`, 'difficulties', difficulty);
        const q = query(userRef, orderBy('time'), limit(50))
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
                <h3 className="leaderboard--item">
                    <p className="leaderboard--digit">#{i + 1}</p> - <p className="leaderboard--name">{elem.username}</p>: <p className="leaderboard--time">{elem.time}</p>
                    </h3>
            </div>
        )
    })

    const levelIndex = levelData.map(data => data.index)
    const selectionElements = images.map((pic, i) => {
        const difficulties = ['Easy', 'Medium', 'Hard', 'Insane']
        return (
            <div key={i} className="leaderboard--item--container">
                <div className="hover--text" onClick={() => props.setDifficultySelection(levelIndex[i])}><p>{difficulties[i]}</p></div>
                <img src={pic.image}
                    alt='find waldo'
                    className='game--image--choose'
                    style={{ width: "60%" }} ></img>
            </div>
        )
    })

    return (
        <div>
            {!props.difficultySelection && <h1 className="leaderboard--title">Choose which Leaderboard to view</h1>}
            {props.difficultySelection && <h1 className="leaderboard--title">{props.difficultySelection} Leaderboard</h1>}
            {props.difficultySelection ? <div className="leaderboard--items--container">{leaderboardElements}</div> : <div className="level--images">{selectionElements}</div>}
        </div>
    )
}


export default Leaderboard