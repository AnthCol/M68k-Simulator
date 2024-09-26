import { useState } from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Editor from "./components/Editor"
import Header from "./components/Header"
import "./App.css"

function App() 
{
  return (
    <>
        <BrowserRouter>
            <Header/>
            <button>New</button>
            <button>Save</button>
            <button>Delet</button>
            <Editor/>
        </BrowserRouter>
    </>
  )
}

export default App
