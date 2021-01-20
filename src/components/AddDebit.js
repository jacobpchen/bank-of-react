import React from 'react'
import NumberFormat from 'react-number-format'
import Moment from 'react-moment';

function AddDebit(props) {
    const moment = require('moment')
    return (
        <div>
            <div className="row">
                <div className="col-sm">
                    {props.data.map(data =>
                        <div key={data.id}>
                            {data.date !== ''
                                ? <Moment format="MM/DD/YYYY">{data.date}</Moment>
                                : <Moment format="MM/DD/YYYY">{moment()}</Moment>}
                        </div>
                    )}
                </div>
                <div className="col-sm">
                    {props.data.map(data =>
                        <div key={data.id}>
                            {data.description}
                        </div>
                    )}
                </div>

                <div className="col-sm">
                    {props.data.map(data =>
                        <div key={data.id}>
                            <NumberFormat
                                value={data.amount}
                                displayType={'text'}
                                thousandSeperator={true}
                                prefix={'$'}
                            />

                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AddDebit