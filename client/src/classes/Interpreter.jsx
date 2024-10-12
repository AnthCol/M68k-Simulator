import Microprocessor from "./Microprocessor.jsx"

class Interpreter {
    constructor() {
        this.currentLine = 0; 
        this.currentInstruction = "";
        this.userCode = "";
        this.processor = new Microprocessor();
    }

    tokenize() {
        // let tokenizer = new Tokenizer();
        // tokenizer.run();
    }

    parse() {

    }

    simulate() {

    }


    // returns final result  
    interpret(code) {
        // let tokens = tokenize(); 
        // let validation = parse(tokens);
        // if (validation != "") {
        //     return validation;
        // }
        // let simulationOutput = simulate(tokens);        

        this.userCode = code;        
        return this.userCode;
    }
}

export default Interpreter;

