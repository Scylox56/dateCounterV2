import { useState } from 'react'
import './App.css'

export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  )
}

function Counter() {
  const [count, setCount] = useState(0)
  const [step, setStep] = useState(1)

  function handleReset() {
    setCount(0)
    setStep(1)
  }

  const date = new Date('september 7 2025')
  date.setDate(date.getDate() + count)

  return (
    <div className="Counter">
      <h1>Date Counter</h1>

      <div className="control-group">
        <label>Step Size: {step}</label>
        <div className="slider-container">
          <input
            type="range"
            min="0"
            max="10"
            value={step}
            onChange={(e) => setStep(Number(e.target.value))}
          />
          <span className="slider-value">{step}</span>
        </div>
      </div>

      <div className="control-group">
        <label>Count</label>
        <div className="counter-controls">
          <button onClick={() => setCount((c) => c - step)}>-</button>
          <input
            type="text"
            value={count}
            onChange={(e) => setCount(Number(e.target.value))}
          />
          <button onClick={() => setCount((c) => c + step)}>+</button>
        </div>
      </div>

      <div className="date-display">
        <p className="date-text">
          {count === 0
            ? 'Today is '
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </p>
        <p className="date-value">{date.toDateString()}</p>
      </div>

      {(count !== 0 || step !== 1) && (
        <button className="reset-button" onClick={handleReset}>
          Reset
        </button>
      )}
    </div>
  )
}
