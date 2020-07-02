import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import PrivateRoute from './commons/PrivateRouter'
import SigIn from './pages/Sigin'
export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={SigIn} />
        {/* <PrivateRoute exact path='/page' component={}/> */}
      </Switch>
    </Router>
  )
}
