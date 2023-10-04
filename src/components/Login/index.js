import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import Home from '../Home'
import Header from '../Header'

import './index.css'
import Differentcontext from '../../context'
import {
  Bigcontainer,
  LoginContainer,
  Toplogin,
  Bottomlogin,
  BringCenter,
  Image,
  Label1,
  Input1,
  Input2,
  Button,
  Para,
  Tick,
  Form,
} from './styledComponents'

class Login extends Component {
  state = {
    checked: false,
    username: '',
    password: '',
    showError: false,
    errorMsg1: '',
  }

  nameChange = event => {
    this.setState({username: event.target.value})
  }

  passwordChange = event => {
    this.setState({password: event.target.value})
  }

  submitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
      path: '/',
    })
    history.replace('/')
  }

  onsubmitFailure = errorMsg => {
    this.setState({showError: true, errorMsg1: errorMsg})
  }

  submitting = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok) {
      this.submitSuccess(data.jwt_token)
    } else {
      this.onsubmitFailure(data.error_msg)
    }
  }

  checking = event => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }))
  }

  passwordtoggle = () => {
    const {checked} = this.state
    if (checked) {
      return 'text'
    }
    return 'password'
  }

  render() {
    const {showError, errorMsg1, checked} = this.state
    const jwtToken = Cookies.get('jwt_token')
    console.log(checked)

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <Differentcontext.Consumer>
        {value => {
          const {backColor, saveddata} = value
          return (
            <Bigcontainer bgColor={backColor}>
              <LoginContainer color1={backColor}>
                <Toplogin>
                  <Image
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="website logo"
                  />
                </Toplogin>
                <Bottomlogin>
                  <BringCenter>
                    <Form onSubmit={this.submitting}>
                      <Label1 color1={backColor} htmlFor="username">
                        USERNAME
                      </Label1>
                      <br />
                      <Input1
                        onChange={this.nameChange}
                        id="username"
                        type="text"
                      />
                      <br />
                      <div className="inputtoppy">
                        <Label1 color1={backColor} htmlFor="password">
                          PASSWORD
                        </Label1>
                        <br />
                        <Input1
                          onChange={this.passwordChange}
                          id="password"
                          type={this.passwordtoggle()}
                        />
                      </div>
                      <Tick>
                        <Input2
                          onClick={this.checking}
                          id="check"
                          type="checkbox"
                        />
                        <Label1 htmlFor="check">Show Password</Label1>
                      </Tick>
                      {showError && <Para>*{errorMsg1}</Para>}
                      <Button type="submit">Login</Button>
                    </Form>
                  </BringCenter>
                </Bottomlogin>
              </LoginContainer>
            </Bigcontainer>
          )
        }}
      </Differentcontext.Consumer>
    )
  }
}

export default Login
