import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux'
import { load_accounts } from '../store/actions/account'
import { load_transactions } from '../store/actions/transaction'
import TransactionCard from '../components/TransactionCard'
import AccountCard from '../components/AccountCard'
import { addAccountTotal, addAllAccountsTotal } from '../utils/utils'

const Dashboard = ({
  load_accounts, load_transactions, 
  accounts, transactions
}) => {
  const [cash, setCash] = useState(0.0)
  useEffect(() => { load_accounts() },[])
  useEffect(() => { load_transactions() },[])
  useEffect(() => {
    if(accounts.length){
      const res = addAllAccountsTotal(accounts)
      setCash(res)
    }
  },[accounts, transactions])

  if(accounts && transactions){
    return (
      <div className='container-fluid text-center'>
        <div className='card m-3 p-2'>
          <h1>Dashboard</h1>
        <div className='row m-3 p-2'>
          <h5 className='card-footer'>Accumilated Wealth: ${cash === 0.0 ? 0.00 : cash}</h5>
        </div>
        </div>
          <hr className='divider sq'/>
        <div className='card m-3'>
        <div className='row'>
          <div className='col'>
            <h6>Transactions</h6>
            <section className='section card-m-2 bg-light'>
              {transactions.map((tra) => (
              <div className='row' key={tra.id}>
                <TransactionCard tra={tra}/>
              </div>))}
            </section>
          </div>
          <div className='col'>
            <h6>Accounts</h6>
            <section className='section card-m-2 bg-light'>
              {accounts.map((acc) => (
              <div className='row' key={acc.id}>
                <AccountCard acc={acc}/>
              </div>))}
            </section>
          </div>
        </div>
        
        </div>
      </div>
    )
  }else{ return(<div>Loading</div>) }
}

const mapStateToProps = state => ({
  accounts: state.account.accounts,
  transactions: state.transaction.transactions
})

export default connect(mapStateToProps, {load_accounts, load_transactions})(Dashboard)