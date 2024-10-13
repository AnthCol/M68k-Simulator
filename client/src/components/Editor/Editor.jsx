import ace from "ace-builds/src-noconflict/ace";
import AceEditor from "react-ace";
import "./Editor.css";

ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");

const Editor = ({selectedFile}) => {  
    const codeChange = (newCode) => { 
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
