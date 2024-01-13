import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import EmailIcon from '@mui/icons-material/Email'

const Resume = ({ userInfo, educationInfo, experiences, projects }) => {
  return (
    <div className='resume'>
      <div className='resume-header'>
        <h1>
          {userInfo.firstName} {userInfo.lastName}
        </h1>
        <div className='info'>
          {userInfo.email && (
            <p className='info-item'>
              <EmailIcon sx={{ width: 16, height: 16 }} /> {userInfo.email}
            </p>
          )}
          {userInfo.mobile && (
            <p className='info-item'>
              <LocalPhoneIcon sx={{ fontSize: 16 }} /> {userInfo.mobile}
            </p>
          )}
          {userInfo.location && (
            <p className='info-item'>
              <LocationOnIcon sx={{ fontSize: 16 }} /> {userInfo.location}
            </p>
          )}
        </div>
      </div>

      {(educationInfo.universityName ||
        educationInfo.degree ||
        educationInfo.startDate ||
        educationInfo.endDate ||
        educationInfo.location) && (
        <div className='education'>
          <h3>Education</h3>
          <div className='education-info'>
            <div className='left-side'>
              <p className='bold'>{educationInfo.universityName}</p>
              <p className='degree'>{educationInfo.degree}</p>
            </div>
            <div className='right-side'>
              {(educationInfo.startDate || educationInfo.endDate) && (
                <p>
                  {educationInfo.startDate} - {educationInfo.endDate}
                </p>
              )}

              <p>{educationInfo.location}</p>
            </div>
          </div>
        </div>
      )}

      {experiences.length > 0 && (
        <div className='experiences'>
          <h3>Experience</h3>
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
      )}
      {projects.length > 0 && (
        <div className='experiences'>
          <h3>Software Projects</h3>
          {projects.map((project) => (
            <div key={project.id} className='experience'>
              <p className='bold'>{project.name}</p>
              <p className='description'>{project.description}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}
export default Resume
