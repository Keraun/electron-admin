import { fromJS } from 'immutable'
import typeToReducer from 'type-to-reducer'
import { push } from 'connected-react-router'

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

// 用户名输入
export const userNameChange = (event, data) => ({
  type: USER_NAME_CHANGE,
  payload: data.value
})

// 密码输入
export const passwordChange = (event, data) => ({
  type: PASSWORD_CHANGE,
  payload: data.value
})

// 登录按钮loading状态
const submitLoading = isLoading => ({
  type: SUBMIT_LOADING,
  payload: isLoading
})

// 登录成功状态
const loginSuccess = token => ({
  type: LOGIN_SUCCESS,
  payload: token
})

// 登录请求
export const loginRequest = () => dispatch => {
  dispatch(submitLoading(true))
  setTimeout(() => {
    dispatch(loginSuccess('1239540xxxsfd'))
    dispatch(submitLoading(false))
    dispatch(push('/home'))
  }, 3000)
}

// reducer
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
