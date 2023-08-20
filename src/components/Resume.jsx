import '../styles/Resume.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import PersonalInfoSection from './PersonalInfoSection'

function Resume({ personalInfo }) {
  return (
    <div className='resume-container'>
      <div className='resume top'>
        <PersonalInfoSection
          fullName={personalInfo.fullName}
          email={personalInfo.email}
          phoneNumber={personalInfo.phoneNumber}
          location={personalInfo.location}
        />
      </div>
    </div>
  )
}

export default Resume
