import Token from "./Token.jsx";

const TokenType = {
    LABEL : 0,
    COMMA : 1,
    IDENTIFIER : 2,

}

class Tokenizer {
    #tokenList = [];
     
    tokenize(code) { 
        let lines = code.split(/\r?\n/); 

        console.log(JSON.stringify(lines));

        for (let i = 0; i < lines.length; i++) {
            let tokens = lines[i].split(/\s+/).filter(Boolean);
            console.log(JSON.stringify(tokens));


            // let lineNumber = i + 1;
            // let tokenType = determineTokenType(lines[i]);
            // let lexeme = lines[i];
            // this.#tokenList.push(new Token(lexeme, lineNumber, tokenType));
        }

        return this.#tokenList;
    }
}

export default Tokenizer;

