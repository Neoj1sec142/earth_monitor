/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_ACCOUNTS_FAIL, LOAD_ACCOUNTS_SUCCESS, LOAD_ACCOUNT_BY_ID_FAIL,
    LOAD_ACCOUNT_BY_ID_SUCCESS, UPDATE_ACCOUNT_SUCCESS, UPDATE_ACCOUNT_FAIL,
    DESTROY_ACCOUNT_SUCCESS, DESTROY_ACCOUNT_FAIL,UPLOAD_ACCOUNT_SUCCESS,
    UPLOAD_ACCOUNT_FAIL
} from '../types'

const initialState = {
    accounts: [],
    accountDetails: {}
}
export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case UPDATE_ACCOUNT_SUCCESS:
        case LOAD_ACCOUNT_BY_ID_SUCCESS: 
            return{
                ...state,
                accountDetails: payload
            }
        case LOAD_ACCOUNTS_SUCCESS:
            return{
                ...state,
                accounts: payload
            }
        case UPLOAD_ACCOUNT_SUCCESS:
        case UPLOAD_ACCOUNT_FAIL:
        case UPDATE_ACCOUNT_FAIL:
        case DESTROY_ACCOUNT_SUCCESS:
        case DESTROY_ACCOUNT_FAIL:
        case LOAD_ACCOUNT_BY_ID_FAIL:
        case LOAD_ACCOUNTS_FAIL:
            return {...state}
        default:
            return state
    }
}