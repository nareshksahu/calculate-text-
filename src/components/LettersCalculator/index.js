import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {
    count: 0,
    textInput: '',
  }

  calculateText = event => {
    this.setState({textInput: event.target.value})
    this.setState(prevState => {
      prevState.count + 1
    })
  }

  render() {
    return (
      <div className="Letters-calculator-card-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          className="calculator-pic"
          alt="letters calculator"
        />
        <h1 className="calculator-letters-name">
          Calculate the letters you enter
        </h1>
        <div className="">
          <label>
            Enter the phrase
            <input
              type="text"
              className="text-letters"
              label="Enter the phrase"
              onChange={this.calculateText}
              value={textInput}
            />
          </label>
        </div>
        <div className="">
          <p className="">No.of Letters: 0</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
