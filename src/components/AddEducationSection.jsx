import DisplayForms from './DisplayForms'
import EducationForm from './EducationForm'

function AddEducationSection({
  educations,
  isOpen,
  onChange,
  createForm,
  setOpen,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove
}) {
  return (
    <div className='add-education-section section'>
      <div className='section-content open'>
        <DisplayForms
          forms={educations}
          FormComponent={EducationForm}
          onChange={onChange}
          onCancel={onCancel}
          onHide={onHide}
          onRemove={onRemove}
          titleKey='schoolName'
          arrayName='educations'
        />
      </div>
    </div>
  )
}

export default AddEducationSection
