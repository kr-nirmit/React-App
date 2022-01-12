import React, { useState, useEffect } from 'react'

function IntervalCounter() {
    const [count, setcount] = useState(0)

    useEffect(() => {
        const interval = setInterval(tick, 1000)
        return () => {
            clearInterval(interval)
        }
    }, [count])

    const tick = () => {
        setcount(count+1)
    }

    return (
        <div>
            {count}
        </div>
    )
}

export default IntervalCounter
