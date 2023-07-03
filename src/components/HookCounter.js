import { useWeb3React } from '@web3-react/core'
import React, {useState,useEffect} from 'react'

function HookCounter() {
    const {
        account
      } = useWeb3React()
    console.log("🚀 ~ file: HookCounter.js:15 ~ HookCounter ~ account:", account)
    const [count, setCount] = useState(0)
    const initialCount = 0
    const [count1, setCount1] = useState(initialCount)

    useEffect(() => {
        document.title = `You Clicked ${count} times`
    })

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
