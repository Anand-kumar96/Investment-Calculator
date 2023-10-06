import { useState } from 'react'
import FormData from './components/FormData'
import Header from './components/Header'
import Result from './components/Result'

function App() {
  const [userInput, setUserInput] = useState(null)
  const calculateHandler = (userData) => {
    setUserInput(userData)
  }
  const yearlyData = [] // per-year results
  if (userInput) {
    // calculation
    let currentSavings = +userInput['current-savings']
    const yearlyContribution = +userInput['yearly-contribution']
    const expectedReturn = +userInput['expected-return'] / 100
    const duration = +userInput['duration']

    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn
      currentSavings += yearlyInterest + yearlyContribution
      yearlyData.push({
        // feel free to change the shape of the data pushed to the array!
        year: i + 1,
        savingsEndOfYear: currentSavings,
        yearlyInterest: yearlyInterest,
        yearlyContribution: yearlyContribution,
      })
    }
  }

  return (
    <div className='investment'>
      <Header />
      <FormData onCalculate={calculateHandler} />
      {!userInput && <p style={{textAlign:'center'}}>No Investment calculated yet.</p>}
      {userInput && (
        <Result
          userData={yearlyData}
          initialInvestment={userInput['current-savings']}
        />
      )}
    </div>
  )
}

export default App
