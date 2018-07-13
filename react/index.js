import React from 'react'
import { render } from 'react-dom'
import { connect, Provider } from 'react-redux'

/** Redux Store
 */
import store, {
  increment,
  decrement,
  setCounter,
  setRandomThunk,
} from '../redux/store'

/** Random Button Component
 */
const RandomButton = (props) => (
  <button onClick={props.setRandom} type="button">Set Random</button>
)

const mapDispatchToProps2 = dispatch => ({
  setRandom: () => dispatch(setRandomThunk())
})
const SmartRandomButton = connect(null, mapDispatchToProps2)(RandomButton)

/** Input Component
 */
class DumbInput extends React.Component {
  state = {
    counterInput: 0,
  }
  handleSubmit = (event) => {
    event.preventDefault()
    // console.log('event.target', event.target)
    // console.log('this.state', this.state)
    this.props.setCounter(this.state.counterInput)
  }
  handleChange = (event) => {
    this.setState({ counterInput: Number(event.target.value) })
  }
  render() {
    const { handleSubmit, handleChange } = this
    return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="counter"
        value={this.state.counterInput}
        onChange={handleChange}
      />
      <button type="submit">Set Counter</button>
    </form>
    )
  }
}
// const mapStateToProps = (state) => ({
//   counter: state,
// })
const mapDispatchToProps = (dispatch) => ({
  setCounter: (newCounter) => dispatch(setCounter(newCounter))
})

const SmartInput = connect(null, mapDispatchToProps)(DumbInput)

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

/** Render to HTML
 */
const App = () => (
  <div>
    <h1>Hello from React!</h1>
    <SmartCounter />
    <SmartButtons />
    <SmartRandomButton />
    <br/>
    <SmartInput />
  </div>
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

