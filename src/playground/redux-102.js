import { createStore } from 'redux';

// const add = ({ a, b }) => {
//   return a + b;
// }
//
// console.log(add({ a: 1, b: 12 }));

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
});

const setCount = ({ setUp }) => ({
  type: 'SET',
  setUp
})

const resetCount = () => ({
  type: 'RESET',
})


// REDUCERS
// 1 REDUCERS ARE PURE FUNCTIONS - CZYLI TAKIE KTÓRE NIE PRZYJMUJĄ NIC Z ZEWNĄTRZ
// 2 NEVER CHANGE STATE OR ACTION, BUT SET - NIE ZMIENIAJĄ A USTWIAJĄ

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
    const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
      return {
        count: state.count - decrementBy
      };
    case 'SET':
      return {
        count: action.setUp
      }
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
})

// Action - than an object that gets sent to the store

store.dispatch(incrementCount({ incrementBy: 5 }));
store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());
store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ setUp: 111 }));
