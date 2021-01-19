import React from 'react'
import NumberFormat from 'react-number-format'

function Addcredit(props) {
    console.log(props.data)
    const date = new Date()
    console.log(date)
    return (
        <div>
            <div className="row">
                <div className="col-sm">
                    {props.data.map(data =>
                        <div key={data.id}>
                            {data.date}
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

export default Addcredit