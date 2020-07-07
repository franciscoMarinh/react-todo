import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './commons/PrivateRouter'
import SignIn from './pages/Signin'
import SignUp from './pages/Signup'
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SignIn} />
        <Route exact path='/signup' component={SignUp} />
        <PrivateRoute
          exact
          path='/page'
          component={() => <div>hello world</div>}
        />
      </Switch>
    </Router>
  )
}
