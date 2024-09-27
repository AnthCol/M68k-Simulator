import { useState, useRef } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Editor from "../Editor/Editor.jsx"
import Header from "../Header/Header.jsx"
import Buttons from "../Buttons/Buttons.jsx"
import Console from "../Console/Console.jsx"

import "./App.css"


function App() 
{ 
    const [userCode, setUserCode] = useState(""); 

    const updateParentCode = (code) => {
        setUserCode(code);
    }

    const printCode = () => {
        console.log(userCode);
    }


    return (
        <>
            <BrowserRouter>
                <Header/>
                <Buttons/>
                <button onClick={printCode}> print</button>
                <br/>
                <br/>
                <br/>
                {/* <div className="editorConsoleContainer">
                    <div className="editor"> */}
                        <Editor syncParentCode={updateParentCode}/>
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
