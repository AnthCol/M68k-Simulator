import {useState, useEffect} from "react"
import File from "../../classes/File"
import "./FileList.css"
import ServerInformation from "../../classes/ServerInformation"

const FileList = ({syncFileChange}) => 
{
    const [fileData, setFileData] = useState([]);
        
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
    }, []);

    function fileChange(file) {
        syncFileChange(file);
    } 

    return (
        <>
            <div className="fileList">
                {fileData.map((file, index) => (
                    <button 
                        key={index} 
                        className="file" 
                        onClick={() => fileChange(file)}>     
                    {file.name}
                    </button>
                    
                ))}
            </div> 
        </>
    );
}

export default FileList;
