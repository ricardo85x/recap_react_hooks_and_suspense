import { useEffect } from "react"
import { useCounter } from "../hooks/useCounter"

export function Counter(){
    const { count, incrementCount} =  useCounter({  step: 2 })

    useEffect(() => {
        window.localStorage.setItem('count', count.toString())
    }, [count])

    return <button onClick={incrementCount}>{count}</button>
}

