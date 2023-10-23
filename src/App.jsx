import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import TodoList from './TodoList'
import MonthList from './MonthList'
import Gallery from './Gallery'
import Form from './Form'
import { defaultUser } from './defaultUser'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import EducationForm from './EducationForm'
import ExperienceSection from './ExperienceSection'
import InputField from './components/InputField'
import ExperienceForm from './ExperienceForm'
import { buttonBaseClasses } from '@mui/material'

function App() {
  const [userInfo, setUserInfo] = useState(defaultUser)
  const [educationInfo, setEducationInfo] = useState(userInfo.education)
  const [firstName, setFirstName] = useState(userInfo.firstName)
  const [lastName, setLastName] = useState(userInfo.lastName)
  const [email, setEmail] = useState(userInfo.email)
  const [mobile, setMobile] = useState(userInfo.mobile)
  const [location, setLocation] = useState(userInfo.location)
  const [experiences, setExperiences] = useState(userInfo.experiences)

  function handleEducationFormChange(e) {
    const { key } = e.target.dataset
    setEducationInfo({ ...educationInfo, [key]: e.target.value })
  }

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

  function handleExperienceFormChange(e) {
    const key = e.target.getAttribute('data-key')
    const id = e.target.getAttribute('id')
    const value = e.target.value

    setExperiences((prevExperiences) => {
      return prevExperiences.map((experience) => {
        if (experience.id == id) {
          return { ...experience, [key]: value }
        }
        return experience
      })
    })
  }

  function handleAddExperienceForm() {
    let newExperience = {
      id: uuid(),
      employer: '',
      position: '',
      startDate: '',
      endDate: '',
      location: '',
    }
    setExperiences([...experiences, newExperience])
  }

  function handleRemoveExperienceForm(e) {
    const id = e.target.getAttribute('id')
    const newExperiences = experiences.filter((experience) => {
      return experience.id !== id
    })
    setExperiences(newExperiences)
  }

  // function addExperienceForm(experience) {
  //   setExperienceInfo([...experiences, { id: uuid(), ...experience }])
  // }

  return (
    <div className='container'>
      <div className='forms'>
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
          {/* <br /> */}
          <input
            placeholder='Email'
            value={email}
            onChange={handleEmailChange}
          />
          {/* <br /> */}
          <input
            placeholder='Phone number'
            value={mobile}
            onChange={handleMobileChange}
          />
          {/* <br /> */}
          <input
            placeholder='Location'
            value={location}
            onChange={handleLocationChange}
          />
          {/* <button onClick={handleReset}>Reset</button> */}
        </form>

        <EducationForm
          educationInfo={educationInfo}
          onChange={handleEducationFormChange}
        />

        <h2>Experiences</h2>
        {/* <ExperienceSection
        addExperienceForm={addExperienceForm}
        experiences={experienceInfo}
      /> */}

        <form onSubmit={(e) => e.preventDefault()}>
          {experiences.map((experience) => (
            // <ExperienceForm key={experience.id} experience={experience} />
            <div key={experience.id} className='experience-form'>
              <input
                placeholder='Employer'
                value={experience.employer}
                data-key='employer'
                id={experience.id}
                onChange={handleExperienceFormChange}
              />
              <input
                placeholder='Position'
                value={experience.position}
                data-key='position'
                id={experience.id}
                onChange={handleExperienceFormChange}
              />
              <input
                placeholder='Start Date'
                value={experience.startDate}
                data-key='startDate'
                id={experience.id}
                onChange={handleExperienceFormChange}
              />
              <input
                placeholder='End date'
                value={experience.endDate}
                data-key='endDate'
                id={experience.id}
                onChange={handleExperienceFormChange}
              />
              <input
                placeholder='Location'
                value={experience.location}
                data-key='location'
                id={experience.id}
                onChange={handleExperienceFormChange}
              />
              <textarea
                onChange={handleExperienceFormChange}
                data-key='description'
                value={experience.description}
                id={experience.id}
                rows='5'
              ></textarea>
              <button id={experience.id} onClick={handleRemoveExperienceForm}>
                X
              </button>
            </div>
          ))}
          <button onClick={handleAddExperienceForm}>Add Experience</button>
        </form>
        {/* <InputField type="text" placeholder="Name"></InputField> */}
      </div>
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
        <div className='education'>
          <h3>Education</h3>
          <div className='education-info'>
            <div className='left-side'>
              <p className='bold'>{educationInfo.universityName}</p>
              <p className='degree'>{educationInfo.degree}</p>
            </div>
            <div className='right-side'>
              <p>
                {educationInfo.startDate} - {educationInfo.endDate}
              </p>
              <p>{educationInfo.location}</p>
            </div>
          </div>
        </div>
        <div className='experiences'>
          <h3>Experiences</h3>
          {experiences.map((experience) => (
            <div key={experience.id} className='experience'>
              <div className='experience-info'>
                <div className='left-side'>
                  <p className='bold'>{experience.employer}</p>
                  <p className='position'>{experience.position}</p>
                </div>
                <div className='right-side'>
                  <p>
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <p>{experience.location}</p>
                </div>
              </div>
              <p className='description'>{experience.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App
