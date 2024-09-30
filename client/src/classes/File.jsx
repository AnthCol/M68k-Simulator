
class File {
    constructor(name, content) {
        if (typeof name === "string" && typeof content == "string") {
            this.name = name;
            this.content = content;
        } else {
            this.name = "Unnamed"
            this.content = "";
        }
    }    
}

export default File;
