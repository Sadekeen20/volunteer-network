import React, { createContext, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import Admin from './components/Admin/Admin';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <p style={{textAlign: 'center'}}>Hi , {loggedInUser.name} </p>
    <Router>
      <Header />
      <Switch>
        <Route path="/home">
          <Home />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/admin">
          <Admin></Admin>
        </Route>
        
        <PrivateRoute path="/register/:worktitle">
          <Register></Register>
        </PrivateRoute>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </UserContext.Provider>
  );
}

export default App;
