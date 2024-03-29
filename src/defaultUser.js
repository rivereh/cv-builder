import { v4 as uuid } from 'uuid'

export const defaultUser = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'johndoe@gmail.com',
  mobile: '206 555 5555',
  location: 'Seattle, WA',
  education: {
    universityName: 'University of Washington',
    degree: 'Bachelor of Science in Computer Science',
    startDate: '2020-1',
    endDate: '2023-3',
    location: 'Seattle, WA',
  },
  experiences: [
    {
      id: uuid(),
      employer: 'Microsoft',
      position: 'Software Engineer Intern',
      startDate: '2019-6',
      endDate: '2019-9',
      location: 'Redmond, WA',
      description:
        'As a Full-Stack Software Engineer, I designed and maintained end-to-end web applications using technologies like React and Node.js, collaborating closely with cross-functional teams to deliver features on schedule, and optimizing performance through RESTful APIs and efficient database queries.',
    },
    {
      id: uuid(),
      employer: 'Apple',
      position: 'Jr. Software Engineer',
      startDate: '2023-3',
      endDate: '2024-2',
      location: 'Seattle, WA',
      description:
        'In my role as a Front-End Developer, I created responsive user interfaces with HTML, CSS, and JavaScript, ensuring a seamless user experience while integrating third-party APIs and libraries to enhance website functionality. I also conducted usability testing and addressed front-end issues to improve load times and overall usability.',
    },
  ],
  projects: [
    {
      id: uuid(),
      name: 'Web appliction',
      description:
        'Led the development and launch of a successful web application. Managed project scope and resources, employing agile methodologies for on-time, on-budget delivery. Achievements include intuitive UI design, robust security, and performance optimization. Demonstrated strong leadership and technical expertise in delivering impactful digital solutions.',
    },
    {
      id: uuid(),
      name: 'Unity Game',
      description:
        'Oversaw the development and launch of a Unity game project, showcasing strong project management skills. Successfully managed resources, schedules, and budgets to ensure on-time and within-budget delivery. Key accomplishments include designing immersive gameplay, optimizing performance, and enhancing user engagement.',
    },
  ],
}
