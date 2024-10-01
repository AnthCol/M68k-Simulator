class Microprocessor {
    constructor() {
        this.DRegisters = new Array(8).fill(0x00000000);
        this.ARegisters = new Array(8).fill(0x00000000);
        this.SR = 0;
        this.US = 0; 
        this.SS = 0; 
        this.PC = 0; 
    }

    reset() {
        this.DRegisters.fill(0x00000000);
        this.ARegisters.fill(0x00000000);
        this.SR = 0;
        this.US = 0;
        this.SS = 0;
        this.PC = 0;
    }

}
