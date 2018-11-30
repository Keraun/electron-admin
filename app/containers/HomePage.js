import React, { Component } from 'react'
// import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Home from '../components/home/Home'

class HomePage extends Component {
  static propTypes = {}

  render() {
    return <Home />
  }
}

const mapStateToProps = state => state

const mapDispatchToProps = {}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage)
