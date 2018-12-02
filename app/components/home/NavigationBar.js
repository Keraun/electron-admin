import React from 'react'
import {
  Container,
  Button,
  Image,
  Label,
  IconGroup,
  Divider
} from 'semantic-ui-react'

export default class NavigationBar extends React.PureComponent {
  render() {
    return (
      <Container fluid>
        <Image
          size="mini"
          src="https://react.semantic-ui.com/logo.png"
          verticalAlign="middle"
        />
        NavigationBar
        <Divider />
      </Container>
    )
  }
}
