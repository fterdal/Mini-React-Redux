import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

import store, {
  increment,
  decrement,
} from '../redux/store'

const DumbCounter = ({ state }) => (
  <div>
    <p>Counter: {state}</p>
  </div>
)
const mapState = (state) => ({ state })
const SmartCounter = connect(mapState)(DumbCounter)

const App = () => (
  <div>
    <h1>Hello from React!</h1>
    <SmartCounter />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

