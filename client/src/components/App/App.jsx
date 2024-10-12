import { useState }             from "react"

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
    const [selectedFile, setSelectedFile] = useState(new File("", ""))
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
                setSelectedFile={setSelectedFile}
            />

            <DeleteButton

            />

            <RunButton 
                selectedFile={selectedFile}                    
                setConsoleOutput={setConsoleOutput}
            />

            <br/>
            <br/>

            <div className="fileListEditorConsoleContainer">

                <FileList 
                    listOfFiles={listOfFiles} 
                    setListOfFiles={setListOfFiles} 
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                />

                <Editor 
                    selectedFile={selectedFile}
                />

                <Console 
                    consoleOutput={consoleOutput}
                />

            </div>
        </>
    );
}

export default App;
