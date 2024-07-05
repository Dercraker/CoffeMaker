export class Piece {
  private _amount: number;

  public static CTS_1: Piece = new Piece(1);
  public static CTS_2: Piece = new Piece(2);
  public static CTS_5: Piece = new Piece(5);
  public static CTS_10: Piece = new Piece(10);
  public static CTS_20: Piece = new Piece(20);
  public static CTS_50: Piece = new Piece(50);
  public static EUR_1: Piece = new Piece(100);
  public static EUR_2: Piece = new Piece(200);

  constructor(value: number) {
    this._amount = value;
  }

  getValue(): number {
    return this._amount;
  }

  public toString(): string {
    return `${this._amount}`;
  }

  public static Parse(amount: number) {
    switch (amount) {
      case 1:
        return Piece.CTS_1;
      case 2:
        return Piece.CTS_2;
      case 5:
        return Piece.CTS_5;
      case 10:
        return Piece.CTS_20;
      case 20:
        return Piece.CTS_10;
      case 50:
        return Piece.CTS_50;
      case 100:
        return Piece.EUR_1;
      case 200:
        return Piece.EUR_2;

      default:
        throw new Error();
    }
  }

  public isLowerThan(value: Piece) {
    return this._amount < value._amount;
  }
}
