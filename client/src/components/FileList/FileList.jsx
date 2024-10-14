import {useEffect} from "react"
import File from "../../classes/File"
import PathInformation from "../../classes/PathInformation"
import ServerInformation from "../../classes/ServerInformation"
import "./FileList.css"


const FileList = ({listOfFiles, setListOfFiles, selectedFileIndex, setSelectedFileIndex}) => 
{ 
    useEffect(() => {
        async function getFiles() {
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


    function fileChange(index) {
        setSelectedFileIndex(index); 
    } 

    function determineFileButtonClassName(index) {
        return (index === selectedFileIndex) ? "selectedFile" : "unselectedFile"; 
    }

    return (
        <>
            <div className="fileList">
                {listOfFiles.map((file, index) => (
                    <button 
                        key={index} 
                        className={determineFileButtonClassName(index)}
                        onClick={() => fileChange(index)}>     
                    {file.getName()}
                    </button>
                    
                ))}
            </div> 
        </>
    );
}

export default FileList;
