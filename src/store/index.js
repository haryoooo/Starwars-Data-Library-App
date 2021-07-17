import {createStore, applyMiddleware} from 'redux'
import starwarsReducer from '../store/reducer/starWarsReducer'
import thunk from 'redux-thunk'

const store = createStore(starwarsReducer, applyMiddleware(thunk))

export default store