/* eslint-disable react/display-name */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './constants/routes'
import App from './containers/App'
import HomePage from './containers/HomePage'
import CounterPage from './containers/CounterPage'
import LoginPage from './containers/LoginPage'

export default () => (
  <App>
    <Switch>
      <Route path={routes.LOGIN} exact component={LoginPage} />
      <Route path={routes.HOME} exact component={HomePage} />
      <Route path={routes.COUNTER} exact component={CounterPage} />
    </Switch>
  </App>
)
