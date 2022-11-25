import { useNavigate } from "react-router-dom"

export const NavigateTimer = (time, path) => {
    // Not functional need internet for research,
    // is supposed to basically be a 5 sec timer
    // for if how long to wait after a submission
    // to navigate from the page
    let session;
    const navigate = useNavigate()
    session = setInterval(() => {
        session = (prevTime) => prevTime + 10;
    }, 10);
    const seconds = Math.floor((session / 1000) % 60).slice(-2)
    if(seconds >= parseInt(time)){
        navigate(`/${path}`)
    }
}


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

