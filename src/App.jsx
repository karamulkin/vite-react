import { useState } from 'react'
import pizza from "./pizza.jpeg"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://lookool.ee" target="_blank">
          <img 
          src={pizza} 
          className="pizza" 
          alt="pizza"
          style={{ maxWidth: 400, width: 300}}
          />
        </a>
      </div>
      <h1>Some pizza</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          counter {count}
        </button>
      </div>
      <p className="read-the-docs">
        How did you like the pizza?
      </p>
    </>
  )
}

export default App
