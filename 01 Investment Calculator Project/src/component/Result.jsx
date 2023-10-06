// eslint-disable-next-line react/prop-types
/* eslint-disable react/prop-types */
const formatter = (num) => {
  return Math.round((num * 100) / 100).toFixed(2)
}
const Result = ({ userData, initialSaving }) => {
  return (
    <table className="max-w-xl md:max-w-2xl table-fixed my-8 mx-2">
      <thead className="text-sm text-indigo-400">
        <tr>
          <th className="px-[2px] md:px-4">Year</th>
          <th className="px-[2px] md:px-4">Total Savings</th>
          <th className="px-[2px] md:px-4">Interest(year)</th>
          <th className="px-[2px] md:px-4">Total Interest</th>
          <th className="px-[2px] md:px-4">Invested Capital</th>
        </tr>
      </thead>
      <tbody className="text-sm text-white">
        {userData.map((data) => (
          <tr key={data.year}>
            <th className="px-[2px] md:px-4 py-2">{data.year}</th>
            <th className="px-[2px] md:px-4 py-2">{formatter(data.currentSaving)}</th>
            <th className="px-[2px] md:px-4 py-2">{formatter(data.yearlyInterest)}</th>
            <th className="px-[2px] md:px-4 py-2">
              {formatter(
                data.currentSaving -
                  data.yearlySaving * data.year -
                  initialSaving
              )}
            </th>
            <th className="px-4 py-2">
              {formatter(data.yearlySaving * data.year + initialSaving)}
            </th>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Result
