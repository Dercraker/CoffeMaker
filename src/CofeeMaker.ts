import { Piece } from "./Piece";

export class CofeeMaker{
    cofeeNumber: number = 0;
    receivedMoney: number = 0;

    public static readonly COFEE_PRICE = 50;

    insertCoins(coin: Piece){
        this.receivedMoney += coin.getValue();
        if (Math.floor(this.receivedMoney / CofeeMaker.COFEE_PRICE) < 1) return
        this.cofeeNumber ++;
    }
}