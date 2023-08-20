import InputGroup from './InputGroup'

function PersonalDetails({ onChange, email, fullName, phoneNumber, location }) {
  return (
    <form className='personal-details'>
      <h2>Personal Details</h2>
      <InputGroup
        type='text'
        id='full-name'
        labelText='Full name'
        placeholder='Enter first and last name'
        value={fullName}
        onChange={onChange}
        data-key='fullName'
      />
      <InputGroup
        type='email'
        id='email'
        labelText='Email'
        placeholder='Enter email'
        value={email}
        onChange={onChange}
        data-key='email'
        recommended
      />
      <InputGroup
        type='tel'
        id='phone-number'
        labelText='Phone number'
        placeholder='Enter phone number'
        value={phoneNumber}
        onChange={onChange}
        data-key='phoneNumber'
        recommended
      />
      <InputGroup
        type='text'
        id='location'
        labelText='Location'
        placeholder='City, State'
        value={location}
        onChange={onChange}
        data-key='location'
        recommended
      />
    </form>
  )
}
export default PersonalDetails
