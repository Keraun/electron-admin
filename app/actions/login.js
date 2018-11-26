import { fromJS } from 'immutable'
import typeToReducer from 'type-to-reducer'

const USER_NAME_CHANGE = 'USER_NAME_CHANGE'
const PASSWORD_CHANGE = 'PASSWORD_CHANGE'

const initialState = fromJS({
  userName: '',
  loading: false
})

export const userNameChange = (userName) => ({
  type: USER_NAME_CHANGE,
  payload: userName
})

export default typeToReducer(
  {
    [USER_NAME_CHANGE]: (state, action) => {
      console.log('state--->', state)
      console.log('action--->', action)
      return state.set('userName', action.payload)
    }
  },
  initialState
)
