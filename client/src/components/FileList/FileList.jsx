import {useState, useEffect} from "react"
import File from "../../classes/File"
import ServerInformation from "../../classes/ServerInformation"
import PathInformation from "../../classes/PathInformation"

import "./FileList.css"


const FileList = ({syncFileChange}) => 
{
    const [fileData, setFileData] = useState([]);
    const [selectedFile, setSelectedFile] = useState(new File("", "")); 
    
    useEffect(() => {
        const getFiles = async () => {
            try {
                const response = await fetch(ServerInformation.location + PathInformation.getFilesPath);
                if (!response.ok) {
                    throw new Error("Network response for " + PathInformation.getFilesPath + " was not ok.");
                }
                const data = await response.json();
                setFileData(data); 
            } catch (error) {
                console.error(error.message);
            }
        }

        getFiles();   
    }, []);

    // When server loads, select the first file
    useEffect(() => {
        if (fileData.length != 0) {
            fileChange(fileData[0]); 
        }
    }, [fileData])

    function fileChange(file) {
        syncFileChange(file);
        setSelectedFile(file);
    } 

    function determineFileButtonClassName(fileInList) {
        let result = "unselectedFile";        
        if (fileInList == selectedFile) {
            result = "selectedFile";
        }
        return result;
    }

    return (
        <>
            <div className="fileList">
                {fileData.map((file, index) => (
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
