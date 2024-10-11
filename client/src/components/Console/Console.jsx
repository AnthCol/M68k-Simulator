import ace from "ace-builds/src-noconflict/ace";
import AceEditor from "react-ace";
import "./Console.css"

ace.config.set("basePath", "/node_modules/ace-builds/src-noconflict");

function Console({consoleData})
{
    let readOnly = true;

    return (
        <>
            <div className="console">
                <AceEditor
                    readOnly={readOnly}
                    value={consoleData}
                    height={"100%"} 
                    width={"100%"}
                    theme="github"
                    defaultValue={"> "}
                    showGutter={false}
                    fontSize={14}
                    lineHeight={19}
                    highlightActiveLine={false}
                    shotPrintMargin={true}
                />
            </div>
        </>
    );
}

export default Console;
