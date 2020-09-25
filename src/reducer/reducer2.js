const stateInit = {
    num: 1
}
const nameSpace = 'reducer2/';
const reducer2 = (state = stateInit, action) => {
    console.log(action,state,12313);
    switch (action.type) {
        case nameSpace+'add':return {
            ...state,
            num: state.num+1
        };
        default: return { ...state }
    }
}
export default reducer2
