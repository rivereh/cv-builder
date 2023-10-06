import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import MonthList from './MonthList'
import Gallery from './Gallery'
import Form from './Form'
import { defaultUser } from './defaultUser'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'

function App() {
  const [firstName, setFirstName] = useState(defaultUser.firstName)
  const [lastName, setLastName] = useState(defaultUser.lastName)
  const [email, setEmail] = useState(defaultUser.email)
  const [mobile, setMobile] = useState(defaultUser.mobile)
  const [location, setLocation] = useState(defaultUser.location)

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

  function handleEmailChange(e) {
    setEmail(e.target.value)
  }

  function handleMobileChange(e) {
    setMobile(e.target.value)
  }

  function handleLocationChange(e) {
    setLocation(e.target.value)
  }

  function handleReset() {
    setFirstName('')
    setLastName('')
    setEmail('')
  }

  return (
    <>
      <div className='resume'>
        <div className='resume-header'>
          <h1>
            {firstName} {lastName}
          </h1>
          <div className='info'>
            {email && (
              <p className='info-item'>
                <EmailIcon sx={{ width: 16, height: 16 }} /> {email}
              </p>
            )}
            {mobile && (
              <p className='info-item'>
                <LocalPhoneIcon sx={{ fontSize: 16 }} /> {mobile}
              </p>
            )}
            {location && (
              <p className='info-item'>
                <LocationOnIcon sx={{ fontSize: 16 }} /> {location}
              </p>
            )}
          </div>
        </div>
      </div>
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
        <br />
        <input placeholder='Email' value={email} onChange={handleEmailChange} />
        <br />
        <input
          placeholder='Phone number'
          value={mobile}
          onChange={handleMobileChange}
        />
        <br />
        <input
          placeholder='Location'
          value={location}
          onChange={handleLocationChange}
        />
        <button onClick={handleReset}>Reset</button>
      </form>
    </>
  )
}

export default App
