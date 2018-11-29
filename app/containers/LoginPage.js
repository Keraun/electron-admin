import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../components/login/Login'
import { userNameChange, passwordChange, loginRequest } from '../actions/login'

const mapStateToProps = state => {
  const { login } = state
  return {
    userName: login.get('userName'),
    password: login.get('password'),
    token: login.get('token'),
    isLoading: login.get('isLoading')
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userNameChange, passwordChange, loginRequest }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
