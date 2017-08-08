import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import { addUser } from '../actions';

class RegistrationForm extends Component {
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

  register() {
    if(this.state.username.length > 0 && this.state.password.length > 0){
      this.props.addUser(this.props.users, {
        username: this.state.username,
        password: this.state.password
      })
      this.handleClose()
    } else if(this.props.users.find(user=>user.username === this.state.username)){
      window.alert('Username has been taken')
    } else {
      window.alert('username and password are required')
    }
  }

  render() {
    return (
      <Dialog
        title="REGISTRATION"
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
          label="Submit"
          primary={true}
          style={{
            margin: 12
          }}
          onTouchTap={()=>{this.register()}}
        />
      </Dialog>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  addUser: (users, user) => (
    dispatch(addUser(users, user))
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);