export class Piece{
    private value: number;

    public static CTS_1: Piece = new Piece(1);
    public static CTS_2: Piece = new Piece(2);
    public static CTS_5: Piece = new Piece(5);
    public static CTS_10: Piece = new Piece(10);
    public static CTS_20: Piece = new Piece(20);
    public static CTS_50: Piece = new Piece(50);
    public static EUR_1: Piece = new Piece(100);
    public static EUR_2: Piece = new Piece(200);

    constructor(value: number){
        this.value = value;
    }

    getValue(): number{
        return this.value;
    }

    public toString(): string {
        return `${this.value}`
    }

}