import { useState } from 'react'
import classes from './FormData.module.css'
const initialUserInput = {
  'current-savings': 10000,
  'yearly-contribution': 1200,
  'expected-return': 7,
  'duration': 10,
}
// eslint-disable-next-line react/prop-types
const FormData = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState(initialUserInput)

  const handleChange = (name, value) => {
    setUserInput((prevInput) => {
      return { ...prevInput, [name]: +value }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onCalculate(userInput)
  }
  const handleReset = () => {
    setUserInput(initialUserInput)
  }
  return (
    <form className={classes.form} onSubmit={handleSubmit}>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input
            type="number"
            id="current-savings"
            onChange={(e) => handleChange('current-savings', e.target.value)}
            value={userInput['current-savings'].toString()}
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input
            type="number"
            id="yearly-contribution"
            onChange={(e) =>
              handleChange('yearly-contribution', e.target.value)
            }
            value={userInput['yearly-contribution'].toString()}
          />
        </p>
      </div>
      <div className={classes['input-group']}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input
            type="number"
            id="expected-return"
            onChange={(e) => handleChange('expected-return', e.target.value)}
            value={userInput['expected-return'].toString()}
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input
            type="number"
            id="duration"
            onChange={(e) => handleChange('duration', e.target.value)}
            value={userInput['duration'].toString()}
          />
        </p>
      </div>
      <p className={classes.actions}>
        <button
          type="reset"
          className={classes.buttonAlt}
          onClick={handleReset}
        >
          Reset
        </button>
        <button type="submit" className={classes.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default FormData
