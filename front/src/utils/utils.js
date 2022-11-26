

export const addAccountTotal = (account, newTransaction) => {
    // functional : accepts 2 objects : returns float
    let total = parseFloat(account.balance);
    const amt = parseFloat(newTransaction.amount)
    if(newTransaction.withdrawl){ total -= amt 
    }else{ total += amt }
    return total
}



export const addAllAccountsTotal = (accounts) => {
    // functional : accepts array : returns float
    let total = 0;
    for(let i=0; i<accounts.length; i++){
        total += parseFloat(accounts[i].balance)
    }
    return total
}



