import { useReducer, useRef, useEffect } from "react"

function reducer(currentState: any, newState: any) {
    return { ...currentState, ...newState }
}

export function StopwatchWithReducerV2(){

    const [{running, lapse}, setState] = useReducer(reducer, {
        running: false,
        lapse: 0
    })

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
                setState({ lapse: Date.now() - startTime })
            }, 0)
        }

        setState({ running: !running})
    }

    function handleClearClick(){
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }

        setState({ lapse: 0, running: false })

       
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