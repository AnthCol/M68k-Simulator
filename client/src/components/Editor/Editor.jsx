import ace from "ace-builds/src-noconflict/ace";
import AceEditor from "react-ace";
import File from "../../classes/File.jsx";
import "./Editor.css";

ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");

const Editor = ({selectedFile, setSelectedFile}) => {  
    const codeChange = (newCode) => { 

        // FIXME future change, we need to make sure everythign is 
        // accesing the same reference. We need to just access the file 
        // in the array with an index, rather than having a "selectedFile"
        // variable since we may desync the reference to the file in the 
        // list. 
        // let file = new File(selectedFile.getName(), newCode);
        // setSelectedFile(file);

        selectedFile.setContent(newCode);

        // FIXME send request to the server to
        // update the file content in the database. 
        // implementing autosave with a timer?
        // check last changed time for file, if it 
        // has been over 10 seconds save it?
        // something like that 
    } 
    
    const defaultProgram = "";

    return (
        <div className="editor">
            <AceEditor
                onChange={codeChange}
                value={selectedFile.getContent()}
                defaultValue={defaultProgram}
                fontSize={14}
                lineHeight={19}
                showGutter={true}
                highlightActiveLine={true}
                shotPrintMargin={true} 
                width={"100%"}
                height={"100%"}
            />
        </div>
    );
}

export default Editor;
