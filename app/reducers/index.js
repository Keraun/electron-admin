// @flow
import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import root from './root'

export default function createRootReducer(history: {}) {
  const routerReducer = connectRouter(history)(() => {})

  return connectRouter(history)(
    combineReducers({ router: routerReducer, root })
  )
}
