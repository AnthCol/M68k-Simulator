import Microprocessor from "./Microprocessor.jsx"

class Interpreter {
    constructor() {
        this.currentLine = 0; 
        this.currentInstruction = "";
        this.userCode = "";
        this.processor = new Microprocessor();
    }
    
    interpret(code) {
        userCode = code;        
    }
}

export default Interpreter;

