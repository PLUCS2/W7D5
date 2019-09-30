import { RECEIVE_CURRENT_USER, RECEIVE_ERRORS } from '../actions/session_action'; 

const _nullState = {
    session: []
}

export default (state = _nullState, action) => {
    Object.freeze(state); 
    switch(action.type) {
        case RECEIVE_CURRENT_USER: {
            return _nullState
        }
        case RECEIVE_ERRORS: {
            return Object.assign({}, {session: action.errors})
        }
        default: 
            return state; 
    }
}