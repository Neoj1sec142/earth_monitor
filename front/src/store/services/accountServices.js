import Client from "./api";
// Transaction
// description, withdrawl, amount, location, date_created, date_modified            
// Account Services
export const GetAccounts = async () => {
    try{
        const res = await Client.get('accounts/')
        console.log(res, "ACC RES")
        return res
    }catch(err){console.log(err)}
}

export const GetAccountById = async (id) => {
    try{
        const res = await Client.get(`accounts/${id}/`)
        return res
    }catch(err){console.log(err)}
}

export const CreateAccount = async (acc) => {
    console.log(acc, "BEfore TRY")
    try {
        const data = {
            title: acc.title,
            description: acc.description,
            balance: acc.balance
        }
        console.log(data, "Before axios")
        const res = await Client.post(`accounts/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemoveAccount = async (id) => {
    try{
        const res = await Client.delete(`accounts/${id}/`)
        return res
    } catch (err) {console.log(err)}
}
export const UpdateAccount = async (id, accountDetails) => {
    try {
        const res = await Client.put(`accounts/${id}/`, accountDetails)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {console.log(err)}
}


// Account
// title, description, balance, date_created, date_modified            



