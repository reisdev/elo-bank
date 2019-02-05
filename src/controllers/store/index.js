import { combineReducers } from "redux" 

import UserReducer from "./reducers/user"
import DbvReducer from "./reducers/desbravadores"

const reducers = {
    user: UserReducer,
    dbvs: DbvReducer
}

export default combineReducers(reducers)