import {
    GetAccounts, GetAccountById, 
    UpdateAccount, CreateAccount, RemoveAccount
} from '../services/accountServices'
import { setAlert } from './alert'
import {
    LOAD_ACCOUNTS_FAIL, LOAD_ACCOUNTS_SUCCESS, LOAD_ACCOUNT_BY_ID_FAIL,
    LOAD_ACCOUNT_BY_ID_SUCCESS, UPDATE_ACCOUNT_SUCCESS, UPDATE_ACCOUNT_FAIL,
    DESTROY_ACCOUNT_SUCCESS, DESTROY_ACCOUNT_FAIL,UPLOAD_ACCOUNT_SUCCESS,
    UPLOAD_ACCOUNT_FAIL
} from '../types'

export const load_accounts = () => async dispatch => {
    try{
        const res = await GetAccounts()
        if(res.status === 200){
            dispatch({
                type: LOAD_ACCOUNTS_SUCCESS,
                payload: res.data
            })

        }else{
            dispatch({
                type: LOAD_ACCOUNTS_FAIL
            })

        }
    }catch(err){
        dispatch({
            type: LOAD_ACCOUNTS_FAIL
        })
    }
}

export const load_account_by_id = (id) => async dispatch => {
    try{
        const res = await GetAccountById(id)
        if(res.status === 200){
            dispatch({
                type: LOAD_ACCOUNT_BY_ID_SUCCESS,
                payload: res.data
            })
        }else{
            dispatch({
                type: LOAD_ACCOUNT_BY_ID_FAIL
            })
        }
    }catch(err){
        dispatch({
            type: LOAD_ACCOUNT_BY_ID_FAIL
        })
    }
}

export const upload_account = (account) => async dispatch => {
    try{
        const res = await CreateAccount(account)
        if(res.status === 201 || res.statusText === "Created"){
            dispatch({
                type: UPLOAD_ACCOUNT_SUCCESS
            })
            dispatch(setAlert('Your account has been created succesfully','success'))
        }else{
            dispatch({
                type: UPLOAD_ACCOUNT_FAIL
            })
            dispatch(setAlert('There was and error creating your account','error'))
        }
    }catch(err){
        dispatch({
            type: UPLOAD_ACCOUNT_FAIL
        })
        dispatch(setAlert(err,'error'))
    }
}
export const update_account = (id, accountDetails) => async dispatch => {
    try{
        const res = await UpdateAccount(id, accountDetails)
        if(res.status === 204 || res.status === 201){
            dispatch({
                type: UPDATE_ACCOUNT_SUCCESS,
                payload: res.data
            })
            dispatch(setAlert('Your account has been updated succesfully','success'))
        }else{
            dispatch({
                UPDATE_ACCOUNT_FAIL
            })
            dispatch(setAlert('There was and error updating your account','error'))
        }
    }catch(err){
        dispatch({
            UPDATE_ACCOUNT_FAIL
        })
        dispatch(setAlert(err,'error'))
    }
}

export const delete_account = (id) => async dispatch => {
    try{
        const res = await RemoveAccount(id)
        if(res.status === 204 || res.statusText === 'OK'){
            dispatch({
                type: DESTROY_ACCOUNT_SUCCESS
            })
            dispatch(setAlert('Your account has been liquidated succesfully','success'))
        }else{
            dispatch({
                type: DESTROY_ACCOUNT_FAIL
            })
            dispatch(setAlert('There was and error liquidating your account','error'))
        }
    }catch(err){
        dispatch({
            type: DESTROY_ACCOUNT_FAIL
        })
        dispatch(setAlert(err,'error'))
    }
}