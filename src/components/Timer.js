import React, {useRef} from "react";

const Timer = (props) => {

    const [timer, setTimer] = React.useState(0)
    const increment = useRef(null)

    React.useEffect(() => {
        startTimer()
        return () => {
            clearInterval(increment.current)
        }
    },[])

    const startTimer = () => {
        if(props.playing){
            increment.current = setInterval(() => {
                setTimer(old => old + 1)
            }, 1000)
        }
    }

    const formatTime = () => {
        const getSeconds = `0${(timer % 60)}`.slice(-2)
        const minutes = `${Math.floor(timer / 60)}`
        const getMinutes = `0${minutes % 60}`.slice(-2)
        const getHours = `0${Math.floor(timer / 3600)}`.slice(-2)
    
        return `${getHours} : ${getMinutes} : ${getSeconds}`
    }

    return(
        
        <p>{formatTime()}</p>
    )
}

export default Timer