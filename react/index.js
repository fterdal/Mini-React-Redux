/* eslint-disable react/prefer-stateless-function */
import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

/** Redux Store
 */
import store, { increment, decrement, setCounter } from '../redux/store'

/** Counter Component
 */
const DumbCounter = ({ state }) => (
  <div>
    <p>Counter: {state}</p>
  </div>
)
const mapState = state => ({ state })
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
    <button type="button" onClick={handleIncrement}>
      +
    </button>
    <button type="button" onClick={handleDecrement}>
      -
    </button>
  </div>
)
const mapDispatch = dispatch => ({
  handleIncrement: () => dispatch(increment()),
  handleDecrement: () => dispatch(decrement()),
})
const SmartButtons = connect(null, mapDispatch)(DumbButtons)

class DumbCounterForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counterInput: 0,
    }
  }
  handleChange = evt => {
    this.setState({
      counterInput: evt.target.value,
    })
  }
  handleSubmit = evt => {
    evt.preventDefault()
    this.props.handleSetCounter(this.state.counterInput)
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor="counterInput">Set Counter:</label>
        <input name="counterInput" type="number" onChange={this.handleChange} />
        <button type="submit">SET</button>
      </form>
    )
  }
}

const mapDispatchForm = dispatch => ({
  handleSetCounter: counter => dispatch(setCounter(counter)),
})
const SmartCounterForm = connect(null, mapDispatchForm)(DumbCounterForm)

/** Render to HTML
 */
const App = () => (
  <div>
    <h1>Hello from React!</h1>
    <SmartCounter />
    <SmartButtons />
    <SmartCounterForm />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)
