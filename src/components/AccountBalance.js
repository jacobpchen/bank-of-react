import React from 'react'


class AccountBalance extends React.Component {

    render() {

        /* {parseFloat(accountBal) + parseFloat(debitBal) - parseFloat(creditBal)} */
        return (
            < div className="py-3" >
                Current Account Balance: {this.props.accountBalance + this.props.debit - this.props.credit}
            </div>
        )
    }
}

export default AccountBalance