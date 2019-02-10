const initialState = {
    current: {},
    all: []
}

export default function deckReducer(state = initialState, action) {
    switch(action.type) {
        case 'CREATE_DECK':
        return {...state, all: [...state.all, action.payload]}
        default: return state
    }
}