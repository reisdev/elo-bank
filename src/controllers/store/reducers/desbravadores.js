export default function desbravadores (state = [],action){
    switch(action.type){
        case "SET_LIST":
            return action.data
        case "CLEAR_LIST":
            return []
        default:
            return state
    }
}