const initialState = {
 
    all: []
}

export default function cardReducer(state = initialState, action) {
  
    switch(action.type) {
        case 'CREATE_CARD':
            return {...state, all: [...state.all, action.payload]}

        case 'FETCH_CARDS':
    

        return {...state, all: action.payload}
            
     
        default: return state
    }
}