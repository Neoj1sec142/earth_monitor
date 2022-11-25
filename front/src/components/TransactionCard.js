import React from 'react'

const TransactionCard = ({tra}) => {
    return(
        <a className='rml' href={`/transactions/id`}><div className='card m-3 shadow'>
            <h3 className='card-header'>{tra.location} <p className='text-muted left'>{tra.date_created.slice(0, 10)}</p></h3>
            <p className='text-center'>{tra.withdrawl ? "-" : "+"} {tra.amount}</p>
        </div></a>
    )
}
export default TransactionCard;