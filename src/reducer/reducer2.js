const stateInit = {
    msg: '好说的厚爱后'
}
const reducer2 = (state = stateInit, action) => {
    switch (action.type) {
        case 'sa':
            return {
                ...state
            };
        default: return { ...state }
    }
}
export default reducer2
