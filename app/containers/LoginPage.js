import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Login from '../components/Login'
import { userNameChange, passwordChange } from '../actions/login'

const mapStateToProps = state => {
  console.log('mapStateToProps --->', state)
  const { login } = state
  return {
    userName: login.get('userName'),
    loading: login.get('loading')
  }
}

const mapDispatchToProps = dispatch =>
  bindActionCreators({ userNameChange, passwordChange }, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login)
