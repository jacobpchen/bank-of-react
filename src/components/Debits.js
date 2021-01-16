import React from 'react'
import axios from 'axios'
import AccountBalance from './AccountBalance'

class Debit extends React.Component {
    constructor() {
        super()
        this.state = {
            url: 'https://moj-api.herokuapp.com/debits',
            debits: []
        }
    }


    componentDidMount() {
        axios.get(this.state.url).then(response => {
            const apiResponse = response.data
            console.log("This is response.data")
            console.log(response.data)
            this.setState({
                debits: apiResponse
            })
        }).catch(err => console.log(err))
    }

    render() {
        return (
            <div className="container">
                <h1>Debits</h1>

                {/* Print headers for the columns */}
                <div className="container">
                    <div class="row">
                        <div class="col-sm font-weight-bold">Date</div>
                        <div class="col-sm font-weight-bold">Description</div>
                        <div class="col-sm font-weight-bold">Amount</div>
                    </div>
                </div>

                {/* Print the date, description and amount */}
                <div className="container">
                    <div class="row">
                        <div class="col-sm">
                            {this.state.debits.map(data =>
                                <div key={data.id}>
                                    {data.date}
                                </div>
                            )}
                        </div>
                        <div class="col-sm">
                            {this.state.debits.map(data =>
                                <div key={data.id}>
                                    {data.description}
                                </div>
                            )}
                        </div>
                        <div class="col-sm">
                            {this.state.debits.map(data =>
                                <div key={data.id}>
                                    {data.amount}
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <AccountBalance
                        accountBalance={this.props.accountBalance}
                    />
                </div>


            </div>
        )
    }
}

export default Debit