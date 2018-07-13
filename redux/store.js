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



const shhhhhhhhThisIsDefinitelyExpress = async () => {
  const MIN = 1
  const MAX = 100
  const counter = Math.floor(Math.random() * (MAX - MIN) + MIN);
  return Bluebird.delay(500, counter)
}

/** Thunk Creators
 */
export const setRandomThunk = () => {
  return async dispatch => {
    // const newCounterVal = await axios.get('localhost:3000/')
    const newCounterVal = await shhhhhhhhThisIsDefinitelyExpress()
    // console.log('newCounterVal', newCounterVal)
    dispatch(setCounter(newCounterVal))
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
