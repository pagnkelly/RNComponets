
const initialState = {
    times: 1,
    search: ''
}
function reducer(state = initialState, action) {
    switch (action.type) {
        case 'addTimes':
            return {...state, times: state.times + 1};
       case 'setInput':     
            return {...state, search: action.payload};
        default:
            return state;
    }
}

export default reducer;