import { v4 as uuid } from 'uuid'

export const defaultUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  mobile: '206 555 5555',
  location: 'Seattle, WA',
  education: {
    universityName: 'University of Washington',
    degree: 'Bachelors in Computer Science',
    startDate: '01/2020',
    endDate: '03/2023',
    location: 'Seattle, WA',
  },
  experiences: [
    {
      id: uuid(),
      employer: 'Microsoft',
      position: 'Software Engineer Intern',
      startDate: '06/2019',
      endDate: '09/2019',
      location: 'Redmond, WA',
      description:
        'As a Full-Stack Software Engineer, I designed and maintained end-to-end web applications using technologies like React and Node.js, collaborating closely with cross-functional teams to deliver features on schedule, and optimizing performance through RESTful APIs and efficient database queries.',
    },
    {
      id: uuid(),
      employer: 'Apple',
      position: 'Jr. Software Engineer',
      startDate: '03/2023',
      endDate: 'present',
      location: 'Seattle, WA',
      description:
        'In my role as a Front-End Developer, I created responsive user interfaces with HTML, CSS, and JavaScript, ensuring a seamless user experience while integrating third-party APIs and libraries to enhance website functionality. I also conducted usability testing and addressed front-end issues to improve load times and overall usability.',
    },
  ],
}
