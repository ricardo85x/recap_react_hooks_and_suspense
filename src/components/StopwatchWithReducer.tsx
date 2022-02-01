import { useReducer, useRef, useEffect } from "react"

function reducer(state: any, action: any) {
    switch (action.type) {
        case 'LAPSE':
            return {
                ...state,
                lapse: action.now - action.startTime
            }
         
        case 'TOGGLE_RUNNING':
            return {
                ...state,
                running: !state.running
            }
        case 'CLEAR':
            return {
                ...state,
                lapse:0,
                running: state.running? false : state.running
            }
        
        default:
            return state
    }
}

export function StopwatchWithReducer(){

    const [{running, lapse}, dispatch] = useReducer(reducer, {
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
                dispatch({ type: 'LAPSE', now: Date.now(), startTime })
            }, 0)
        }

        dispatch({ type: 'TOGGLE_RUNNING'})
    }

    function handleClearClick(){
        if(intervalRef.current){
            clearInterval(intervalRef.current)
        }

        dispatch({ type: 'CLEAR'})

       
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