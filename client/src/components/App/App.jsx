import { useState, useRef } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Editor from "../Editor/Editor.jsx"
import Header from "../Header/Header.jsx"
import Buttons from "../Buttons/Buttons.jsx"
import Console from "../Console/Console.jsx"

import "./App.css"


function App() 
{ 
    const userCodeReference = useRef(null); 

    const buttonfunc = () => {
        if (userCodeReference.current) {
            let content = userCodeReference.current.getCode();
            console.log(content);
        }
    }

    return (
        <>
            <BrowserRouter>
                <Header/>
                <button onClick={buttonfunc}>press me</button>
                <Buttons/>
                <br/>
                <br/>
                <br/>
                {/* <div className="editorConsoleContainer">
                    <div className="editor"> */}
                        <Editor ref={userCodeReference}/>
                    {/* </div>
                    <div className="console">
                        <Console/>
                    </div>
                </div> */}
            </BrowserRouter>
        </>
    );
}

export default App;
