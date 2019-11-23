
import React from 'react'
import { Router, Route, Switch } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'

import Home from '../components/Home/Home'
import Connexion from '../components/Connexion/Connexion'
import Welcome from '../components/Connexion/Welcome'
import UserProfil from '../components/UserProfil/UserProfil'

export const history = createHistory()

const AppRouter = () => (
  <Router history={history}>
    <Switch>
      <Route exact path='/login' component={Connexion} />
      <Route exact path='/' component={Home} />
      <Route exact path='/welcome' component={Welcome} />
      <Route exact path='/user/:userName' component={UserProfil} />
      {/* <Route component={NotFound} /> */}
    </Switch>
  </Router>
)


export default AppRouter