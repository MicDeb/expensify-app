import { createStore } from 'redux';

// REDUCER
const counter = (state = 0, action) => {
  switch(action.type) {
    case 'INCREMENT':
      return state + 1;
    case 'DECREMENT':
      return state - 1;
    default:
      return state;
  }
}


const store = createStore(counter);

console.log(store.getState());
