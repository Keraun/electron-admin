import { fromJS } from 'immutable'
import typeToReducer from 'type-to-reducer'

const USER_NAME_CHANGE = 'USER_NAME_CHANGE'
const PASSWORD_CHANGE = 'PASSWORD_CHANGE'
const SUBMIT_LOADING = 'SUBMIT_LOADING'

const initialState = fromJS({
  userName: '',
  password: '',
  loading: false
})

export const userNameChange = (event, data) => ({
  type: USER_NAME_CHANGE,
  payload: data.value
})

export const passwordChange = (event, data) => ({
  type: PASSWORD_CHANGE,
  payload: data.value
})

export const submitLoading = () => ({
  type: SUBMIT_LOADING,
  payload: true
})

export default typeToReducer(
  {
    [USER_NAME_CHANGE]: (state, action) =>
      state.set('userName', action.payload),
    [PASSWORD_CHANGE]: (state, action) => state.set('password', action.payload)
  },
  initialState
)
