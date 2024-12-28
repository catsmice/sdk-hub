import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {NextUIProvider} from "@nextui-org/react";
import {Button} from "@nextui-org/button";

function App() {
  const [count, setCount] = useState(0)

  return (
    <NextUIProvider>
    <>
      <div className="flex justify-center">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React Now</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
        <h1 className="text-3xl font-bold underline text-blue-600">
      Hello world!
    </h1>
    <Button>Press me</Button>

      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
     
    </>
    </NextUIProvider>

  )
}

export default App
