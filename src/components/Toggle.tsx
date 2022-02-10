import { useState, lazy, Suspense } from "react"

const Tilt = lazy(() => import('./Tilt').then(({ Tilt }) => ({ default: Tilt })))

type typeVoidFunction = () => void;

const useToggle = (init = false): [boolean, typeVoidFunction] => {
    const [on, setOn] = useState<boolean>(init)
    const toggle = () => setOn(!on)
    return [on, toggle]
}

export function Toggle() {
    const [showTilt, toggleTilt] = useToggle()

    return (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
            <label>
                Show tilt
                <input type="checkbox" checked={showTilt} onChange={toggleTilt} />
            </label>

            <div style={{ height: 150, width: 200, margin: "0 auto" }} className="totally-centered">
                {showTilt && (

                    <Suspense fallback={<div>loading ...</div>}>
                         <Tilt>
                            <div>
                                Lazy tilt
                            </div>
                        </Tilt>
                    </Suspense>
                   
                ) }
            </div>
        </div>
    )
}