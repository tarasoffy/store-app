import React, { useState } from 'react'


function Counter({count}) {

    let [counter, setCounter] = useState(count)

    const counterDecrement = () => {
        if (counter !== 1) {
            setCounter(prev => prev - 1)
        } else setCounter(1)

    }

    const counterIncrement = () => {
        setCounter(prev => prev + 1)
    }
    return (
        <div className='wrapper-add'>
            <div className='counter'>
                <button onClick={counterDecrement}>-</button>
                {counter}
                <button onClick={counterIncrement}>+</button>
            </div>
        </div>
    )
}

export default Counter