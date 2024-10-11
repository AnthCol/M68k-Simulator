import { useState } from "react"
import { BrowserRouter, Route } from "react-router-dom"

import Editor from "../Editor/Editor.jsx"
import Header from "../Header/Header.jsx"
import Console from "../Console/Console.jsx"
import FileList from "../FileList/FileList.jsx"
import NewButton from "../NewButton/NewButton.jsx"
import SaveButton from "../SaveButton/SaveButton.jsx"
import DeleteButton from "../DeleteButton/DeleteButton.jsx"
import RunButton from "../RunButton/RunButton.jsx"

import File from "../../classes/File.jsx"
import Interpreter from "../../classes/Interpreter.jsx"


import "./App.css"


function App() 
{ 
    const [currentFile, setCurrentFile] = useState(new File("", ""));
    const [consoleData, setConsoleData] = useState(""); 

    // Will be called when the user presses one of the file buttons 
    // in the FileList. The Editor takes the currentFile and has a 
    // useEffect, so it's content will be updated when this happens 
    // as well. 
    const userChangedFile = (file) => {
        setCurrentFile(file);
    }

    const userChangedCode = (code) => {
        const name = currentFile.getName();
        const file = new File(name, code);
        setCurrentFile(file);
    }

    // new adds to the list
    const newFileCreated = () => {
        return;
    }

    // save saves to the list. 
    const saveCurrentFile = () => {
        return;
    }

    // deletes current file
    const deleteCurrentFile = () => {
        return;
    }

    // run current file
    const runInterpreterOnCurrentFile = () => {
        let interpreter = new Interpreter(); 
        let result = interpreter.interpret(currentFile.getContent());
        setConsoleData(result);
    }


    return (
        <>
            <BrowserRouter> 
                <Header/>
                <NewButton/>
                <SaveButton/>
                <DeleteButton/>
                <RunButton runInterpreter={runInterpreterOnCurrentFile}/>
                <br/>
                <br/>
                <div className="fileListEditorConsoleContainer">
                    <FileList syncFileChange={userChangedFile}/>
                    <Editor syncCodeChange={userChangedCode} currentFile={currentFile}/>
                    <Console consoleData={consoleData}/>
                </div>
            </BrowserRouter>
        </>
    );
}

export default App;
