import React from 'react'
import NumberFormat from 'react-number-format'

class AccountBalance extends React.Component {

    render() {
        return (
            < div className="py-3" >
                Current Account Balance:
                {<NumberFormat
                    value={this.props.accountBalance + this.props.debit - this.props.credit}
                    displayType={'text'}
                    thousandSeperator={true}
                    prefix={'$'}
                    decimalScale={2}
                />}
            </div>
        )
    }
}

export default AccountBalance