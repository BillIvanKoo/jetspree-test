import * as actionType from './constants';

export const fetchUsers = () => {
  let users = JSON.parse(localStorage.getItem('users'))
  if(users.length > 0){
    return {
      type: actionType.FETCH_USERS_SUCCESS,
      users
    }
  }
}

export const fetchActiveUser = () => {
  let active_user = JSON.parse(localStorage.getItem('active_user'))
  if(active_user !== undefined){
    return {
      type: actionType.LOGIN_SUCCESS,
      user: active_user
    }
  }
}

export const addUser = (users, user) => {
  let new_users = [...users, user]
  localStorage.setItem('users', JSON.stringify(new_users))
  return {
    type: actionType.ADD_USER_SUCCESS,
    user
  }
}

export const login = (username, password, users) => {
  console.log(users);
  let user = users.find(user => (user.username === username))
  console.log(users.find(user => (user.username === username)));
  if(user){
    if(user.password === password){
      localStorage.setItem('active_user', JSON.stringify(user))
      return {
        type: actionType.LOGIN_SUCCESS,
        user
      }
    } else {
      window.alert('Username or password is wrong!')
    }
  } else {
    window.alert('Username or password is wrong!')
  }
  return {
    type: actionType.LOGIN_FAIL
  }
}

export const logout = () => {
  localStorage.removeItem('active_user')
  return {
    type: actionType.LOGOUT
  }
}