function DisplayForms({
  forms,
  onChange,
  onCancel,
  toggleCollapsed,
  onHide,
  onRemove,
  FormComponent,
  titleKey,
  arrayName
}) {
  return (
    <div className='forms-container'>
      {forms.map((form) => (
        <FormComponent
          onChange={onChange}
          form={form}
          key={form.id}
          cancel={onCancel}
          save={toggleCollapsed}
          remove={onRemove}
        />
      ))}
    </div>
  )
}

export default DisplayForms
