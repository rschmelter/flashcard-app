const initialState = {
 
    all: []
}

export default function cardReducer(state = initialState, action) {
  
    switch(action.type) {
        case 'CREATE_CARD':
            return {...state, all: [...state.all, action.payload]}

        case 'FETCH_CARDS':    

            return {...state, all: action.payload} 

        case 'SORT_CARDS':
            let sorted = state.all.sort(function(a, b) {
                return a.front > b.front;
            })
            
            
            return {...state, all: [...state.all, sorted]}
     
        default: return state
    }
}