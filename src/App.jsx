import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {Calculator} from './Components/Calculator'

function App() {
  const [cal, setCal] = useState('')

  const [theme, setTheme] = useState(1)
  
  const handleNum = (e) => {
    setCal((prev) => prev + e.target.innerText)
  }

  const handleDelete = () => {
    setCal((prev) => prev.slice(0,-1))
  }
 
  const handleSum = () => {
    setCal((prev) => prev + "+")
  }

  const handleDivide = () => {
    setCal((prev) => prev + "/")
  }

  const handleMultiply = () => {
    setCal((prev) => prev + "*" )
  }

  const handleMinus = () => {
    setCal((prev) => prev + "-")
  }

  const handleReset = () => {
    setCal('')
  }

  const handleResult = () => {
    try {
      setCal((prev) => String(eval(prev)))
      
    } catch (error) {
      setCal('Error')
      
    }
    

  }

  

  return (
    <div>
      <Calculator
      onClickNum={handleNum}
      onClickDel={handleDelete}
      onClickSum={handleSum}
      onClickMinus={handleMinus}
      onClickMultiply={handleMultiply}
      onClickDivide={handleDivide}
      onClickReset={handleReset}
      onClickResult={handleResult}
      displayResult={cal}
      />
    </div>
  )
}

export default App
