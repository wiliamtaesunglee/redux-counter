import React from 'react';
import { connect } from 'react-redux';

import './App.css';

import Counter from './components/counter.component';
import { ADD_COUNTER, REMOVE_COUNTER, INCREMENT, DECREMENT } from './redux/reducers/counters/counters.component';

const App = ({counters, addCounter, removeCounter, increment, decrement}) => (
  <div>
    <button onClick={addCounter}>Add counters</button>
      <div>
        {counters.map((counter, key) => (
        <Counter {...{
            key,
            counter,
            removeCounter: removeCounter(key),
            increment: increment(key),
            decrement: decrement(key)
        }}/>
          ))
        }
      </div>
  </div>
);

const mapStateToProps = (state) => ({
  counters: state
})

const mapDispatchToProps = dispatch => ({
  addCounter: () => dispatch({ type: ADD_COUNTER }),
  removeCounter: (index) => () => dispatch({ type: REMOVE_COUNTER, index}),
  increment: (index) => () => dispatch({type: INCREMENT, index}),
  decrement: (index) => () => dispatch({type: DECREMENT, index})
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
