import { CofeeMaker } from "../src/CofeeMaker";
import { Piece } from "../src/Piece";

describe("MVP", () => {
    test("Cas nominal", () => {
        let cofeMaker = new CofeeMaker();
        let piece = Piece.CTS_50;

        cofeMaker.insertCoins(piece);

        expect(cofeMaker.cofeeNumber).toEqual(1);
        expect(cofeMaker.receivedMoney).toEqual(50);
    })

    test("Cas 2 cafés", () => {
        let cofeMaker = new CofeeMaker();
        let piece = Piece.CTS_50;

        cofeMaker.insertCoins(piece);
        cofeMaker.insertCoins(piece);

        expect(cofeMaker.cofeeNumber).toEqual(2);
        expect(cofeMaker.receivedMoney).toEqual(100);
    })

    // TODO : moins de 50cts
    test.each([Piece.CTS_1, Piece.CTS_2, Piece.CTS_5, Piece.CTS_10, Piece.CTS_20])('Cas pièces de %s cts', (piece: Piece) => {
        let cofeMaker = new CofeeMaker();

        cofeMaker.insertCoins(piece);

        expect(cofeMaker.cofeeNumber).toEqual(0);
    })

    // TODO : plus de 50 cts

    test.each([Piece.EUR_1, Piece.EUR_2])("Cas pièces de %s cts", (piece: Piece) => {
        let cofeMaker = new CofeeMaker();

        cofeMaker.insertCoins(piece);

        expect(cofeMaker.cofeeNumber).toEqual(1);
    })
})