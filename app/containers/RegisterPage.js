import React, { Component } from 'react'
import { connect } from 'react-redux'
import Register from '../components/register/Register'

class RegisterPage extends Component {
  render() {
    return <Register {...this.props} />
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(RegisterPage)
