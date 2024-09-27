import {useState, forwardRef, useImperativeHandle} from "react";
import ace from "ace-builds/src-noconflict/ace";
import AceEditor from "react-ace";
import "./Editor.css";

ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");


const Editor = forwardRef((props, ref) => {
    const [userCode, setUserCode] = useState("");
    const codeChange = (newCode) => {
        setUserCode(newCode);
    }

    const defaultProgram = "ORG     $1000\n\nSTART:\n\n    SIMHALT\n\n    END     START";

    
    useImperativeHandle(ref, () => ({
        getCode: () => userCode
    }));
    
    return (
        <AceEditor
            onChange={codeChange}
            defaultValue={defaultProgram}
            fontSize={14}
            lineHeight={19}
            showGutter={true}
            highlightActiveLine={true}
            shotPrintMargin={true} 
        />
    );
});

export default Editor;
