/* eslint-disable import/no-anonymous-default-export */
import {
    LOAD_TRANSACTIONS_FAIL, LOAD_TRANSACTIONS_SUCCESS,
    LOAD_TRANSACTION_BY_ID_FAIL, LOAD_TRANSACTION_BY_ID_SUCCESS
} from '../types'

const initialState = {
    transactions: [],
    transactionDetails: {}
}
export default function(state= initialState, action){
    const { type, payload } = action
    switch(type){
        case LOAD_TRANSACTION_BY_ID_SUCCESS: 
            return{
                ...state,
                transactionDetails: payload
            }
        case LOAD_TRANSACTIONS_SUCCESS:
            return{
                ...state,
                transactions: payload
            }
        case LOAD_TRANSACTION_BY_ID_FAIL:
        case LOAD_TRANSACTIONS_FAIL:
            return {...state}
        default:
            return state
    }
}