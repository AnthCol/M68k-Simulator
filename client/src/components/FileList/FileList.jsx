import {useState} from "react"
import File from "../../classes/File"
import "./FileList.css"

const FileList = ({syncFileChange}) => 
{
    const testData = [
        new File("first.x68", "Sample Content"), 
        new File("second.x68", "Sample Content 2"),
        new File("third.x68", "Sample Content 3"), 
    ]

    const [fileData, setFileData] = useState(testData);
        
    
    // From here we must retrieve from database all of the files 
    // For now using fake data. 
    // const getFiles = () => {
    //     const list = [];
    //     setFileData(list);
    // }

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
