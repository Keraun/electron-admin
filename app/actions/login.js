import { fromJS } from 'immutable'
import typeToReducer from 'type-to-reducer'

const USER_NAME_CHANGE = 'USER_NAME_CHANGE'
const PASSWORD_CHANGE = 'PASSWORD_CHANGE'
const SUBMIT_LOADING = 'SUBMIT_LOADING'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'

const initialState = fromJS({
  userName: '',
  password: '',
  isLoading: false,
  token: ''
})

export const userNameChange = (event, data) => ({
  type: USER_NAME_CHANGE,
  payload: data.value
})

export const passwordChange = (event, data) => ({
  type: PASSWORD_CHANGE,
  payload: data.value
})

const submitLoading = isLoading => ({
  type: SUBMIT_LOADING,
  payload: isLoading
})

const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token
})

export const loginRequest = () => dispatch => {
  dispatch(submitLoading(true))
  setTimeout(() => {
    dispatch(loginSuccess('1239540xxxsfd'))
    dispatch(submitLoading(false))
  }, 3000)
}

export default typeToReducer(
  {
    [USER_NAME_CHANGE]: (state, action) =>
      state.set('userName', action.payload),
    [PASSWORD_CHANGE]: (state, action) => state.set('password', action.payload),
    [SUBMIT_LOADING]: (state, action) => state.set('isLoading', action.payload),
    [LOGIN_SUCCESS]: (state, action) => state.set('token', action.payload)
  },
  initialState
)
