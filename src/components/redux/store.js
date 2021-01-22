import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import ResturantsReducer from '../redux/featuredResturants/returantsReducer'


const store = createStore(ResturantsReducer,applyMiddleware(logger, thunk))

export default store