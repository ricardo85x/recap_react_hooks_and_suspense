import {useRef, useEffect } from "react"
import VanillaTilt from 'vanilla-tilt'


function Tilt(props: any) {

    const tiltRef = useRef<any>()

    useEffect(() => {
        VanillaTilt.init(tiltRef.current, {
            max: 25,
            speed: 400,
            glare: true,
            'max-glare': 0.5
        })

        return () => tiltRef.current.vanillaTilt.destroy()
        
    }, [])

    return(
        <div ref={tiltRef} className="tilt-root"  style={{ textAlign: 'center', padding: '20px' }}>
            <div style={{ fontSize: '5em'}}>
                {props.children}
            </div>
        </div>
    )
}

export function TiltBox() {
    return(
        <div className="totally-centered">
            <Tilt>
                <div className="totally-centered">
                    vanilla-tilt.js
                </div>
            </Tilt>
        </div>
    )
}