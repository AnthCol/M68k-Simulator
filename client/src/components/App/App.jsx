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
    const [userAccount, setUserAccount] = useState(new UserAccount());
    const [currentFile, setCurrentFile] = useState(new File([undefined], [undefined]));
    const [allFiles, setAllFiles] = useState([]);

    // The file list takes this, and updates the current file on button press. 
    // Now need to send information to the editor, to update it's value. 
    // Temp file content for now, would need to grab from the database. 
    const userChangedFile = (file) => {
        console.log("&&& user changed file: ");
        console.log("Name: " + file.name + "\n" + "Content: " + file.content + "\n");
        setCurrentFile(file);
    }

    const userChangedCode = (code) => {
        console.log("USE CHANGED CODE!!\n"); 
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
