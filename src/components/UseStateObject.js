import React, { useState, useEffect } from 'react'

function UseStateObject() {
    const initialState = {
        firstName: '',
        lastName: ''
    }
    const [name, setName] = useState(initialState)
    const [count, setcount] = useState(0)

    useEffect(() => {
        console.log('Use Effect render');
    },[count])

    return (
        <div>
            <p>{count}</p>
            <button onClick={() => setcount(count + 1)}>Count</button>
            <hr />
            <hr />
            <form>
                <div>
                    <input type='text' value={name.firstName} onChange={e => setName({ ...name, firstName: e.target.value })}></input>
                </div>
                <div>
                    <input type='text' value={name.lastName} onChange={e => setName({...name, lastName: e.target.value })}></input>
                </div>
                <h3>Your Name is {name.firstName} {name.lastName}</h3>
            </form>
        </div>
    )
}

export default UseStateObject
