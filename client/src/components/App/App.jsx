import { useState, useRef } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Editor from "../Editor/Editor.jsx"
import Header from "../Header/Header.jsx"
import Buttons from "../Buttons/Buttons.jsx"
import Console from "../Console/Console.jsx"

import "./App.css"


function App() 
{
    const editorViewReference = useRef(null); 

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Buttons/>
                <div className="editorConsoleContainer">
                    <Editor editorViewReference={editorViewReference}/>
                    <Console/>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
