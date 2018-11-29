/* eslint-disable react/display-name */
import React from 'react'
import { Switch, Route } from 'react-router-dom'
import routes from './constants/routes'
import App from './containers/App'
import LoginPage from './containers/LoginPage'
import RegisterPage from './containers/RegisterPage'

export default () => (
  <App>
    <Switch>
      <Route path={routes.LOGIN} exact component={LoginPage} />
      <Route path={routes.REGISTER} exact component={RegisterPage} />
    </Switch>
  </App>
)
