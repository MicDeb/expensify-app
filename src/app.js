import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  NavLink,
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

class Create extends React.Component {
  render() {
    return (
      <div>
        <p>New expanse</p>
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
    <p>This page doesn't exsist. <Link to="/">Go home</Link></p>
  </div>
)

const Header = () => (
  <header>
    <h1>Expensify App</h1>
    <NavLink to="/" activeClassName="is-active" exact>Dashboard</NavLink>
    <NavLink to="/create" activeClassName="is-active">Create Expanse</NavLink>
    <NavLink to="/edit" activeClassName="is-active">Edit Expanse</NavLink>
    <NavLink to="/help" activeClassName="is-active">Help</NavLink>
  </header>
)


const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route
          path="/"
          component={App}
          exact
        />
        <Route
          path="/create"
          component={Create}
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
    </div>
  </BrowserRouter>
);


ReactDOM.render(routes, document.getElementById('app'))
