import { combineReducers } from "redux" 

import UserReducer from "./reducers/user"
import DbvReducer from "./reducers/desbravadores"
import TransReducers from "./reducers/transacoes"

const reducers = {
    user: UserReducer,
    dbvs: DbvReducer,
    trans: TransReducers
}

export default combineReducers(reducers)