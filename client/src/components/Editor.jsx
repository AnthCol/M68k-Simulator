import React, { useEffect, useRef } from "react"
import { basicSetup, EditorView } from "codemirror"
import { EditorState, Compartment } from "@codemirror/state"
import { javascript } from "@codemirror/lang-javascript"
import "./Editor.css"
// import { oneDark } from  "@codemirror/theme-one-dark"
// https://lezer.codemirror.net/
// parsing for lang ^ 

function Editor() 
{
    const editorReference = useRef(null)

    useEffect(() => {
        const state = EditorState.create({
            extensions: [
                basicSetup,
            ],
        });
        
        const view = new EditorView({
            state: state,
            parent: editorReference.current,
        }); 

        
        return () => {
            view.destroy(); 
        };

    }, []);
    
    return <div ref={editorReference} />
}

export default Editor
