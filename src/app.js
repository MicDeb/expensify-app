import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpanse } from './actions/expanses';
import { setTextFilter } from './actions/filters' ;
import getVisibleExpanses from './selectors/expanses';
import 'normalize.css/normalize.css';
import './styles/style.scss';


const store = configureStore();

store.dispatch(addExpanse({description: 'Water bill'}));
store.dispatch(addExpanse({description: 'Gas bill'}));
store.dispatch(setTextFilter('bill'));

console.log(store.getState());


ReactDOM.render(<AppRouter />, document.getElementById('app'))
