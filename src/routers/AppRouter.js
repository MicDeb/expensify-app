import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
} from 'react-router-dom';

import Dashboard from '../components/Dashboard';
import AddExpanse from '../components/AddExpanse';
import EditExpanse from '../components/EditExpanse';
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
          component={AddExpanse}
        />
        <Route
          path="/edit/:id"
          component={EditExpanse}
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
