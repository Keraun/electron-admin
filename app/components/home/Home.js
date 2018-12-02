import React from 'react'
import {
  Button,
  Container,
  Menu,
  Grid,
  MenuItem,
  Divider
} from 'semantic-ui-react'
import NavigationBar from './NavigationBar'

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
        <NavigationBar style={{ padding: 10 }} />
        <Grid columns={3}>
          <Menu secondary vertical>
            <MenuItem
              name="Home"
              active={activeItem === 'Home'}
              onClick={this.menuItemClick}
              icon="add"
            />
            <Menu.Item>
              <Button>Message</Button>
            </Menu.Item>
          </Menu>
          <Divider vertical />
        </Grid>
      </Container>
    )
  }
}

export default Home
