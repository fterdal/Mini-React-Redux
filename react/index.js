import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import store, {
  increment,
  decrement,
} from '../redux/store'

/** Counter Component
 */
const DumbCounter = ({ state }) => (
  <div>
    <p>Counter: {state}</p>
  </div>
)
const mapState = (state) => ({ state })
const SmartCounter = connect(mapState)(DumbCounter)

/** Buttons Component
 */
const buttonsStyle = {
  display: 'flex',
  width: 80,
  justifyContent: 'space-between',
}
const DumbButtons = ({ handleIncrement, handleDecrement }) => (
  <div style={buttonsStyle}>
    <button type="button" onClick={handleIncrement}>+</button>
    <button type="button" onClick={handleDecrement}>-</button>
  </div>
)
const mapDispatch = (dispatch) => ({
  handleIncrement: () => dispatch(increment()),
  handleDecrement: () => dispatch(decrement()),
})
const SmartButtons = connect(null, mapDispatch)(DumbButtons)

const App = () => (
  <div>
    <h1>Hello from React!</h1>
    <SmartCounter />
    <SmartButtons />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

