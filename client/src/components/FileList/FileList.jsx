import {useState, useEffect} from "react"
import File from "../../classes/File"
import "./FileList.css"

function convertJSONToFileObject(json) {
    let list = [];
    console.log("$$$$$$ printing in convert JSON\n");
    console.log(JSON.stringify(json));
    console.log("$$$$$$$ done printing in convert JSON\n");
    return list;
}



const FileList = ({syncFileChange}) => 
{
    const [fileData, setFileData] = useState([]);
        
    // Retrieve file data from the database on first render. 
    useEffect(() => {
        let json = [];
        let data = convertJSONToFileObject(json);
        setFileData(data);
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
