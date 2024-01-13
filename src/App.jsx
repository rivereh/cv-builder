import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import './App.css'
import Form from './Form'
import { defaultUser } from './defaultUser'
import { clearUser } from './clearUser'
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
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import jsPDF from 'jspdf'
import html2canvas from 'html2canvas'
import Resume from './components/Resume'

function App() {
  const [userInfo, setUserInfo] = useState(defaultUser)
  const [educationInfo, setEducationInfo] = useState(userInfo.education)
  const [firstName, setFirstName] = useState(userInfo.firstName)
  const [lastName, setLastName] = useState(userInfo.lastName)
  const [email, setEmail] = useState(userInfo.email)
  const [mobile, setMobile] = useState(userInfo.mobile)
  const [location, setLocation] = useState(userInfo.location)
  const [experiences, setExperiences] = useState(userInfo.experiences)
  const [projects, setProjects] = useState(userInfo.projects)

  function handleEducationFormChange(e) {
    const key = e.target.name
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
    setEducationInfo(clearUser.education)
    setFirstName('')
    setLastName('')
    setEmail('')
    setMobile('')
    setLocation('')
    setExperiences([])
    setProjects([])
  }

  function handleLoadDemo() {
    setEducationInfo(defaultUser.education)
    setFirstName(defaultUser.firstName)
    setLastName(defaultUser.lastName)
    setEmail(defaultUser.email)
    setMobile(defaultUser.mobile)
    setLocation(defaultUser.location)
    setExperiences(defaultUser.experiences)
    setProjects(defaultUser.projects)
  }

  function downloadPDF() {
    const capture = document.querySelector('.resume')
    const widthInCM = 17
    const heightInCM = 22
    const pdfWidth = widthInCM * 10
    const pdfHeight = heightInCM * 10

    capture.style.width = pdfWidth + 'mm'
    capture.style.height = pdfHeight + 'mm'

    html2canvas(capture, {
      scale: 1.5,
    }).then((canvas) => {
      capture.style.width = widthInCM + 'cm'
      capture.style.height = heightInCM + 'cm'

      const imgData = canvas.toDataURL('image/jpeg', 1.0)
      const doc = new jsPDF('p', 'mm', [pdfWidth, pdfHeight])
      doc.addImage(imgData, 'JPEG', 0, 0, pdfWidth, pdfHeight)
      doc.save('resume.pdf')
    })
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

  function handleProjectFormChange(e) {
    const key = e.target.name
    const id = e.target.id
    const value = e.target.value

    setProjects((prevProjects) => {
      return prevProjects.map((project) => {
        if (project.id == id) {
          return { ...project, [key]: value }
        }
        return project
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
      description: '',
    }
    setExperiences([...experiences, newExperience])
  }

  function handleAddProjectForm() {
    let newProject = {
      id: uuid(),
      name: '',
      description: '',
    }
    setProjects([...projects, newProject])
  }

  function handleRemoveExperienceForm(e) {
    const id = e.target.getAttribute('id')
    const newExperiences = experiences.filter((experience) => {
      return experience.id !== id
    })
    setExperiences(newExperiences)
  }

  function handleRemoveProjectForm(e) {
    const id = e.target.getAttribute('id')
    const newProjects = projects.filter((experience) => {
      return experience.id !== id
    })
    setProjects(newProjects)
  }

  return (
    <div className='container'>
      <div className='forms'>
        <Stack
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Button
            onClick={handleLoadDemo}
            variant='contained'
            className='top-btns'
          >
            Load Demo Data
          </Button>
          <Button
            onClick={handleReset}
            variant='contained'
            className='top-btns'
          >
            Clear All Fields
          </Button>
          <Button
            onClick={downloadPDF}
            variant='contained'
            className='top-btns'
          >
            Download PDF
          </Button>
        </Stack>

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

        <Typography variant='h5' sx={{ marginTop: 1 }}>
          Experiences
        </Typography>

        {experiences.map((experience) => (
          // <ExperienceForm key={experience.id} experience={experience} />
          <div key={experience.id} className='experience-form'>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  {experience.employer ? experience.employer : 'Experience'}
                </Typography>
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
        <Typography variant='h5' sx={{ marginTop: 1 }}>
          Projects
        </Typography>
        {projects.map((project) => (
          // <ExperienceForm key={experience.id} experience={experience} />
          <div key={project.id} className='experience-form'>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  {project.name ? project.name : 'Project'}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Stack spacing={2}>
                  <TextField
                    value={project.name}
                    label='Project Name'
                    name='name'
                    id={project.id}
                    onChange={handleProjectFormChange}
                  />
                  <TextareaAutosize
                    minRows={3}
                    value={project.description}
                    name='description'
                    id={project.id}
                    onChange={handleProjectFormChange}
                  />
                  <Button
                    id={project.id}
                    onClick={handleRemoveProjectForm}
                    variant='contained'
                    color='error'
                    startIcon={<DeleteIcon />}
                  >
                    Delete Project
                  </Button>
                </Stack>
              </AccordionDetails>
            </Accordion>
          </div>
        ))}
        <Button
          onClick={handleAddProjectForm}
          variant='contained'
          startIcon={<AddIcon />}
          sx={{ marginBottom: 2 }}
        >
          Add Project
        </Button>
      </div>

      <div className='resume-spacer'></div>
      <Resume
        userInfo={userInfo}
        educationInfo={educationInfo}
        experiences={experiences}
        projects={projects}
      />
    </div>
  )
}

export default App
