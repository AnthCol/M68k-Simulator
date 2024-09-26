import React, { useEffect, useRef } from "react"
import { basicSetup, EditorView } from "codemirror"
import { EditorState, Compartment } from "@codemirror/state"
import "./Editor.css"
// import { oneDark } from  "@codemirror/theme-one-dark"
// https://lezer.codemirror.net/
// parsing for lang ^ 

function Editor({editorViewReference}) 
{
    const editorReference = useRef(null);

    const change = () => {
        if (viewReference.current) {
            const doc = viewReference.current.state.doc;
            console.log("printing information " + doc)
        }
        return "EMPTY\n"; 
    };

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

        editorViewReference.current = view;

        return () => {
            view.destroy();
        };

    }, [editorViewReference]);
    
    return (
        <div ref={editorReference}/>
    );
}

export default Editor;
