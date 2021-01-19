import React from 'react'
import AccountBalance from './AccountBalance'
import { Link } from 'react-router-dom'
import Debit from './Debit'
class Home extends React.Component {
    render() {
        return (
            <div className="container">
                {console.log("Inside home component")}
                {console.log("Debit")}
                {console.log(this.props.debit)}
                {console.log("Credit")}
                {console.log(this.props.credit)}
                <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank" />
                <h1>Bank of React</h1>

                <Link to='/userProfile'>User Profile</Link>
                <AccountBalance
                    accountBalance={this.props.accountBalance}
                    debit={this.props.debit}
                    credit={this.props.credit}
                />

                <Link to='/debit'>Debit</Link>
                <Link to='/credit'>Credit</Link>
            </div>
        )
    }
}

export default Home