import { combineReducers } from "redux";
import account from './account'
import transaction from './transaction'
import alert from './alert'

export default combineReducers({
    transaction,
    account,
    alert
})