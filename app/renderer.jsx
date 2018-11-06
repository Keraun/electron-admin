
import React from "react";
import ReactDOM from "react-dom";
import "semantic-ui-css/semantic.min.css"
import { Button, Icon } from "semantic-ui-react";

ReactDOM.render((
  <div>
    {/* asdfasdf */}
    <Button>Click Here</Button>
    <Button animated='vertical'>
      <Button.Content hidden>Shop</Button.Content>
      <Button.Content visible>
        <Icon name='shop' />
      </Button.Content>
    </Button>
  </div>
), document.querySelector("app"));
