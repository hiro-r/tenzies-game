import React from "react"

export default function Timer(props) {
  const [seconds, setSeconds] = React.useState(0)
  const [minutes, setMinutes] = React.useState(0)

  React.useEffect(() => {
    let intervalId

    if (props.timerRunning) {
      intervalId = setInterval(() => {
        setSeconds(prevSeconds => {
          if (prevSeconds === 59) {
            setMinutes(prevMinutes => prevMinutes + 1)
            return 0
          } else {
            return prevSeconds + 1
          }
        })
      }, 1000)
    }
    return () => clearInterval(intervalId)
  }, [props.timerRunning])

  React.useEffect(() => {
    if (props.resetTimer) {
        setSeconds(0)
        setMinutes(0)
    }
}, [props.resetTimer])

  return (
    <div className="timer">
      {String(minutes).padStart(2, "0")}:{String(seconds).padStart(2, "0")}
    </div>
  )
}