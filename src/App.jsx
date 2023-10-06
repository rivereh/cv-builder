import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TodoList from './TodoList'
import MonthList from './MonthList'
import Gallery from './Gallery'
import Form from './Form'
import { defaultUser } from './defaultUser'

// function ListItem(props) {
//   return <li>{props.animal}</li>
// }

// function List(props) {
//   if (!props.animals) {
//     return <div>Loading...</div>
//   }

//   if (props.animals.length === 0) {
//     return <div>There are no animals in the list!</div>
//   }

//   return (
//     <ul>
//       {props.animals.map((animal) => {
//         // return <ListItem key={animal} animal={animal} />
//         // return animal.startsWith('L') ? <li key={animal}>{animal}</li> : null
//         // return animal.startsWith('L') && <li key={animal}>{animal}</li>
//         return <li key={animal}>{animal}</li>
//       })}
//     </ul>
//   )
// }

{
  /* <div> */
}
// <h1>Animals</h1>
{
  /* <ul> */
}
{
  /* {animals.map((animal) => {
      return <li key={animal}>{animal}</li>
    })} */
}
{
  /* {animalsList} */
}
{
  /* </ul> */
}
{
  /* <List animals={animals} /> */
}
{
  /* </div> */
}

function Button({
  text = 'Select',
  color = 'Blue',
  fontSize = 12,
  handleClick
}) {
  const buttonStyle = {
    color: color,
    fontSize: fontSize + 'px'
  }

  return (
    <button
      onClick={() => handleClick('https://www.google.com')}
      style={buttonStyle}
    >
      {text}
    </button>
  )
}

function App() {
  // const animals = ['Lion', 'Cow', 'Snake', 'Lizard']
  // const animalsList = animals.map((animal) => <li key={animal}>{animal}</li>)

  // const handleButtonClick = (url) => {
  //   window.location.href = url
  // }

  // return <TodoList />

  const [firstName, setFirstName] = useState(defaultUser.firstName)
  const [lastName, setLastName] = useState(defaultUser.lastName)
  const [email, setEmail] = useState(defaultUser.email)
  const [mobile, setMobile] = useState(defaultUser.mobile)
  const [location, setLocation] = useState(defaultUser.email)

  function handleFirstNameChange(e) {
    setFirstName(e.target.value)
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value)
  }

  function handleReset() {
    setFirstName('')
    setLastName('')
  }

  return (
    <>
      {/* <MonthList />
      <Button text='Click me' color='blue' fontSize={20} />
      <Button text="Don't click me" color='red' fontSize={10} />
      <Button handleClick={handleButtonClick} /> */}

      {/* <Gallery /> */}
      {/* <Form /> */}

      <div className='resume'>
        <div className='resume-header'>
          <h1>
            {firstName} {lastName}
          </h1>
        </div>
      </div>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          placeholder='FirstName'
          value={firstName}
          onChange={handleFirstNameChange}
        />
        <input
          placeholder='Last name'
          value={lastName}
          onChange={handleLastNameChange}
        />
        <h1>
          Hello, {firstName} {lastName}
        </h1>
        <button onClick={handleReset}>Reset</button>
      </form>
    </>
  )
}

export default App
