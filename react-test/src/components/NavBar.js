import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import { connect } from 'react-redux';

import { logout, fetchActiveUser } from '../actions';

class NavBar extends Component {
  componentDidMount(){
    this.props.fetchActiveUser()
  }

  handleActiveUser(){
    if(this.props.activeUser.username){
      return (
        <div>
          <RaisedButton label="LOGOUT" primary={true} onTouchTap={()=>{this.props.logout()}}/>
        </div>
      )
    }
    return (
      <div>
        <RaisedButton label="REGISTER" primary={true} onTouchTap={()=>{this.props.registerOpen()}}/>
        <RaisedButton label="LOGIN" primary={true} onTouchTap={()=>{this.props.loginOpen()}}/>
      </div>
    )
  }
  
  render() {
    return (
      <AppBar
        title={<span>Navigation Bar</span>}
        iconElementLeft={<div/>}
        iconElementRight={
          this.handleActiveUser()
        }
      />
    )
  }
}

const mapStateToProps = state => ({
  activeUser: state.activeUser
})

const mapDispatchToProps = dispatch => ({
  logout: () => (
    dispatch(logout())
  ),
  fetchActiveUser: () => (
    dispatch(fetchActiveUser())
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
