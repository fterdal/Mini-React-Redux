import React from 'react'
import { render } from 'react-dom'

import store, {
  increment,
  decrement,
} from '../redux/store'

store.dispatch(increment())
store.dispatch(decrement())

const App = () => (
  <div>
    <h1>Hello from React!</h1>
  </div>
)

render(
  <App />,
  document.getElementById('app')
)

