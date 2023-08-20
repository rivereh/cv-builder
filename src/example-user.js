import uniqid from 'uniqid'

const exampleUser = {
  personalInfo: {
    fullName: 'River Hill',
    email: 'riverehill@gmail.com',
    phoneNumber: '(206)555-5555',
    location: 'Seattle, WA'
  },

  sections: {
    education: [
      {
        university: 'University of Washington',
        degree: 'Bachelor of Science',
        location: 'Bothell, WA',
        startDate: '01/2021',
        endDate: '03/2023',
        id: uniqid()
      }
    ]
  }
}

export default exampleUser
