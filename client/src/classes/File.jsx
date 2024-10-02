const defaultProgram = "    ORG     $1000\n\nSTART:\n\n    SIMHALT\n\n    END     START";

class File {
    constructor(name, content) {
        if (typeof name === "string" && typeof content == "string") {
            this.name = name;
            this.content = content;
        } else {
            this.name = "unsaved"
            this.content = defaultProgram;
        }
    }    
}

export default File;
