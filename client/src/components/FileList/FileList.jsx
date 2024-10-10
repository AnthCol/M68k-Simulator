import {useState, useEffect} from "react"
import File from "../../classes/File"
import "./FileList.css"
import ServerInformation from "../../classes/ServerInformation"

const FileList = ({syncFileChange}) => 
{
    const [fileData, setFileData] = useState([]);
    const [selectedFile, setSelectedFile] = useState(new File([undefined], [undefined])); 
    

    // Retrieve file data from the database on first render. 
    useEffect(() => {
        const getFiles = async () => {
            try {
                const response = await fetch(ServerInformation.location + "/api/files/get");
                if (!response.ok) {
                    throw new Error("Network response for api/files/get was not ok.");
                }
                const data = await response.json();
                setFileData(data);
            } catch (error) {
                console.error(error.message);
            }
        }
        getFiles();
        
        // After getting all files, set the selected one to the first 
        // in the list.
        
        if (fileData.length != 0) {
            fileChange(fileData[0]);
        }

    }, []);

    function fileChange(file) {
        syncFileChange(file);
        setSelectedFile(file);
    } 


    function getFileButtonClassName(fileInList) {
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
                        className={getFileButtonClassName(file)}
                        onClick={() => fileChange(file)}>     
                    {file.name}
                    </button>
                    
                ))}
            </div> 
        </>
    );
}

export default FileList;
