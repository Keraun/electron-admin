// @flow
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import login from '../actions/login'

export default function createRootReducer(history: {}) {
  const routerReducer = connectRouter(history)(() => {})

  return connectRouter(history)(
    combineReducers({
      router: routerReducer,
      login
    })
  )
}
