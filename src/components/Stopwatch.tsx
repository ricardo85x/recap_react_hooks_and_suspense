import { useState, useRef, useEffect } from "react"


export function Stopwatch(){

    const [lapse, setLapse] =  useState(0)
    const [running, setRunning] = useState(false)
    const intervalRef = useRef<NodeJS.Timer|null>(null)

    useEffect(() => {

        return () => {
            if(intervalRef.current){
                clearInterval(intervalRef.current)
            }
        }
    },[])

    function handleRunClick(){
        if(running){
            if(intervalRef.current){
                clearInterval(intervalRef.current)
            }
        } else {
            const startTime = Date.now() - lapse
            intervalRef.current = setInterval(() => {
                setLapse(Date.now() - startTime)
            }, 0)
        }

        setRunning(!running)
    }

    function handleClearClick(){
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }
        setLapse(0)
        if(running){
            setRunning(false)
        }
    }

    return(
        <div style={{ textAlign: 'center' }}>
            <label
                style={{
                    fontSize: '5em',
                    display:'block'
                }}
            >
                {lapse}ms
            </label>
            <button onClick={handleRunClick} style={{ margin: 5, fontSize: '3em'}}>{running ? 'Stop' : 'Start'}</button>
            <button onClick={handleClearClick} style={{ margin: 5, fontSize: '3em'}}>Clear</button>
            
        </div>
    )
}