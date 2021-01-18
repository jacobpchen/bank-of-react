import React from 'react'

function AddDebit(props) {
    console.log(props.data)
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
                            {data.amount}
                        </div>
                    )}

                </div>
            </div>
        </div>
    )
}

export default AddDebit