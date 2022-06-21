import { combineReducers, createStore } from 'redux'
import teamReducer from './team-reducer'

let reducers = combineReducers({
    team: teamReducer
})

let store = createStore(reducers)

export default store