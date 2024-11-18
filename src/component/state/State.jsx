import React, { useState } from 'react';
import './State.css'

const UseState = () => {
    const [count, setCount] = useState(0);
    
    const increase = () => {
        setCount(count + 2);
    };
    
    const decrement = () => {
        setCount(count - 2);
    };
    
    const reset = () => {
        setCount(0);
    };

    return (
        <div className='flex'>
            <h1>Counter: {count}</h1>
            <button className='btn' onClick={increase}>Increase</button>
            <button className='btn' onClick={decrement}>Decrease</button>
            <button className='btn' onClick={reset}>Reset</button>
        </div>
    );
};

export default UseState;
