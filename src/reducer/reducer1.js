const stateInit = {
    num: 1
}
const nameSpace = 'reducer1/';
const reducer1 = (state = stateInit, action) => {
    console.log(action,state)
    switch (action.type) {
        case nameSpace+'add': return {
            ...state,
            num: state.num+1
        };
        default: return state
    }
}
export default reducer1
