import React, {useState} from 'react';

const Counter = () => {
    const [num, setNumber] = useState(0);

    const increase = () => {
        setNumber(num + 1);
    };

    const decrease = () => {
        setNumber(num -1);
    };

    const jegop = () => {
        setNumber(num * num);
    };

    const root = () => {
        setNumber(num / 2 );
    };

    return(
        <div>
            <button onClick={increase}>+1</button>
            <button onClick={decrease}>-1</button>
            <button onClick={jegop}>제곱</button>
            <button onClick={root}>/2</button>

            <p>{num}</p>
        </div>
    );
};

export default Counter;