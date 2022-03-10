import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import { Dashboard, Login, Register } from './components/index'

const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <>
      <Router>
        <div className="container">
          <Switch>
            <Route
              exact
              path="login"
              render={(props) =>
                !isAuthenticated ? (
                  <Login {...props} />
                ) : (
                  <Redirect to="/dashboard" />
                )
              }
            />

            <Route
              exact
              path="register"
              render={(props) =>
                !isAuthenticated ? (
                  <Register {...props} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />

            <Route
              exact
              path="dashboard"
              render={(props) => !isAuthenticated ? <Dashboard {...props} /> : <Redirect to="/login" /> }
            />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
