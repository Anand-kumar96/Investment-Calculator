import { useState } from 'react'

const initialState = {
  currentSaving: 10000,
  yearlySaving: 1200,
  savingInterest: 7,
  interestDuration: 10,
}
// eslint-disable-next-line react/prop-types
const UserForm = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState(initialState)
  const handleChange = (name, value) => {
    setUserInput((prev) => {
      return { ...prev, [name]: +value }
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    onCalculate(userInput)
  }
  const handleReset = () => {
    setUserInput(initialState)
  }
  return (
    <form
      className="border-solid border-2 border-sky-500 px-3 md:px-10 py-3 rounded-md bg-teal-700 max-w-md md:max-w-xl"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between gap-3 py-4 px-auto ">
        <div className="">
          <label className="text-white block my-2" htmlFor="currentSaving">
            Current Saving ($)
          </label>
          <input
            className="py-2 px-3 bg-slate-600 text-white rounded-md font-semibold w-[100%] border-solid border-2 border-lime-600"
            type="number"
            name="currentSaving"
            id="currentSaving"
            required
            onChange={(e) => handleChange('currentSaving', e.target.value)}
            value={userInput.currentSaving}
          />
        </div>
        <div className="">
          <label className="text-white block my-2" htmlFor="yearlySaving">
            Yearly Saving ($)
          </label>
          <input
            className="py-2 px-3 bg-slate-600 text-white rounded-md font-semibold w-[100%] border-solid border-2 border-lime-600"
            type="number"
            name="yearlySaving"
            id="yearlySaving"
            required
            onChange={(e) => handleChange('yearlySaving', e.target.value)}
            value={userInput.yearlySaving}
          />
        </div>
      </div>
      <div className="flex justify-between gap-3">
        <div>
          <label className="text-white block my-2" htmlFor="savingInterest">
            Saving Interest (%)
          </label>
          <input
            className="py-2 px-3 bg-slate-600 text-white rounded-md font-semibold w-[100%] border-solid border-2 border-lime-600"
            type="number"
            name="savingInterest"
            id="savingInterest"
            required
            onChange={(e) => handleChange('savingInterest', e.target.value)}
            value={userInput.savingInterest}
          />
        </div>
        <div>
          <label className="text-white block my-2" htmlFor="interestDuration">
            Interest Duration (year)
          </label>
          <input
            className="py-2 px-3 bg-slate-600 text-white rounded-md font-semibold w-[100%] border-solid border-2 border-lime-600"
            type="number"
            name="interestDuration"
            id="interestDuration"
            required
            onChange={(e) => handleChange('interestDuration', e.target.value)}
            value={userInput.interestDuration}
          />
        </div>
      </div>
      <div className="flex justify-center pt-8 pb-4 gap-8">
        <button
          type="reset"
          className="px-4 py-2 rounded-md bg-indigo-400 text-white hover:bg-slate-600 hover:text-stone-300 font-semibold"
          onClick={handleReset}
        >
          Reset
        </button>
        <button
          type="submit"
          className="px-4 py-2 rounded-md bg-teal-400 text-white hover:bg-slate-600 hover:text-stone-300 font-semibold"
        >
          Calculate
        </button>
      </div>
    </form>
  )
}

export default UserForm
