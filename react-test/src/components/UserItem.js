import React, { Component } from 'react';
import {
  TableRow,
  TableRowColumn
} from 'material-ui/Table';

class UserItem extends Component{
  constructor(props){
    super(props);
    this.state= {
      passwordShown: false
    }
  }

  handlePassword(password){
    if(this.state.passwordShown){
      return password
    } else {
      let censor = password.replace(/[^]/g, '#')
      return censor
    }
  }

  render() {
    return (
      <TableRow>
        <TableRowColumn>{this.props.user.username}</TableRowColumn>
        <TableRowColumn onDoubleClick={()=>{this.setState({
          passwordShown: !this.state.passwordShown
        })}}>{this.handlePassword(this.props.user.password)}</TableRowColumn>
      </TableRow>
    )
  }
}

export default UserItem;