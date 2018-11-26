import { fromJS } from 'immtable'
import typeToReducer from 'type-to-reducer'

const USER_NAME_CHANGE = 'USER_NAME_CHANGE'
const PASSWORD_CHANGE = 'PASSWORD_CHANGE'

const initialState = {
  input: '',
  loading: false
}

const userNameChange = (input) => {
  type: USER_NAME_CHANGE,
  payload: input
}

export default typeToReducer(
  {
    [USER_NAME_CHANGE]: (state, action) => {
      console.log('state--->', state)
      console.log('action--->', action)
      return state.set('input', action.payload)
    }
  },
  initialState
)
