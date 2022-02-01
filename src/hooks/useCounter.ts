import { useEffect, useState } from "react";

export function useCounter({ step = 1}) {

    const initialState = () => Number(window.localStorage.getItem('count') || 0)
    const [count, setCount] =  useState(initialState);
    const incrementCount = () => setCount(currentCount => currentCount + step)


    
    return { count, incrementCount}
}



