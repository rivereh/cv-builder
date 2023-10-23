import ExperienceForm from './ExperienceForm'
import { v4 as uuid } from 'uuid'
import { useState, useEffect } from 'react'

const ExperienceSection = ({ addExperience, experiences }) => {


  return (
    <>
      {experiences.map((experience, id) => (
        <ExperienceForm key={id} experience={experience} />
      ))}
    </>
  )
}

export default ExperienceSection
