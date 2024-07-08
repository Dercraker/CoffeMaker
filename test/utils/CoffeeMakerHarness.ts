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
        // TODO : faire la méthode ProvideCup
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

    public ProvideCup() {
        return this.hardware.ProvideCup();
    }
}