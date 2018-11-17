import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';
import 'normalize.css/normalize.css'
import './styles/style.scss'

class App extends React.Component {
  render() {
    return (
      <div>
        <p>new aplication</p>
      </div>
    )
  }
}

class AppNew extends React.Component {
  render() {
    return (
      <div>
        <p>new aplication</p>
      </div>
    )
  }
}

class Help extends React.Component {
  render() {
    return (
      <div>
        <p>Help</p>
      </div>
    )
  }
}

class Edit extends React.Component {
  render() {
    return (
      <div>
        <p>Edit</p>
      </div>
    )
  }
}

const EmptyPage = () => (
  <div>
    <p>This page doesn't exsist</p>
  </div>
)


const routes = (
  <BrowserRouter>
    <Switch>
      <Route
        path="/"
        component={App}
        exact
      />
      <Route
        path="/app"
        component={AppNew}
      />
      <Route
        path="/edit"
        component={Edit}
      />
      <Route
        path="/help"
        component={Help}
      />
      <Route
        component={EmptyPage}
      />
    </Switch>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'))
