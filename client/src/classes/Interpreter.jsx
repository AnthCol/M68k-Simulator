import Microprocessor from "./Microprocessor.jsx"

class Interpreter {
    constructor() {
        this.currentLine = 0; 
        this.currentInstruction = "";
        this.userCode = "";
        this.processor = new Microprocessor();
    }
    // returns final result  
    interpret(code) {
        this.userCode = code;        
        return this.userCode;
    }
}

export default Interpreter;

