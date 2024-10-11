const ZERO = 0x00000000;

class Microprocessor {
    constructor() {
        this.dataRegisters = new Array(8).fill(ZERO);
        this.addressRegisters = new Array(8).fill(ZERO);
        this.SR = 0;
        this.US = 0; 
        this.SS = 0; 
        this.PC = 0; 
    }

    reset() {
        this.dataRegisters.fill(ZERO);
        this.addressRegisters.fill(ZERO);
        this.SR = 0;
        this.US = 0;
        this.SS = 0;
        this.PC = 0;
    }
}

export default Microprocessor;