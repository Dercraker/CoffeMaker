import { CoffeeMaker } from './../../src/CoffeeMaker';
import {Piece} from "../../src/Piece";
import {HardwareFakeInterface} from "./hardwareFake";

export class CoffeeMakerHarness extends CoffeeMaker {
    private hardware: HardwareFakeInterface;

    public constructor(hardware: HardwareFakeInterface) {
        super(hardware);
        this.hardware = hardware;
    }

    public SimulerInsertionPièce(pièce: Piece) : void{
        this.hardware.SimulerInsertionPièce(pièce)
    }

    public CountInvocationsMakeACoffee() {
        return this.hardware.CountInvocationsMakeACoffee();
    }

    public CountInvocationIsCupPresent() {
        return this.hardware.CountInvocationIsCupPresent();
    }

    public CountInvocationProvideCup() {
        return this.hardware.CountInvocationProvideCup();
    }

    public IsCupPresent() {
        return this._isCupPresent;
    }

    public GetIsCupPresent(){
        return this.hardware.GetIsCupPresent();
    }

    public CountRepayment(){
        return this.hardware.CountRepayment();
    }
}