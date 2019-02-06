export default function transacoes (state = [],action){
    switch(action.type){
        case "SET_TRANS":
            return action.data
        case "CLEAR_TRANS":
            return []
        default:
            return state
    }
}