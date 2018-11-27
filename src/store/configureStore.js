import { createStore, combineReducers } from 'redux';
import expansesReducer from '../reducers/expanses';
import filtersReducers from '../reducers/filters';


export default () => {
  const store = createStore(
    combineReducers({
      expanses: expansesReducer,
      filters: filtersReducers
    })
  )

  return store;
}
