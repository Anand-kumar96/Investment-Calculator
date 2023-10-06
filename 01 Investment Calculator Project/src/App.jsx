import { useState } from 'react'
import Header from './component/Header'
import Result from './component/Result'
import UserForm from './component/UserForm'

const App = () => {
  const [userInput, setUserInput] = useState(null)
  const calculateInvestment = (userInput) => {
    setUserInput(userInput)
  }
  //calculation
  const yearlyData = []
  if (userInput) {
    let currentSaving = +userInput.currentSaving
    const yearlySaving = +userInput.yearlySaving
    const savingInterest = +userInput.savingInterest / 100
    const interestDuration = +userInput.interestDuration
    for (let i = 0; i < interestDuration; i++) {
      const yearlyInterest = currentSaving * savingInterest
      currentSaving += yearlyInterest + yearlySaving
      yearlyData.push({
        year: i + 1,
        currentSaving: currentSaving,
        yearlyInterest: yearlyInterest,
        yearlySaving: yearlySaving,
      })
    }
  }

  return (
    <div className="flex flex-col justify-center h-auto items-center mx-auto">
      <Header />
      <UserForm onCalculate={calculateInvestment} />
      {!userInput && (
        <p className="text-center text-white py-4 text-lg font-semibold">
          Investment is not calculated yet!.
        </p>
      )}
      {userInput && (
        <Result userData={yearlyData} initialSaving ={userInput.currentSaving} />
      )}
    </div>
  )
}
export default App
