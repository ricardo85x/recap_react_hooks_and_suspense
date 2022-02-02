import { useReducer, useRef, useEffect } from "react"

function reducer(currentState: any, newState: any) {
    return { ...currentState, ...newState }
}

function useStopwatch(){

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


    return {
        running, lapse, handleClearClick, handleRunClick
    }

}

export function StopwatchHook(){

    const stopwatchOne = useStopwatch()
    const stopwatchTwo = useStopwatch()

    return(
        <div style={{ textAlign: 'center', border: '1px solid', padding: '5px'}}>
            <label
                style={{
                    fontSize: '5em',
                    display:'block'
                }}
            >
                {stopwatchOne.lapse}ms
            </label>
            <button onClick={stopwatchOne.handleRunClick} style={{ margin: 5, fontSize: '3em'}}>{stopwatchOne.running ? 'Stop' : 'Start'}</button>
            <button onClick={stopwatchOne.handleClearClick} style={{ margin: 5, fontSize: '3em'}}>Clear</button>

            <hr />
            <strong>Lapse Difference: </strong>
            <span>{stopwatchOne.lapse - stopwatchTwo.lapse }ms</span>
            <hr />

            <label
                style={{
                    fontSize: '5em',
                    display:'block'
                }}
            >
                {stopwatchTwo.lapse}ms
            </label>
            <button onClick={stopwatchTwo.handleRunClick} style={{ margin: 5, fontSize: '3em'}}>{stopwatchTwo.running ? 'Stop' : 'Start'}</button>
            <button onClick={stopwatchTwo.handleClearClick} style={{ margin: 5, fontSize: '3em'}}>Clear</button>
        </div>
    )
}