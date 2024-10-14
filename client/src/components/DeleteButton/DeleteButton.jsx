import PathInformation from "../../classes/PathInformation.jsx";
import ServerInformation from "../../classes/ServerInformation.jsx";

function DeleteButton({listOfFiles, setListOfFiles, selectedFileIndex, setSelectedFileIndex}) {

    const deleteFileFromDatabase = async (fileName) => {
        try {
            const response = await fetch(ServerInformation.location + PathInformation.deleteFilePath + "/" + fileName, {
                method: "DELETE",
            });

            if (!response.ok) {
                throw new Error("Network response for " + PathInformation.deleteFilePath + "/" + fileName + " was not ok.");
            }
        } catch (error) {
            console.error(error.message);
        } 
    }


    function deleteFile() {
        // FIXME for now, we won't let people delete a file if they only have 
        // a singular one. This isn't a great implementation, but fine for the 
        // first "release". 
        if (listOfFiles.length == 1) {
            alert("You must have at least one file saved at all times."); 
            return;
        }

        let selectedFile = listOfFiles[selectedFileIndex];
        let fileName = selectedFile.getName(); 

        deleteFileFromDatabase(fileName);

        let deletedFileIndex = listOfFiles.findIndex(file => file.getName() === fileName);
        setSelectedFileIndex((deletedFileIndex === 0) ? 1 : deletedFileIndex - 1);
        
        let listWithFileRemoved = listOfFiles.filter(file => file.getName() !== fileName); 
        setListOfFiles(listWithFileRemoved);
    }


    return <button onClick={deleteFile}>Delete</button>
}

export default DeleteButton
