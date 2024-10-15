import Tokenizer from "./Tokenizer.jsx";
import Microprocessor from "./Microprocessor.jsx";

class Interpreter {
    constructor() {
        this.processor = new Microprocessor();
        this.tokenizer = new Tokenizer();
    } 

    interpret(code) {
        this.userCode = code;
        let tokenList = this.tokenizer.tokenize(code);
        console.log(JSON.stringify(tokenList));
        return code;
    }
}

export default Interpreter;
