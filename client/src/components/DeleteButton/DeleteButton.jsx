import {useRef, useState, useEffect} from "react";
import PathInformation from "../../classes/PathInformation.jsx";
import ServerInformation from "../../classes/ServerInformation.jsx";
import "../../reusable/reusable.css";


function DeleteButton({listOfFiles, setListOfFiles, selectedFileIndex, setSelectedFileIndex}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const dialogReference = useRef(null);

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


    useEffect(() => {
        if (dialogReference.current != null) {
            if (isModalOpen) {
                dialogReference.current.showModal();
            } else {
                dialogReference.current.close();
            }
        }
    }, [isModalOpen])

    function deleteFile() {
        if (listOfFiles.length == 1) {
            alert("You must have at least one file saved at all times."); 
            closeDeleteFileDialog();
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

    function openDeleteFileDialog() {
        setIsModalOpen(true);
    }

    function closeDeleteFileDialog() {
        setIsModalOpen(false);
    }


    return (
        <>
            <button onClick={openDeleteFileDialog}>Delete</button>
            {isModalOpen && ( 
                <dialog className="dialog dialogDeleteFile" ref={dialogReference}>
                    <p>Are you sure you want to delete this file?</p>
                    <br/>
                    <button onClick={closeDeleteFileDialog}>No</button>
                    {"                "}
                    <button onClick={deleteFile}>Yes</button>
                </dialog>
            )}
        </>
    );
}

export default DeleteButton
