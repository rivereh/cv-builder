import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import TodoList from './TodoList'
import MonthList from './MonthList'
import Gallery from './Gallery'
import Form from './Form'
import { defaultUser } from './defaultUser'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import DeleteIcon from '@mui/icons-material/Delete'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'
import AddIcon from '@mui/icons-material/Add'
import EducationForm from './EducationForm'
import ExperienceSection from './ExperienceSection'
import InputField from './components/InputField'
import ExperienceForm from './ExperienceForm'
import { buttonBaseClasses } from '@mui/material'
import { TextField } from '@mui/material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Stack from '@mui/material/Stack'
import TextareaAutosize from '@mui/material/TextareaAutosize'
import Button from '@mui/material/Button'

function App() {
  const [userInfo, setUserInfo] = useState(defaultUser)
  const [educationInfo, setEducationInfo] = useState(userInfo.education)
  const [firstName, setFirstName] = useState(userInfo.firstName)
  const [lastName, setLastName] = useState(userInfo.lastName)
  const [email, setEmail] = useState(userInfo.email)
  const [mobile, setMobile] = useState(userInfo.mobile)
  const [location, setLocation] = useState(userInfo.location)
  const [experiences, setExperiences] = useState(userInfo.experiences)
  const [expanded, setExpanded] = useState('')

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false)
  }

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
    const key = e.target.name
    const id = e.target.id
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
        <Accordion defaultExpanded={true}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>Personal Info</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Stack spacing={2}>
              <Stack direction='row' spacing={1}>
                <TextField
                  value={firstName}
                  id='outlined-basic'
                  label='First name'
                  variant='outlined'
                  onChange={handleFirstNameChange}
                />
                <TextField
                  value={lastName}
                  id='outlined-basic'
                  label='Last name'
                  variant='outlined'
                  onChange={handleLastNameChange}
                />
              </Stack>
              <TextField
                value={email}
                id='outlined-basic'
                label='Email'
                variant='outlined'
                onChange={handleEmailChange}
              />
              <TextField
                value={mobile}
                id='outlined-basic'
                label='Phone number'
                variant='outlined'
                onChange={handleMobileChange}
              />
              <TextField
                value={location}
                id='outlined-basic'
                label='Location'
                variant='outlined'
                onChange={handleLocationChange}
              />
            </Stack>
          </AccordionDetails>
        </Accordion>
        {/* <button onClick={handleReset}>Reset</button> */}

        <EducationForm
          educationInfo={educationInfo}
          onChange={handleEducationFormChange}
        />

        <h2>Experiences</h2>

        {experiences.map((experience) => (
          // <ExperienceForm key={experience.id} experience={experience} />
          <div key={experience.id} className='experience-form'>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>{experience.employer ? experience.employer : 'Experience'}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2}>
                  <TextField
                    value={experience.employer}
                    label='Employer'
                    name='employer'
                    id={experience.id}
                    onChange={handleExperienceFormChange}
                  />
                  <TextField
                    value={experience.position}
                    label='Position'
                    name='position'
                    id={experience.id}
                    onChange={handleExperienceFormChange}
                  />

                  <Stack direction='row' spacing={1}>
                    <TextField
                      value={experience.startDate}
                      label='Start Date'
                      variant='outlined'
                      name='startDate'
                      id={experience.id}
                      onChange={handleExperienceFormChange}
                    />
                    <TextField
                      value={experience.endDate}
                      label='End Date'
                      name='endDate'
                      id={experience.id}
                      onChange={handleExperienceFormChange}
                    />
                  </Stack>
                  <TextField
                    value={experience.location}
                    label='Location'
                    name='location'
                    id={experience.id}
                    onChange={handleExperienceFormChange}
                  />
                  <TextareaAutosize
                    minRows={3}
                    value={experience.description}
                    name='description'
                    id={experience.id}
                    onChange={handleExperienceFormChange}
                  />
                  <Button
                    id={experience.id}
                    onClick={handleRemoveExperienceForm}
                    variant='contained'
                    color='error'
                    startIcon={<DeleteIcon />}
                  >
                    Delete Experience
                  </Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
        <Button
          onClick={handleAddExperienceForm}
          variant='contained'
          startIcon={<AddIcon />}
        >
          Add Experience
        </Button>
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
