import React from "react"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import UserProfile from './components/UserProfile'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      accountBalance: 14568.27,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      }
    }
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

    return (
      <Router>
        <Switch>
          <Route exact path='/' render={HomeComponent} />
          <Route path='/userProfile' render={UserProfileComponent} />
        </Switch>
      </Router>
    )
  }
}

export default App