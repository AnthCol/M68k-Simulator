import {useEffect} from "react"
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

    useEffect(() => {
        // Cannot select file if there are not files to select from
        if (listOfFiles.length == 0) {
            return;
        }

        let found = false;
        for (let i = 0; i < listOfFiles.length; i++) {
            if (listOfFiles[i].getName() == selectedFile.getName()) {
                fileChange(listOfFiles[i]);
                found = true;
            }
        }
        
        // If the user has not selected a file (program startup)
        // select the first one by default
        if (!found) {
            fileChange(listOfFiles[0]);
        }
    }, [listOfFiles])

    function fileChange(file) {
        setSelectedFile(file); 
    } 

    function determineFileButtonClassName(fileInList) {
        return (fileInList === selectedFile) ? "selectedFile" : "unselectedFile"; 
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
