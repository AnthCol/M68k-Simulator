import File from "../../classes/File.jsx";
import ServerInformation from "../../classes/ServerInformation.jsx";
import PathInformation from "../../classes/PathInformation.jsx";

function NewButton({listOfFiles, setListOfFiles, setSelectedFile}) {

    const addFileToDatabase = async (file) => {
        try {
            const response = await fetch(ServerInformation.location + PathInformation.newFilePath, {
                method: "POST",
                headers: {
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify({
                    name: file.getName(),
                    content: file.getContent()
                })
            });

            if (!response.ok) {
                throw new Error("Network response for " + PathInformation.newFilePath + " was not ok.");
            }
        } catch (error) {
            console.error(error.message);
        } 
    };

    function createNewFile() {
        // create popup
        // get name
        let name = "FileName";
        let file = new File(name, ""); 

        let newFileList = listOfFiles.concat([file]);
        setSelectedFile(newFileList[newFileList.length - 1]);
        setListOfFiles(newFileList);
        addFileToDatabase(file);
    } 

    return <button onClick={createNewFile}>New</button>
}

export default NewButton;
