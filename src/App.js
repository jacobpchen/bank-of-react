import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/Login'
import Debit from './components/Debits'
import UserProfile from './components/UserProfile'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      accountBalance: 0.00,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      }
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
  }

  render() {

    const HomeComponent = () =>
      (<Home accountBalance={this.state.accountBalance} />)

    const UserProfileComponent = () => (
      <UserProfile
        userName={this.state.currentUser.userName}
        memberSince={this.state.currentUser.memberSince}
      />
    )

    const LogInComponent = () => (
      <LogIn
        user={this.state.currentUser}
        mockLogIn={this.mockLogIn}
        {...this.props} />
    )

    const debitComponent = () => (
      <Debit accountBalance={this.state.accountBalance} />
    )

    return (
      <Router>
        <Switch>
          <Route exact path='/' render={HomeComponent} />
          <Route path='/userProfile' render={UserProfileComponent} />
          <Route exact path='/login' render={LogInComponent} />
          <Route path='/debit' render={debitComponent} />
        </Switch>
      </Router>
    )
  }
}

export default App