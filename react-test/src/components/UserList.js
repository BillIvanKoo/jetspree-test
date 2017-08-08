import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
} from 'material-ui/Table';

import UserItem from './UserItem'
import { fetchUsers } from '../actions'

class UserList extends Component {
  constructor(props){
    super(props)
    this.state = {
      passwordShown: false
    }
  }

  componentDidMount(){
    this.props.fetchUsers()
  }

  render(){
    return (
      <Table>
        <TableHeader displaySelectAll={false} adjustForCheckbox={false}>
          <TableRow>
            <TableHeaderColumn>Username</TableHeaderColumn>
            <TableHeaderColumn>Password</TableHeaderColumn>
          </TableRow>
        </TableHeader>
        <TableBody displayRowCheckbox={false}>
        {this.props.users.map(user=>(
          <UserItem user={user} key={user.username}/>
        ))}
        </TableBody>
      </Table>
    )
  }
}

const mapStateToProps = state => ({
  users: state.users
})

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => (
    dispatch(fetchUsers())
  )
})

export default connect(mapStateToProps, mapDispatchToProps)(UserList);
