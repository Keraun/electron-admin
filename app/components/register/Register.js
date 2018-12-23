import React from 'react'
import { Icon, Container, Grid, Segment } from 'semantic-ui-react'
import PropTypes from 'prop-types'

export default class Register extends React.PureComponent {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  backAction = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <Container textAlign="left" fluid>
        <Icon
          name="arrow left"
          size="large"
          color="teal"
          onClick={this.backAction}
        />
        <Grid textAlign="center" verticalAlign="middle">
          <Segment>sssss</Segment>
        </Grid>
      </Container>
    )
  }
}
