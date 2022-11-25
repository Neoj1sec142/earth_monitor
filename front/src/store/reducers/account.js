/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_ACCOUNTS_FAIL, LOAD_ACCOUNTS_SUCCESS,
    LOAD_ACCOUNT_BY_ID_FAIL, LOAD_ACCOUNT_BY_ID_SUCCESS
} from '../types'

const initialState = {
    accounts: [],
    accountDetails: {}
}
export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
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
        case LOAD_ACCOUNT_BY_ID_FAIL:
        case LOAD_ACCOUNTS_FAIL:
            return {...state}
        default:
            return state
    }
}