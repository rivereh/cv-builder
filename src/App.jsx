import { useState } from 'react'
import PersonalDetails from './components/PersonalDetails'

import exampleUser from './example-user'

import './styles/App.css'
import Resume from './components/Resume'
import AddEducationSection from './components/AddEducationSection'

function App() {
  const [userInfo, setUserInfo] = useState(exampleUser.personalInfo)
  const [sections, setSections] = useState(exampleUser.sections)
  const [prevState, setPrevState] = useState(null) // for cancel button

  function handleUserInfoChange(e) {
    const { key } = e.target.dataset
    setUserInfo({ ...userInfo, [key]: e.target.value })
  }

  function createForm(arrayName, object) {
    setPrevState(null)
  }

  return (
    <div className='app'>
      <div className='edit-side'>
        <div className='form-container'>
          <PersonalDetails
            onChange={handleUserInfoChange}
            fullName={userInfo.fullName}
            email={userInfo.email}
            phoneNumber={userInfo.phoneNumber}
            location={userInfo.location}
          />
          <hr />
          {/* <AddEducationSection educations={userInfo.educations} /> */}
        </div>
      </div>
      <Resume personalInfo={userInfo} />
    </div>
  )
}

export default App
