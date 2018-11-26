import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../components/Login'
import { userNameChange } from '../actions/login'

const mapStateToProps = state => {
  const login = state.get('login')
  return {
    userName: login.get('userName'),
    loading: login.get('loading')
    
  }
}

const mapDispatchToProps = dispatch => {
  bindActionCreators(userNameChange, dispatch)
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
