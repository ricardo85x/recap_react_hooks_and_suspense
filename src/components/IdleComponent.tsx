import {useEffect, useState} from 'react'
import createActivityDetector, {ActivityDetectorOptions} from 'activity-detector';

function useIdle(options: ActivityDetectorOptions){
    const [isIdle, setIsIdle] = useState(false)

    useEffect(() => {
        const activityDetector = createActivityDetector(options)
        activityDetector.on('idle', () => setIsIdle(true))
        activityDetector.on('active', () => setIsIdle(false))
        // on unmount
        return () => activityDetector.stop()

    }, [])
    return isIdle
}

export function IdleComponent(){
    const isIdle = useIdle({timeToIdle: 5000});
    
    return(
        <div style={{ textAlign: 'center',  padding: '20px' }}>
            <div style={{fontSize: '5em'}}>{isIdle ? ' are you still there' : 'Hello there'}</div>
        </div>
    )
}
