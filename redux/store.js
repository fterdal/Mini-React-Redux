import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'

/** Action Types
 */
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'
const SET_COUNTER = 'SET_COUNTER'

/** Action Creators
 */
export const increment = () => {
  return { type: INCREMENT_COUNTER }
}
export const decrement = () => {
  return { type: DECREMENT_COUNTER }
}
export const setCounter = (counter) => {
  return { type: SET_COUNTER, counter }
}

/** Reducer
 */
const defaultState = 0
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    case SET_COUNTER:
      return action.counter
    default:
      return state
  }
}

const store = createStore(
  reducer,
  applyMiddleware(logger)
)
export default store

