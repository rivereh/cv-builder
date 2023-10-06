import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
// import Greeting from './Greeting.jsx'
// import SecondGreeting from './SecondGreeting.jsx'
// import { Greeting2, Greeting3 as ThirdGreeting } from './SecondGreeting.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    {/* <Greeting />
    <SecondGreeting />
    <Greeting2 />
    <ThirdGreeting /> */}
  </React.StrictMode>
)
