import { useEffect } from "react"
import { useCounter } from "../hooks/useCounter"

export function Counter(){
    const { count, incrementCount} =  useCounter({  step: 2 })

    useEffect(() => {
        window.localStorage.setItem('count', count.toString())
    }, [count])

    return (
        <div style={{ textAlign: 'center', padding: '20px' }}>
            <button style={{ margin: 5, fontSize: '3em'}} onClick={incrementCount}>{count}</button>
        </div>
        
    )
}

