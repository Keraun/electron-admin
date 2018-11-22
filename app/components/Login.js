import React, { Component } from 'react'
import {
  Button,
  Segment,
  Grid,
  Header,
  Image,
  Form,
  Message
} from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import styles from './Login.scss'
import routes from '../constants/routes'

export default class Login extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Grid
          textAlign="center"
          style={{ height: '100%' }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 400 }}>
            <Header
              size="huge"
              color="teal"
              textAlign="center"
              className={styles.header}
            >
              <Image
                size="huge"
                src="https://react.semantic-ui.com/logo.png"
                verticalAlign="middle"
              />
              国网电力欢迎您
            </Header>
            <Form size="large">
              <Segment>
                <Form.Input
                  icon="user"
                  iconPosition="left"
                  placeholder="请输入姓名"
                />
                <Form.Input
                  icon="lock"
                  iconPosition="left"
                  placeholder="请输入密码"
                  type="password"
                />
              </Segment>

              <Button color="teal" fluid size="large" disabled>
                登录
              </Button>
            </Form>
            <Message>
              没有账号?
              <Link to={routes.HOME}>去注册</Link>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}
