import React from 'react'
import {
  Button,
  Container,
  Menu,
  Grid,
  MenuItem,
  Divider,
  Segment
} from 'semantic-ui-react'
import NavigationBar from './NavigationBar'
import './Home.scss'

class Home extends React.PureComponent {
  state = {
    activeItem: ''
  }

  menuItemClick = item => {
    this.setState({ activeItem: item })
  }

  render() {
    const { activeItem } = this.state
    return (
      <Container fluid>
        <NavigationBar />
        <Grid
          columns={3}
          style={{ height: '100%' }}
          verticalAlign="middle"
          centered
        >
          <Segment>test</Segment>
        </Grid>
      </Container>
    )
  }
}

export default Home
