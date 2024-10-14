import {useEffect, useState} from "react"

import Editor       from "../Editor/Editor.jsx"
import Header       from "../Header/Header.jsx"
import Console      from "../Console/Console.jsx"
import FileList     from "../FileList/FileList.jsx"
import NewButton    from "../NewButton/NewButton.jsx"
import RunButton    from "../RunButton/RunButton.jsx"
import DeleteButton from "../DeleteButton/DeleteButton.jsx"

import File from "../../classes/File.jsx"

import "./App.css"


function App() 
{ 
    const [selectedFileIndex, setSelectedFileIndex] = useState(0);
    const [consoleOutput, setConsoleOutput] = useState(""); 
    const [listOfFiles, setListOfFiles] = useState([]);

    // FIXME features to be implemented in the future. 
    // const [standardInput, setStandardInput] = useState(""); 
    // const [breakPoints, setBreakPoints] = useState([]);

    return (
        <>
            <Header/>

            <NewButton
                listOfFiles={listOfFiles} 
                setListOfFiles={setListOfFiles}
                setSelectedFileIndex={setSelectedFileIndex}
            />

            <DeleteButton
                listOfFiles={listOfFiles}
                setListOfFiles={setListOfFiles}
                selectedFileIndex={selectedFileIndex}
                setSelectedFileIndex={setSelectedFileIndex}
            />

            <RunButton 
                listOfFiles={listOfFiles}
                selectedFileIndex={selectedFileIndex}
                setConsoleOutput={setConsoleOutput}
            />

            <br/>
            <br/>

            <div className="fileListEditorConsoleContainer">

                <FileList 
                    listOfFiles={listOfFiles} 
                    setListOfFiles={setListOfFiles} 
                    selectedFileIndex={selectedFileIndex}
                    setSelectedFileIndex={setSelectedFileIndex}
                />

                <Editor 
                    listOfFiles={listOfFiles}
                    selectedFileIndex={selectedFileIndex}
                />

                <Console 
                    consoleOutput={consoleOutput}
                />

            </div>
        </>
    );
}

export default App;
