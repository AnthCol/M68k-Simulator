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

    // Will be called when the user presses one of the file buttons 
    // in the FileList. The Editor takes the currentFile and has a 
    // useEffect, so it's content will be updated when this happens 
    // as well. 
    const userChangedFile = (file) => {
        setCurrentFile(file);
    }

    const userChangedCode = (code) => {
        currentFile.setContent(code); 
    }

    // new adds to the lsit
    const newFileCreated = () => {

    }

    // save saves to the list. 
    const saveCurrentFile = () => {

    }

    // deletes current file
    const deleteCurrentFile = () => {

    }

    // run current file

    const runCurrentFile = () => {
        interpreter = new Interpreter(); 
        


        return result;
    }


    return (
        <>
            <BrowserRouter> 
                <Header/>
                <NewButton/>
                <SaveButton/>
                <DeleteButton/>
                <RunButton/>
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
