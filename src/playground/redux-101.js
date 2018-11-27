import { createStore } from 'redux';

// Tworzę akcję, czyli OBIEKT, który ma swój type, którą wysyłam za pomocą funkcji dispatch do stora
const incrementCount = ({incrementBy = 1} = {}) => ({
  type: 'INCREMENT',
  incrementBy
});


const decrementCount = ({decrementBy = 1} = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const resetCount = () => ({
  type: 'RESET'
})

const setCount = ({ count }) => ({
  type: 'SET',
  count
})

// REDUCERS

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      };
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      };
    case 'SET':
      return {
        count: action.count
      };
    case 'RESET':
      return {
        count: 0
      };
    default:
      return state;
  }
}

// To mój store, miejsce, które przetrzymuje i do którego wysyłam stan aplikacji
const store = createStore(countReducer)

// śledzi każdą zmianę stanu i wyświetla
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
})


// stworzylem akcje wyżej, ktora jest funkcją która zwarca obiekt, którą wysyłam za pomocą funkcji dispatch do stora

store.dispatch(incrementCount({ incrementBy: 5 }))

store.dispatch(resetCount())

store.dispatch(decrementCount())
store.dispatch(decrementCount({decrementBy: 10}))

store.dispatch(incrementCount())

store.dispatch(incrementCount())

store.dispatch(setCount({count: 101}))
