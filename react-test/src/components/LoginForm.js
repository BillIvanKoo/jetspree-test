import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import { login } from '../actions';

class LoginForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: ''
    }
  }

  handleUsername(username) {
    this.setState({
      username
    })
  }

  handlePassword(password) {
    this.setState({
      password
    })
  }

  handleClose() {
    this.props.handleClose()
    this.setState({
      username: '',
      password: ''
    })
  }

  login() {
    if (this.state.username.length > 0 && this.state.password.length > 0){
      this.props.login(this.state.username, this.state.password, this.props.users)
      this.handleClose()
    } else {
      window.alert('username and password are required')
    }
  }

  render() {
    return (
      <Dialog
        title="LOGIN"
        modal={false}
        open={this.props.open}
        onRequestClose={()=>{this.handleClose()}}
      >
        <TextField
          hintText="Enter username"
          floatingLabelText="Username"
          onChange={(e)=>{this.handleUsername(e.target.value)}}
        /><br/>
        <TextField
          hintText="Enter password"
          floatingLabelText="Password"
          type="password"
          onChange={(e)=>{this.handlePassword(e.target.value)}}
        /><br/>
        <RaisedButton
          label="Cancel"
          style={{
            margin: 12
          }}
          onTouchTap={()=>{this.handleClose()}}
        />
        <RaisedButton
          label="Login"
          primary={true}
          style={{
            margin: 12
          }}
          onTouchTap={()=>[this.login()]}
        />
      </Dialog>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  login: (username, password, users) => (
    dispatch(login(username, password, users))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);