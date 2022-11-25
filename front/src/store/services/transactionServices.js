import Client from "./api";

// Transaction Services
// description, withdrawl, amount, location, date_created, date_modified            
export const GetTransactions = async () => {
    try{
        const res = await Client.get('transactions/')
        console.log(res, "ACC RES")
        return res
    }catch(err){console.log(err)}
}

export const GetTransactionById = async (id) => {
    try{
        const res = await Client.get(`transactions/${id}/`)
        return res
    }catch(err){console.log(err)}
}

export const CreateTransaction = async (tra) => {
    console.log(tra, "BEfore TRY")
    try {
        const data = {
            location: tra.location,
            withdrawl: tra.withdrawl,
            amount: tra.amount
        }
        console.log(data, "Before axios")
        const res = await Client.post(`transactions/`, data)
        return res
    } catch (err) {console.log(err)}
}
    
export const RemoveTransaction = async (id) => {
    try{
        const res = await Client.delete(`transactions/${id}/`)
        return res
    } catch (err) {console.log(err)}
}
export const UpdateTransaction = async (id, transactionDetails) => {
    try {
        const res = await Client.put(`transactions/${id}/`, transactionDetails)
        console.log(res, "UPDATE RES")
        return res
      } catch (err) {console.log(err)}
}