import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './commons/PrivateRouter'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
import HomePage from './pages/HomePage'
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute exact path='/home' component={HomePage} />
      </Switch>
    </Router>
  )
}
