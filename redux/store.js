import { createStore } from 'redux'

/** Action Types
 */
const INCREMENT_COUNTER = 'INCREMENT_COUNTER'
const DECREMENT_COUNTER = 'DECREMENT_COUNTER'

/** Action Creators
 */
export const increment = () => {
  return { type: INCREMENT_COUNTER }
}
export const decrement = () => {
  return { type: DECREMENT_COUNTER }
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
    default:
      return state
  }
}

const store = createStore(reducer)
export default store


