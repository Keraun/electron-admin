import React from 'react'
import {
  Container,
  Button,
  Grid,
  Image,
  Label,
  IconGroup,
  Divider
} from 'semantic-ui-react'

export default class NavigationBar extends React.PureComponent {
  render() {
    return (
      <div style={{ height: '100px' }}>
        <Grid verticalAlign="middle" centered>
          <Grid.Column floated="left">
            <Image
              size="big"
              src="https://react.semantic-ui.com/logo.png"
              verticalAlign="middle"
            />
          </Grid.Column>
          <Grid.Column floated="left">
            <span>sadfas</span>
          </Grid.Column>
        </Grid>
        <Divider />
      </div>
    )
  }
}
