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
      </form>
    </>
  )
}

export default EducationForm
