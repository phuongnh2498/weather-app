import { combineReducers } from "redux"
import noteReducer from "./noteReducer"

const RootReducer = combineReducers({
    note:noteReducer
})

export default RootReducer