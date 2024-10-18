class Token { 
    constructor(lexeme, lineNumber, tokenType){
        this.lexeme = lexeme;
        this.lineNumber = lineNumber;
        this.tokenType = tokenType;
    }

    getLexeme() {
        return this.lexeme;
    }

    getLineNumber() {
        return this.lineNumber;
    }

    getTokenType() {
        return this.tokenType;
    }
}

export default Token;
