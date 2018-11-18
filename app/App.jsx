import React from 'react'
import 'semantic-ui-css/semantic.min.css'
import { Button, Icon } from 'semantic-ui-react'
export default class App extends React.PureComponent {
  constructor() {
    super()
    this.state = {
      primary: 'Click Here!!'
    }
  }

  clickAction = () => {
    let primary = this.state.primary === '立即购买' ? '购买成功' : '立即购买'
    this.setState({ primary })
  }

  render() {
    return (
      <div>
        <Button primary>{this.state.primary}</Button>
        <Button animated="vertical" onClick={this.clickAction}>
          <Button.Content hidden>Shop</Button.Content>
          <Button.Content visible>
            <Icon name="shop" />
          </Button.Content>
        </Button>
      </div>
    )
  }
}
