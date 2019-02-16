import { combineReducers } from 'redux'

import userReducer from './userReducer'
import deckReducer from './deckReducer'
import cardReducer from './cardReducer'


const rootReducer = combineReducers({
  user: userReducer,
  deck: deckReducer,
  card: cardReducer

})

export default rootReducer