const EducationForm = ({ educationInfo, onChange }) => {
  return (
    <>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder='University name'
          value={educationInfo.universityName}
          onChange={onChange}
          data-key='universityName'
        />
        {/* <br /> */}
        <input
          placeholder='Degree'
          value={educationInfo.degree}
          onChange={onChange}
          data-key='degree'
        />
        {/* <br /> */}
        <input
          value={educationInfo.startDate}
          onChange={onChange}
          data-key='startDate'
        />
      </form>
    </>
  )
}

export default EducationForm
