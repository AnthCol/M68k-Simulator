import { useState } from "react"
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
    const [userAccount, setUserAccount] = useState(new UserAccount());
    const [currentFile, setCurrentFile] = useState(new File([undefined], [undefined]));

    // Will be called when the user presses one of the file buttons 
    // in the FileList. The Editor takes the currentFile and has a 
    // useEffect, so it's content will be updated when this happens 
    // as well. 
    const userChangedFile = (file) => {
        setCurrentFile(file);
    }

    const userChangedCode = (code) => {
        currentFile.content = code;
    }

    return (
        <>
            <BrowserRouter>
                <Header/>
                <Buttons/>
                <br/>
                <br/>
                <div className="fileListEditorConsoleContainer">
                    <FileList syncFileChange={userChangedFile}/>
                    <Editor syncCodeChange={userChangedCode} currentFile={currentFile}/>
                    <Console/>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
