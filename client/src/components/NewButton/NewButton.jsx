import {useRef, useState, useEffect} from "react";
import File from "../../classes/File.jsx";
import PathInformation from "../../classes/PathInformation.jsx";
import ServerInformation from "../../classes/ServerInformation.jsx";
import "../../reusable/reusable.css";

function NewButton({listOfFiles, setListOfFiles, setSelectedFile}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [newFileName, setNewFileName] = useState("");
    const dialogReference = useRef(null);

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

    useEffect(() => {
        if (dialogReference.current != null) {
            if (isModalOpen) {
                dialogReference.current.showModal();
            } else {
                dialogReference.current.close();
            }
        }
    }, [isModalOpen])


    function openCreateFileDialog() {
        setIsModalOpen(true)
    }

    function closeCreateFileDialog() {
        setIsModalOpen(false);
    }

    function nameExistsInList(name) {
        return listOfFiles.some(file => file.getName() === name);
    } 

    const submitFileName = e => {
        // necessary so that we can allow users to 
        // either click or press enter. 
        let extension = ".x68";
        let name = newFileName.trim();

        if (name.length == 0) {
            alert("Length of filename must be more than zero.");
            return;
        }     

        name += extension;
        if (nameExistsInList(name)) {
            alert("You already have a file with this name, select another.");
            return;
        }

        let file = new File(name, "");

        addFileToDatabase(file);
        setListOfFiles(listOfFiles.concat([file]));
        setSelectedFile(listOfFiles[listOfFiles.length - 1]);
        setNewFileName("");
        closeCreateFileDialog();
    }

    const handleKeyPress = e => {
        if (e.key === "Enter") {
            submitFileName();
        }
    }

    return (
        <>
            <button onClick={openCreateFileDialog}>New</button>
            {isModalOpen && (
                <dialog className="dialog" ref={dialogReference}>
                    <button onClick={closeCreateFileDialog}>Cancel</button>
                    <p>Enter a name for the new file: </p>
                    <input
                        type="text"
                        value={newFileName}
                        onChange={(e) => setNewFileName(e.target.value)}
                        onKeyDown={handleKeyPress}
                    />{" "}.x68
                    <br/>
                    <br/>
                    <button onClick={submitFileName}>Submit</button> 
                </dialog>
            )}
        </>
    );
}

export default NewButton;
