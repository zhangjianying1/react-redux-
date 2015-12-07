import {combineReducers} from 'redux';

let setCoupon = (state={}, action) => {
    switch(action.type) {
        case 'CHANGE':
            return action.val
            break;
        default:
            return state;
    }
};
let showLoading = (state='', action) => {
    switch (action.type) {
        case 'LOAD':
            return action.val;
            break;
        default:
            return state;
    }
}
let showConfirm = (state={}, action) => {
    switch (action.type) {
        case 'CONFIRM':
            return action.val;
        break;
        default:
            return state;
    }
}
let combineReducer = combineReducers({
    showConfirm,
    setCoupon,
    showLoading
})

export default combineReducer;