import React from "react"
import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home'
import LogIn from './components/Login'
import Debit from './components/Debits'
import Credit from './components/Credit'
import UserProfile from './components/UserProfile'
class App extends React.Component {
  constructor() {
    super()
    this.state = {
      accountBalance: 2000.00,
      currentUser: {
        userName: 'bob_loblaw',
        memberSince: '08/23/99'
      },
      totalDebit: 0,
      totalCredit: 0,
      debitData: [],
      creditData: [],
    }
  }

  mockLogIn = (logInInfo) => {
    const newUser = { ...this.state.currentUser }
    newUser.userName = logInInfo.userName
    this.setState({ currentUser: newUser })
  }

  componentDidMount() {
    let debits = 0
    let credit = 0
    //fetching debit data
    axios.get("https://moj-api.herokuapp.com/debits")
      .then((response) => {
        this.setState({
          debitData: response.data
        })
        response.data.forEach((data) => {
          debits += data.amount
        })
        this.setState({
          totalDebit: debits
        })
      })
    //fetching credit data     
    axios.get("https://moj-api.herokuapp.com/credits")
      .then((response) => {
        this.setState({
          creditData: response.data
        })
        response.data.forEach((data) => {
          credit += data.amount
        })
        this.setState({
          totalCredit: credit
        })
      })
  }

  render() {

    const HomeComponent = () =>
    (<Home
      accountBalance={this.state.accountBalance}
      debit={this.state.totalDebit}
      credit={this.state.totalCredit}
    />)

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
      <Debit
        accountBalance={this.state.accountBalance}
        debit={this.state.totalDebit}
        debitData={this.state.debitData}
        credit={this.state.totalCredit}

      />
    )

    const creditComponent = () => (
      <Credit
        accountBalance={this.state.accountBalance}
        debit={this.state.totalDebit}
        credit={this.state.totalCredit}
      />
    )

    return (
      < Router >
        <Switch>
          <Route exact path='/' render={HomeComponent} />
          <Route path='/userProfile' render={UserProfileComponent} />
          <Route exact path='/login' render={LogInComponent} />
          <Route path='/debit' render={debitComponent} />
          <Route path='/credit' render={creditComponent} />
        </Switch>
      </Router >
    )
  }
}

export default App