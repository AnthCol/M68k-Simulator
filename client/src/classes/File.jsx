const defaultProgram = "    ORG     $1000\n\nSTART:\n\n    SIMHALT\n\n    END     START";
const defaultName = "Placeholder";

class File {
    #name;
    #content;

    constructor(name, content) {
        if (typeof name === "string" && typeof content == "string") {
            this.#name = (name.length > 0) ? name : defaultName;
            this.#content = (content.length > 0) ? content : defaultProgram;
        } else {
            this.#name = defaultName;
            this.#content = defaultProgram;
        }
    }    

    getName() {
        return this.#name;
    }

    getContent() {
        return this.#content;
    }

    setContent(code) {
        this.#content = code;
    }
}

export default File;
