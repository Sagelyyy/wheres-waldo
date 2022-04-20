import React from "react";
import { getFirestore, getDocs, collection, doc, setDoc, addDoc, deleteDoc, query, where, orderBy, limit } from "firebase/firestore";
import firebaseApp from "../firebase.js";

const Leaderboard = () => {

    const db = getFirestore(firebaseApp)

    const [leaderboardData, setLeaderboardData] = React.useState()

    const getLeaderboardData = async () => {
        // need to modify this we can filter by difficulty
        const userRef = collection(db, 'users')
        const q = query(userRef, orderBy('time'), limit(100))
        const dbData = []
        const querySnapshot = await getDocs(q)
        querySnapshot.forEach((doc) => {
            dbData.push(doc.data())
          });
          setLeaderboardData(dbData)
    }



    React.useEffect(() => {
        // maybe listen here for a change in difficulty so we can refresh data when user filters it.
        getLeaderboardData()
    },[])

    console.log(leaderboardData)
    const leaderboardElements = leaderboardData?.map(elem => {
        return(
            <div>
                <h1>{elem.username}: {elem.time}</h1>
            </div>
        )
    })

    return(
        <div>
            {leaderboardElements}
        </div>
    )
}


export default Leaderboard