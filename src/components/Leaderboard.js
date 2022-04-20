import React from "react";
import images from "../images/images";
import levelData from "../levelData";
import { getFirestore, getDocs, collection, doc, setDoc, addDoc, deleteDoc, query, where, orderBy, limit } from "firebase/firestore";
import firebaseApp from "../firebase.js";

const Leaderboard = () => {

    const db = getFirestore(firebaseApp)

    const [leaderboardData, setLeaderboardData] = React.useState()
    const [difficultySelection, setDifficultySelection] = React.useState()

    const getLeaderboardData = async (difficulty) => {
       const dbData = []
       const userRef = collection(db, `users`, 'difficulties', difficulty,);
       const q = query(userRef, orderBy('time'), limit(100))
       const querySnapshot = await getDocs(q)
       
       querySnapshot.forEach(doc => {
           dbData.push(doc.data())
       })

       setLeaderboardData(dbData)
   
        // need to modify this we can filter by difficulty
        // const userRef = collection(db, 'users', 'difficuties', difficulty)
        // const q = query(userRef, orderBy('time'), limit(100))
        // const dbData = []
        // const querySnapshot = await getDocs(q)
        // querySnapshot.forEach((doc) => {
        //     // dbData.push(doc.data())
        //     console.log(doc.data())
        //   });
        //   setLeaderboardData(dbData)
    }

    console.log(leaderboardData)


    React.useEffect(() => {
        // maybe listen here for a change in difficulty so we can refresh data when user filters it.
        getLeaderboardData(difficultySelection)
    },[difficultySelection])

    console.log(difficultySelection)
    const leaderboardElements = leaderboardData?.map((elem,i) => {
        return(
            <div>
                <h1 key={i}>{elem.username}: {elem.time}</h1>
            </div>
        )
    })

    const levelIndex = levelData.map(data => data.index)
    const selectionElements = images.map((pic, i) => {
        return (
            <img src={pic.image}
                key={i}
                alt='find waldo'
                className='game--image--choose'
                onClick={() => setDifficultySelection(levelIndex[i])}
                style={{ width: "40%" }} ></img>
        )
    })

    return(
        <div>
            {difficultySelection ? leaderboardElements : selectionElements}
        </div>
    )
}


export default Leaderboard