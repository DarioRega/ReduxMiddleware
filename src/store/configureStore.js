import { createStore, combineReducers, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import authReducer from '../reducers/auth'
import userDataReducer from '../reducers/userData'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default () => {
  const rootReducers = combineReducers({
    auth: authReducer,
    userData: userDataReducer
  })
  const store = createStore(rootReducers,
    composeEnhancers(applyMiddleware(thunk)))
  return store
}
