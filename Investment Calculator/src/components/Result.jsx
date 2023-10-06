// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */
import classes from './Result.module.css'
const formatter = (num) => {
  return (Math.round(num * 100) / 100).toFixed(2)
}
const Result = ({ userData, initialInvestment }) => {
  return (
    <table className={classes.result}>
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {userData.map((data) => (
          <tr key={data.year}>
            <td>{data.year}</td>
            <td>{formatter(data.savingsEndOfYear)}</td>
            <td>{formatter(data.yearlyInterest)}</td>
            <td>
              {formatter(
                data.savingsEndOfYear -
                  initialInvestment -
                  data.yearlyContribution * data.year
              )}
            </td>
            <td>{initialInvestment + data.yearlyContribution * data.year}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Result
