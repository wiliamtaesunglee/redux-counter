const counters = (state, action) => {
  switch(action.type) {
    case 'ADD_COUNTER':
      return state.concat(0);
    case 'REMOVE_COUNTER':
      return state.filter((_, index) => index !== action.index);
    case 'INCREMENT':
      return state.map((elem, ind) => ind === action.index ? elem + 1 : elem)
    case 'DECREMENT':
      return state.map((elem, ind) => ind === action.index ? elem - 1 : elem)
  }
}

export default counters;
