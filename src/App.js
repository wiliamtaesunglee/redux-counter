import React from 'react';
import { connect } from 'react-redux';
import './App.css';

import Counter from './components/counter.component';

const App = ({counter, increment, decrement}) => (
  <div>
    {[0,0,0].map((item, index) => (
    <Counter
        key={index}
        counter={counter}
        increment={increment}
        decrement={decrement}
      />
      ))
    }
  </div>
);

const mapStateToProps = (state) => ({
  counter: state
})

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({type: 'INCREMENT'}),
  decrement: () => dispatch({type: 'DECREMENT'})
})


export default connect(mapStateToProps, mapDispatchToProps)(App);
