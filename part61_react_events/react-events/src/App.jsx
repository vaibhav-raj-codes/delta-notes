import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  function doSomething(event) {
    console.log(event);
  }
  return (
    <>
      <button onClick={doSomething}>click me</button>
    </>
  )
}

export default App
