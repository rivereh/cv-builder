const ExperienceForm = ({ experience }) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder='Employer'
          value={experience.employer}
          data-key='employer'
        />
      </form>
    </>
  )
}

export default ExperienceForm
