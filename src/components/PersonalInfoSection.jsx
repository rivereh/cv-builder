function PersonalInfoSection({ email, fullName, phoneNumber, location }) {
  return (
    <div className='personal-info'>
      <h1 className='resume-name'>{fullName}</h1>
      <div className='contact-info'>
        {email && (
          <div>
            <i className='fa-solid fa-envelope'></i>
            <span>{email}</span>
          </div>
        )}

        {phoneNumber && (
          <div>
            <i className='fa-solid fa-phone'></i>
            <span>{phoneNumber}</span>
          </div>
        )}

        {location && (
          <div>
            <i className='fa-solid fa-location-dot'></i>
            <span>{location}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default PersonalInfoSection
