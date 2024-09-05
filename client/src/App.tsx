import { useState } from 'react'
import CodeMirror from "@uiw/react-codemirror" 
import { vscodeDark } from "@uiw/codemirror-theme-vscode"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Swag</h1>
      <div>
        <button>new</button>
        <button>save</button>
        <button>delete</button>
        <CodeMirror value={"swag"} height="500px" theme={vscodeDark} />;
      </div>
      {/* <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div> */}
    </>
  )
}

export default App
