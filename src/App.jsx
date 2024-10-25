import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import TextEditor from './components/TextEditor'
import AdvancedTextEditor from './components/AdvancedTextEditor'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <TextEditor/>
     <AdvancedTextEditor/>
    </>
  )
}

export default App
