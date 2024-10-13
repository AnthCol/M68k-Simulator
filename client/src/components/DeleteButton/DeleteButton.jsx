import PathInformation from "../../classes/PathInformation.jsx";
import ServerInformation from "../../classes/ServerInformation.jsx";

function DeleteButton({listOfFiles, setListOfFiles, selectedFile, setSelectedFile}) {

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

        let fileName = selectedFile.getName(); 

        deleteFileFromDatabase(fileName);

        // The selected file has been deleted at this point, so we must update
        // our selection (to the file above it).
        let deletedFileIndex = listOfFiles.findIndex(file => file.getName() === fileName);
        setSelectedFile((deletedFileIndex === 0) ? listOfFiles[1] : listOfFiles[deletedFileIndex - 1]);
        
        // Remove file from the list of files
        let listWithFileRemoved = listOfFiles.filter(file => file.getName() !== fileName); 
        setListOfFiles(listWithFileRemoved);
    }



    return <button onClick={deleteFile}>Delete</button>
}

export default DeleteButton
