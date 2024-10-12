import {useState, useEffect} from "react"
import File from "../../classes/File"
import PathInformation from "../../classes/PathInformation"
import ServerInformation from "../../classes/ServerInformation"
import "./FileList.css"


const FileList = ({listOfFiles, setListOfFiles, selectedFile, setSelectedFile}) => 
{ 
    useEffect(() => {
        const getFiles = async () => {
            try {
                const response = await fetch(ServerInformation.location + PathInformation.getFilesPath);
                if (!response.ok) {
                    throw new Error("Network response for " + PathInformation.getFilesPath + " was not ok.");
                }
                const data = await response.json();
                
                if (data.length == 0) {
                    const list = [new File("", "")];
                    setListOfFiles(list);
                } else {
                    const list = data.map(file => new File(file.name, file.content));
                    setListOfFiles(list);
                }

            } catch (error) {
                console.error(error.message);
            }
        }

        getFiles();   
    }, []);

    // When server loads, select the first file
    // FIXME, this might need to be changed in the future. 
    // what happens when we add to the list of files with a new file,
    // but then cannot 
    useEffect(() => {
        if (listOfFiles.length != 0) {
            fileChange(listOfFiles[0]); 
        }
    }, [listOfFiles])

    function fileChange(file) {
        setSelectedFile(file); 
    } 

    function determineFileButtonClassName(fileInList) {
        let result = "unselectedFile";        
        if (fileInList === selectedFile) {
            result = "selectedFile";
        }
        return result;
    }

    return (
        <>
            <div className="fileList">
                {listOfFiles.map((file, index) => (
                    <button 
                        key={index} 
                        className={determineFileButtonClassName(file)}
                        onClick={() => fileChange(file)}>     
                    {file.name}
                    </button>
                    
                ))}
            </div> 
        </>
    );
}

export default FileList;
