import React, { useRef } from "react";
import { getFirestore, getDocs, collection, doc, setDoc, addDoc, deleteDoc, query, where } from "firebase/firestore";
import firebaseApp from "../firebase.js";

const Timer = (props) => {

    const [timer, setTimer] = React.useState(0)
    const [isActive, setIsActive] = React.useState(false)
    const increment = useRef(null)

    const db = getFirestore(firebaseApp)

    React.useEffect(() => {
        if (props.win) {
            stopTimer()
        } else {
            setIsActive(true)
            startTimer()
        }
        return () => {
            clearInterval(increment.current)
        }
    }, [isActive, props.win])

    const startTimer = () => {
        if (props.playing) {
            if (isActive) {
                increment.current = setInterval(() => {
                    setTimer(old => old + 1)
                }, 1000)
            }
        }
    }

    const stopTimer = () => {
        console.log('fired')
        setIsActive(false)
        writeScoreData(formatTime())
    }

    const writeScoreData = async (data) => {
        const userData = {username: 'test', time: data}
        const docRef = await setDoc(doc(db, "users", 'test'), userData);
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)

        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return (

        <p>{formatTime()}</p>
    )
}

export default Timer