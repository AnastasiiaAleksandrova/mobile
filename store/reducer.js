const data = require('../data.json')

const initialState = {
   data: data,
   seen: new Set()
};

const reducer = (state = initialState, action) => {
     switch (action.type) {
        case 'MARK_AS_SEEN':
            return {
                ...state,
                seen: state.seen.add(action.value)
            };  
       
        default:
            return {
                ...state
            }
    
     }
    }
    
    export default reducer;