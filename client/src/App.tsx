import { useState } from 'react'
import Editor from './components/Editor'
import './App.css'

function App() 
{
  return (
    <>
        <h1>M68k-Simulator</h1>
        <div>
            <button>New</button>
            <button>Save</button>
            <button>Delete</button>
            <br/> 
        </div> 
        <Editor/>
    </>
  )
}

export default App
