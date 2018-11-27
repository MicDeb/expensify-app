import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


// ACTIONS - CZYLI OBIEKTY

// ADD EXPANSE
const addExpanse = (
  {
    description = '',
    note = '',
    amount = 0,
    createdAt = 0
  } = {}
) => ({
  type: 'ADD_EXPANSE',
  expanse: {
    id: uuid(),
    description,
    note,
    amount,
    createdAt
  }
});

// REMOVE EXPANSE
const removeExpanse = ( { id } = {}) => ({
  type: 'REMOVE_EXPANSE',
  id
});


// EDIT EXPANSE
const editExpanse = (id, updates) => ({
  type: 'EDIT_EXPANSE',
  id,
  updates
});

// SET TEXT
const setTextFilter = (text = '') => ({
  type: 'SET_TEXT_FILTER',
  text
})

// SORT BY amount
const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT',
});

// SORT BY DATE
const sortByDate = () => ({
  type: 'SORT_BY_DATE'
})

// SET START DATE
const setStartDate = date => ({
  type: 'SET_START_DATE',
  date
})

// SET END DATE
const setEndDate = date => ({
  type: 'SET_END_DATE',
  date
})


const expansesReducerDefaultStore = [];

const expansesReducer = (state = expansesReducerDefaultStore, action) => {
  switch (action.type) {
    case 'ADD_EXPANSE':
      return [
        ...state,
        action.expanse
      ];
    case 'REMOVE_EXPANSE':
      return state.filter(({ id }) => id !== action.id );
    case 'EDIT_EXPANSE':
      return state.map((expanse) => {
        if (expanse.id === action.id) {
          return {
            ...expanse,
            ...action.updates
          }
        } else {
          return expanse;
        }
      });
    default:
      return state;
  }
}



const filtersReducersDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};

const filtersReducers = ( state = filtersReducersDefaultState, action ) => {
  // console.log('state', state, 'action', action);
  switch (action.type) {
    case 'SET_TEXT_FILTER':
    return {
      ...state,
      text: action.text
    }
    case 'SORT_BY_AMOUNT':
    return {
      ...state,
      sortBy: 'amount'
    }
    case 'SORT_BY_DATE':
    return {
      ...state,
      sortBy: 'date'
    }
    case 'SET_START_DATE':
    return {
      ...state,
      startDate: action.date
    }
    case 'SET_END_DATE':
    return {
      ...state,
      endDate: action.date
    }
    default:
      return state;
  }
}

// Get visible expanses

const getVisibleExpanses = (expanses, { text, sortBy, startDate, endDate }) => {
  return expanses.filter((expanse) => {
    const startDateMatch = typeof startDate !== 'number' || expanse.createdAt >= startDate;
    const endDateMatch = typeof endDate !== 'number' || expanse.endDate <= endDate;
    const textMatch = expanse.description.toLowerCase().includes(text.toLowerCase());

    return startDateMatch && endDateMatch && textMatch;
  }).sort((a, b) => {
    if(sortBy === 'date') {
      return a.createdAt < b.createdAt ? 1 : -1;
    }
    if(sortBy === 'amount') {
      return a.amount < b.amount ? 1 : -1;
    }
  })
}


// Store creation
const store = createStore(
  combineReducers({
    expanses: expansesReducer,
    filters: filtersReducers
  })
)

store.subscribe(() => {
  const state = store.getState();
  const visibleExpanses = getVisibleExpanses(state.expanses, state.filters);
  console.log(visibleExpanses);
})

const expanseOne = store.dispatch(addExpanse({ description: 'Rent', amount: 100, createdAt: -11000 }));
const expanseTwo = store.dispatch(addExpanse({ description: 'Coffee', amount: 300, createdAt: -1000 }));
//
// store.dispatch(removeExpanse({ id: expanseOne.expanse.id }));
//
// store.dispatch(editExpanse(expanseTwo.expanse.id, { amount: 500 }));
//
// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());
//
// store.dispatch(sortByAmount());
// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(999));

const demoState = {
  expanses: [{
    id: 'aaa',
    description: 'January rent',
    note: 'This was the final pament for that address',
    amount: 54500,
    createdAt: 0
  }],
  filters: {
    text: 'rent',
    sortBy:'amount',
    startDate: undefined,
    endDate: undefined
  }
};
