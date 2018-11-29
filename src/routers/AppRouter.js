import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import AddExpense from '../components/AddExpense';
import EditExpense from '../components/EditExpense';
import Help from '../components/Help';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          component={Dashboard}
          exact
        />
        <Route
          path="/create"
          component={AddExpense}
        />
        <Route
          path="/edit/:id"
          component={EditExpense}
        />
        <Route
          path="/help"
          component={Help}
        />
        <Route
          component={NotFoundPage}
        />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
