import React, { useState } from 'react'
import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { Dashboard, Login, Register } from './components/index'

function App () {

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const setAuth = (boolean) => {
    setIsAuthenticated(boolean)
  }

  return (
    <>
      <Router>
        <div className="container">
          <Routes>
              <Route
              exact
              path="/login"
              element={
                isAuthenticated ? (
                  <Dashboard setAuth={setAuth} />
                ) : (
                  <Login setAuth={setAuth} />
                )
              }
            />
            <Route
              exact
              path="/register"
              element={
                !isAuthenticated ? (
                  <Register setAuth={setAuth} />
                ) : (
                  <Dashboard setAuth={setAuth} />
                )
              }
            />
            <Route
              exact
              path="/dashboard"
              element={
                isAuthenticated ? (
                  <Dashboard setAuth={setAuth} />
                ) : (
                  <Login setAuth={setAuth} />
                )
              }
            />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;



            // <Route
            //   path="/login"
            //   render={(props) => 
            //     !isAuthenticated ? (
            //       <Login {...props} />
            //     ) : (
            //       <Navigate to="/dashboard" />
            //     )
            //   }
            // />

            // <Route
            //   path="/register"
            //   render={(props) =>
            //     !isAuthenticated ? (
            //       <Register {...props} />
            //     ) : (
            //       <Navigate to="/login" />
            //     )
            //   }
            // />

            // <Route
            //   path="/dashboard"
            //   render={(props) =>
            //     !isAuthenticated ? (
            //       <Dashboard {...props} />
            //     ) : (
            //       <Navigate to="/login" />
            //     )
            //   }
            // /> 
