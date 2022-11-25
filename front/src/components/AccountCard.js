import React from 'react'

const AccountCard = ({acc}) => {
    return(
        <a className='rml' href={`/transactions/${acc.id}`}><div className='card m-3 shadow'>
            <h3 className='card-header'>{acc.title} <p className='text-muted left'>{acc.date_created.slice(0, 10)}</p></h3>
            <p className='text-center'>${acc.balance}</p>
        </div></a>
    )
}
export default AccountCard;