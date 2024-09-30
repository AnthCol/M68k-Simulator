import { useState, useRef } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Editor from "../Editor/Editor.jsx"
import Header from "../Header/Header.jsx"
import Buttons from "../Buttons/Buttons.jsx"
import Console from "../Console/Console.jsx"
import FileList from "../FileList/FileList.jsx"
import UserAccount from "../../classes/UserAccount.jsx"

import "./App.css"


function App() 
{ 
    const defaultProgram = "    ORG     $1000\n\nSTART:\n\n    SIMHALT\n\n    END     START";
    const [userCode, setUserCode] = useState(defaultProgram); 
    // const [userFile, setUserFile] = useState(new File()); 
    const [userAccount, setUserAccount] = useState(new UserAccount());

    const syncCode = (code) => {
        setUserCode(code);
    }

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Buttons/>
                <br/>
                <br/>
                <div className="fileListEditorConsoleContainer">
                    <FileList/>
                    <Editor syncAppCode={syncCode}/>
                    <Console/>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
