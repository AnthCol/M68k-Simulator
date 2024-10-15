import Interpreter from "../../classes/Interpreter.jsx"

function RunButton({listOfFiles, selectedFileIndex, setConsoleOutput}) { 

    function runInterpreter() {
        let selectedFile = listOfFiles[selectedFileIndex];
        let interpreter = new Interpreter();
        let result = interpreter.interpret(selectedFile.getContent());
        setConsoleOutput(result);
    }

    return <button onClick={runInterpreter}>Run</button>
}

export default RunButton;
