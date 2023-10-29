import { v4 as uuid } from 'uuid'

export const clearUser = {
  firstName: '',
  lastName: '',
  email: '',
  mobile: '',
  location: '',
  education: {
    universityName: '',
    degree: '',
    startDate: '',
    endDate: '',
    location: '',
  },
  experiences: [],
  projects: [],
}
