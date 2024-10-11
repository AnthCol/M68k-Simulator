import { useState, useEffect } from "react";
import ace from "ace-builds/src-noconflict/ace";
import AceEditor from "react-ace";
import "./Editor.css";

ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");

const Editor = ({syncCodeChange, currentFile}) => {
    
    const [file, setFile] = useState(new File([undefined], [undefined]));
    
    useEffect(() => {
        if (currentFile) {
            setFile(currentFile);
        }
    }, [currentFile]);

    const codeChange = (newCode) => {
        syncCodeChange(newCode);
    } 
    
    const defaultProgram = "";

    return (
        <div className="editor">
            <AceEditor
                onChange={codeChange}
                value={file.content}
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
