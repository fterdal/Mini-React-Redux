import React from 'react'
import { render } from 'react-dom'

import store, {
  increment,
  decrement,
} from '../redux/store'

console.log(store.getState())
store.dispatch(increment())
console.log(store.getState())
store.dispatch(decrement())
console.log(store.getState())

const App = () => (
  <div>
    <h1>Hello from React!</h1>
  </div>
)

render(
  <App />,
  document.getElementById('app')
)

