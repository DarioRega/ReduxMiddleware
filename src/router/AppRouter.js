
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      {/* <Route exact path='/login' component={Connexion} /> */}
      <Route exact path='/' component={Home} />
      {/* <Route exact path='/user/:userName' component={UserProfil} /> */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
)


export default AppRouter