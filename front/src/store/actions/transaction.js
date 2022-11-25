import {
    GetTransactions, GetTransactionById, 
    UpdateTransaction, RemoveTransaction, CreateTransaction
} from '../services/transactionServices'

import {
    LOAD_TRANSACTIONS_FAIL,
    LOAD_TRANSACTIONS_SUCCESS,
    LOAD_TRANSACTION_BY_ID_FAIL,
    LOAD_TRANSACTION_BY_ID_SUCCESS,
    UPDATE_TRANSACTION_SUCCESS,
    DESTROY_TRANSACTION_FAIL,
    UPLOAD_TRANSACTION_SUCCESS,
    UPDATE_TRANSACTION_FAIL,
    DESTROY_TRANSACTION_SUCCESS,
    UPLOAD_TRANSACTION_FAIL
} from '../types'

export const load_transactions = () => async dispatch => {
    try{
        const res = await GetTransactions()
        if(res.status === 200){
            dispatch({
                type: LOAD_TRANSACTIONS_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_TRANSACTIONS_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_TRANSACTIONS_FAIL
        })
    }
}

export const load_transaction_by_id = (id) => async dispatch => {
   try{
        const res = await GetTransactionById(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_TRANSACTION_BY_ID_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_TRANSACTION_BY_ID_FAIL
            })
        }
   }catch(err){
        dispatch({
            type: LOAD_TRANSACTION_BY_ID_FAIL
        })
    }
}

export const upload_transaction = (transaction) => async dispatch => {
    try{
        const res = await CreateTransaction(transaction)
        if(res.status === 201 || res.statusText === "Created"){
            dispatch({
                type: UPLOAD_TRANSACTION_SUCCESS  
            })
        }else{
            dispatch({
                type: UPLOAD_TRANSACTION_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: UPLOAD_TRANSACTION_FAIL
        })
    }
    
}
export const update_transaction = (id, transactionDetails) => async dispatch => {
    try{
        const res = await UpdateTransaction(id, transactionDetails)
        if(res.status === 201 || res.status || 200){
            dispatch({
                type: UPDATE_TRANSACTION_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: UPDATE_TRANSACTION_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: UPDATE_TRANSACTION_FAIL
        })
    }
}

export const delete_transaction = (id) => async dispatch => {
    try{
        const res = await RemoveTransaction(id)
        if(res.statusText === 'OK' || res.statusText === 'Deleted'){
            dispatch({
                type: DESTROY_TRANSACTION_SUCCESS
            })
        }else{
            dispatch({
                type: DESTROY_TRANSACTION_FAIL
            })
        }

    }catch(err){
        dispatch({
            type: DESTROY_TRANSACTION_FAIL
        })
    }
}