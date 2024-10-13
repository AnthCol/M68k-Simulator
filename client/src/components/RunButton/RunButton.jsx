import Interpreter from "../../classes/Interpreter.jsx";

function RunButton({selectedFile, setConsoleOutput}) { 

    function runInterpreter() { 
        let interpreter = new Interpreter(); 
        let code = selectedFile.getContent();
        let result = interpreter.interpret(code);
        setConsoleOutput(result);
    }

    return <button onClick={runInterpreter}>Run</button>
}

export default RunButton;
