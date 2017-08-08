import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Provider } from 'react-redux';

import store from './store'
import NavBar from './components/NavBar';
import LoginForm from './components/LoginForm';
import RegistrationForm from './components/RegistrationForm';
import UserList from './components/UserList';

injectTapEventPlugin();

class App extends Component {
  constructor(){
    super()
    this.state = {
      registerOpen: false,
      loginOpen: false,
    }
  }

  registerOpen(){
    this.setState({
      registerOpen: true
    })
  }

  registerClose(){
    this.setState({
      registerOpen: false
    })
  }

  loginOpen(){
    this.setState({
      loginOpen: true
    })
  }

  loginClose(){
    this.setState({
      loginOpen: false
    })
  }

  render() {
    return (
      <Provider store={store}>
        <MuiThemeProvider>
          <div>
          <NavBar
            loginOpen={()=>{this.loginOpen()}}
            registerOpen={()=>{this.registerOpen()}}
          />
          <RegistrationForm
            open={this.state.registerOpen}
            handleClose={()=>{this.registerClose()}}
          />
          <LoginForm
            open={this.state.loginOpen}
            handleClose={()=>{this.loginClose()}}
          />
          <UserList />
          </div>
        </MuiThemeProvider>
      </Provider>
    );
  }
}

export default App;
