const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'Obtober',
  'November',
  'December'
]

const MonthList = () => (
  <ul>
    {months.map((month, index) => (
      <li key={index}>{month}</li>
    ))}
  </ul>
)

export default MonthList
