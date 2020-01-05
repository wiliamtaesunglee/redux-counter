export const ADD_COUNTER = 'ADD_COUNTER';
export const REMOVE_COUNTER = 'REMOVE_COUNTER';
export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';

const INITIAL_STATE = []

const counters = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_COUNTER:
      return state.concat(0);
    case REMOVE_COUNTER:
      return state.filter((_, index) => index !== action.index);
    case INCREMENT:
      return state.map((elem, ind) => ind === action.index ? elem + 1 : elem)
    case DECREMENT:
      return state.map((elem, ind) => ind === action.index ? elem - 1 : elem)
    default:
      return state;
  }

}

export default counters;
