import { Piece } from "../../src/Piece";
import { ButtonCodes } from "../../src/hardware/hardware.interface";
import {HardwareFakeInterface} from "./hardwareFake";

export class HardwareDummy implements HardwareFakeInterface {
    SimulerInsertionPièce(pièce: Piece): void {
        throw new Error("Method not implemented.");
    }
    CountInvocationsMakeACoffee(): number {
        throw new Error("Method not implemented.");
    }
    RegisterMoneyInsertedCallback(callback: (coinValue: number) => void): void {
        throw new Error("Method not implemented.");
    }
    FlushStoredMoney(): void {
        throw new Error("Method not implemented.");
    }
    CollectStoredMoney(): void {
        throw new Error("Method not implemented.");
    }
    IsCupPresent(): boolean {
        throw new Error("Method not implemented.");
    }
    ProvideCup(): void {
        throw new Error("Method not implemented.");
    }
    RegisterButtonPressedCallback(callback: (buttonCode: ButtonCodes) => void): void {
        throw new Error("Method not implemented.");
    }
    SetLungoWarningLedState(state: boolean): void {
        throw new Error("Method not implemented.");
    }
    MakeACoffee(): boolean {
        throw new Error("Method not implemented.");
    }
    TryPullWater(): boolean {
        throw new Error("Method not implemented.");
    }
    PourMilk(): boolean {
        throw new Error("Method not implemented.");
    }
    PourWater(): boolean {
        throw new Error("Method not implemented.");
    }
    PourSugar(): boolean {
        throw new Error("Method not implemented.");
    }
    CountInvocationIsCupPresent(): number {
        throw new Error("Method not implemented.");
    }
    CountInvocationProvideCup(): number {
        throw new Error("Method not implemented.");
    }
}