import PathInformation from "../../classes/PathInformation";
import ServerInformation from "../../classes/ServerInformation";

function RunButton({listOfFiles, selectedFileIndex, setConsoleOutput}) { 

    async function runInterpreter() {
        try {
            let selectedFile = listOfFiles[selectedFileIndex];
            let fileContent = selectedFile.getContent();
            
            const response = await fetch (ServerInformation.location + PathInformation.interpretFilePath, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    content : fileContent
                })
            });

            if (!response.ok) {
                throw new Error("Network response for  " + PathInformation.interpretFilePath + " was not ok.");
            }
            const result = await response.json();
            setConsoleOutput(result);
        } catch (error) {
            console.error(error.message);
        }
    }

    return <button onClick={runInterpreter}>Run</button>
}

export default RunButton;
