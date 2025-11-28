import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { languages } from "./assets/languages.js"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ul>
        <li><button>HTML</button></li>
        <li><button>CSS</button></li>
        <li><button>Javascript</button></li>
        <li><button>Node.js</button></li>
        <li><button>Express</button></li>
        <li><button>ReactJS</button></li>
      </ul>
    </>
  )
}

export default App
