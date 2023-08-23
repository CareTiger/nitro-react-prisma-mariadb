import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <div>
            <h1>Hello Vite + React!</h1>
            { count }
            <button onClick={() => setCount((count) => count + 1)}>count up</button>
        </div>
    </>
  )
}

export default App
