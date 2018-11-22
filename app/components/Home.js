// @flow
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Button } from 'semantic-ui-react'
import routes from '../constants/routes'
import styles from './Home.scss'

type Props = {}

export default class Home extends Component<Props> {
  props: Props

  changeView = () => {}

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <h2>Home</h2>
        <Button primary onClick={this.changeView}>
          Click
        </Button>
        <Button secondary>Secondary</Button>
        <Link to={routes.COUNTER}>to Counter</Link>
        <div className={styles.menu}>test</div>
      </div>
    )
  }
}
