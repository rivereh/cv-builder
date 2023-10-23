import { useState } from 'react'

const Form = () => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

  function handleReset() {
    setFirstName('')
    setLastName('')
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder='FirstName'
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder='Last name'
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hello, {firstName} {lastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  )
}

export default Form