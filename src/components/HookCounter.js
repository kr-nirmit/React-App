import React, {useState} from 'react'

function HookCounter() {
    const [count, setCount] = useState(0)
    const initialCount = 0
    const [count1, setCount1] = useState(initialCount)
    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setCount(count + 1)}>Count</button>
            <hr />
            <hr />
            <p>{count1}</p>
            <button onClick={() => setCount1(prevCount => prevCount + 1)}>Increment</button>
            <button onClick={() => setCount1(prevCount => prevCount - 1)}>Decrement</button>
            <button onClick={() => setCount1(initialCount)}>Reset</button>
        </div>
    )
}

export default HookCounter
