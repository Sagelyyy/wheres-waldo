import React, { useRef } from "react";



const Timer = (props) => {

    const [timer, setTimer] = React.useState(0)
    const [isActive, setIsActive] = React.useState(false)
    const increment = useRef(null)



    React.useEffect(() => {
        if (props.win) {
            stopTimer()
            props.setUserData(old => {
                return ({
                    ...old,
                    time: formatTime()
                })
            })
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
        setIsActive(false)
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)

        return `${getMinutes} : ${getSeconds}`
    }

    return (

        <p>{formatTime()}</p>
    )
}

export default Timer