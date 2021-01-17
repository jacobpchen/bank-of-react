import React from 'react'
import axios from 'axios'
import AccountBalance from './AccountBalance'
import AddDebit from './AddDebit'

class Debit extends React.Component {
    constructor() {
        super()
        this.state = {
            url: 'https://moj-api.herokuapp.com/debits',
            data: [],
            debit: {
                debitDescription: 'static value',
                debitAmount: 'static value'
            }
        }
    }

    // need to change this to target debit then value
    handleChange = (e) => {
        const updatedDebit = { ...this.state.debit }
        const key = e.target.name
        const value = e.target.value
        updatedDebit[key] = value
        this.setState({
            debit: updatedDebit
        })
    }

    handleSubmit = (e) => {
        console.log('submit button pressed')
        e.preventDefault()
        console.log(this.state.debit)
        this.props.addDebit(this.state.debit)
    }

    componentDidMount() {
        axios.get(this.state.url).then(response => {
            const apiResponse = response.data
            console.log("This is response.data")
            console.log(response.data)
            this.setState({
                data: apiResponse
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
                            {this.state.data.map(data =>
                                <div key={data.id}>
                                    {data.date}
                                </div>
                            )}
                            <AddDebit

                            />
                        </div>
                        <div class="col-sm">

                            {this.state.data.map(data =>
                                <div key={data.id}>
                                    {data.description}
                                </div>
                            )}
                            <AddDebit
                                description={this.state.debit.debitDescription}
                            />
                        </div>

                        <div class="col-sm">
                            {this.state.data.map(data =>
                                <div key={data.id}>
                                    {data.amount}
                                </div>
                            )}
                            {/* <AddDebit
                                amount={this.state.debitAmount}
                            /> */}
                        </div>
                    </div>
                </div>

                <div className="container">
                    <AccountBalance
                        accountBalance={this.props.accountBalance}
                    />
                </div>

                <div className="container">
                    <form>
                        <div className="form-group">
                            <label for="debitDescription">Debit Description</label>
                            <input type="text" class="form-control"
                                name="debitDescription"
                                onChange={this.handleChange}
                                placeholder="Enter description of the debit" />
                        </div>

                        <div className="form-group">
                            <label for="debitAmount">Debit Amount</label>
                            <input type="text" class="form-control"
                                name="debitAmount"
                                onChange={this.handleChange}
                                placeholder="Enter amount of the debit" />
                        </div>

                        <button
                            type="submit"
                            class="btn btn-primary"
                            onClick={(this.handleSubmit)}>
                            Submit</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default Debit