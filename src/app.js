import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters' ;
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill', amount: 12345678 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent bill', amount: 1234556 }));

console.log(store.getState());

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
)


ReactDOM.render(jsx, document.getElementById('app'))
