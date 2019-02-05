export default function user(state = null, action) {
    switch(action.type){
        case "LOGIN":
            return action.data
        case "LOGOFF":
            return null
        default: 
            return state
    }
}