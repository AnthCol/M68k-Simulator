import {useState, forwardRef, useImperativeHandle} from "react";
import ace from "ace-builds/src-noconflict/ace";
import AceEditor from "react-ace";
import "./Editor.css";

ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");


const Editor = ({syncAppCode}) => {
    
    const codeChange = (newCode) => {
        syncAppCode(newCode);
    } 

    const defaultProgram = "    ORG     $1000\n\nSTART:\n\n    SIMHALT\n\n    END     START";
 
    return (
        <div className="editor">
            <AceEditor
                onChange={codeChange}
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
