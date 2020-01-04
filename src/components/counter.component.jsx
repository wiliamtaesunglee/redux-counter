import React from 'react';

const Counter = ({counter, increment, decrement}) => (
      <div>
        <h1>{counter}</h1>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>

    );

export default Counter;
