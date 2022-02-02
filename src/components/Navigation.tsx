import { NavLink } from "react-router-dom"

export function Navigation() {


    return (
        <nav 
            style={{ 
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                flexWrap: "wrap"
            }}
        >
            <NavLink to="/">Counter Hook</NavLink>
            <NavLink to="/tilt">UseRef w/Tilt</NavLink>
            <NavLink to="/stopwatch">Stopwatch</NavLink>
            <NavLink to="/stopwatch2">Stopwatch w/ Reducer</NavLink>
            <NavLink to="/stopwatch3">Stopwatch w/ Reducer simplified</NavLink>
            <NavLink to="/stopwatch4">Stopwatch w/ useStopwatch</NavLink>
           

        </nav>
    )
}