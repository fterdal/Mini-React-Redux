import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import axios from 'axios'
import thunkMiddleware from 'redux-thunk'
import Bluebird from 'bluebird'

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
export const setCounter = value => {
  return { type: SET_COUNTER, value }
}

const shhhhhhhhThisIsDefinitelyExpress = () => {
  const MIN = 1
  const MAX = 100
  const counter = Math.floor(Math.random() * (MAX - MIN) + MIN);
  return Bluebird.delay(500, counter)
}

/** Thunk Creators
 */
export const setRandomThunk = () => {
  return async dispatch => {
    try {
      // 👇 This is two levels of destructuring. From the axios response,
      // 👇 I get back an object with a data object, which has a counter property.
      const { data: { counter } } = await axios.get('http://localhost:3000/')
      // const counter = await shhhhhhhhThisIsDefinitelyExpress()
      // console.log('counter', counter)
      dispatch(setCounter(counter))
    } catch(err) {
      console.error(err)
    }
  }
}

/** Reducer
 */
const defaultState = 0
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case INCREMENT_COUNTER:
      // console.log('typeof state', typeof state)
      return state + 1
    case DECREMENT_COUNTER:
      return state - 1
    case SET_COUNTER:
      return action.value
    default:
      return state
  }
}

const store = createStore(
  reducer,
  applyMiddleware(thunkMiddleware, logger)
)
export default store
