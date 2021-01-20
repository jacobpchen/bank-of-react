import React from 'react'
import AccountBalance from './AccountBalance'
import { Link } from 'react-router-dom'
class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <h1>Bank of React</h1>

                <button type="button" className="btn btn-light mr-5"><Link to='/userProfile'>User Profile</Link></button>

                <AccountBalance
                    accountBalance={this.props.accountBalance}
                    debit={this.props.debit}
                    credit={this.props.credit}
                />
                <div className="button-div">
                    <button type="button" className="btn btn-light mr-5"><Link to='/debit'>Debit</Link></button>
                    <button type="button" className="btn btn-light"><Link to='/credit'>Credit</Link></button>
                </div>
            </div>
        )
    }
}

export default Home