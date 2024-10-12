function RunButton({selectedFile, setConsoleOutput}) { 

    function runInterpreter(){ 
        let result = selectedFile.getContent(); 
        setConsoleOutput(result);
    }

    return <button onClick={runInterpreter}>Run</button>
}

export default RunButton;
