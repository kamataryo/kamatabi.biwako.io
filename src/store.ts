import { combineReducers, createStore, applyMiddleware, Reducer } from 'redux'
import testReducer, { TestState } from './reducers/test'
import createBrowserHistory from 'history/createBrowserHistory'
import { routerReducer, RouterState, routerMiddleware } from 'react-router-redux'

export const history = createBrowserHistory()
const middleware = routerMiddleware(history)

export interface RootState {
  test    : TestState,
  routing : RouterState,
}

const rootReducer = combineReducers({
  test    : testReducer,
  routing : routerReducer as Reducer<RouterState>,
})

const rootStore = createStore(
  rootReducer,
  applyMiddleware(middleware),
)

export default rootStore
