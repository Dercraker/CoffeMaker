import {ButtonCodes} from "../../src/hardware/hardware.interface";
import {HardwareFake, HardwareFakeInterface} from "./hardwareFake";

export class HardwareFakeDecorator extends HardwareFake {
    private _decorated: HardwareFakeInterface;

    public constructor(decorated: HardwareFakeInterface) {
        super();
        this._decorated = decorated;
        this._isCupPresent = false;
    }

    RegisterMoneyInsertedCallback(callback: (coinValue: number) => void): void {
        this._decorated.RegisterMoneyInsertedCallback(callback)
    }
    FlushStoredMoney(): void {
        this._decorated.FlushStoredMoney()
    }
    CollectStoredMoney(): void {
        this._decorated.CollectStoredMoney()
    }
    IsCupPresent(): boolean {
        return this._decorated.IsCupPresent()
    }
    ProvideCup(): void {
        return this._decorated.ProvideCup()
    }
    RegisterButtonPressedCallback(callback: (buttonCode: ButtonCodes) => void): void {
        return this._decorated.RegisterButtonPressedCallback(callback)
    }
    MakeACoffee(): boolean {
        return this._decorated.MakeACoffee()
    }
    TryPullWater(): boolean {
        return this._decorated.TryPullWater()
    }
    PourMilk(): boolean {
        return this._decorated.PourMilk()
    }
    PourWater(): boolean {
        return this._decorated.PourWater()
    }
    PourSugar(): boolean {
        return this._decorated.PourSugar()
    }
}

export class DefaultWithCupDecorator extends HardwareFakeDecorator {
    public constructor(decorated: HardwareFakeInterface) {
        super(decorated);
    }
}

export class PénurieGobeletsWithoutCupDecorator extends HardwareFakeDecorator {
    public constructor(decorated: HardwareFakeInterface) {
        super(decorated);
        this._isCupPresent = false;
    }

    IsCupPresent(): boolean {
        this._invocationsIsCupPresent++
        return false;
    }

    ProvideCup(): void {
        this._invocationsProvideCup++
        throw new Error("Plus de gobelets")
    }
}

export class PénurieGobeletsWithCupDecorator extends HardwareFakeDecorator {
    public constructor(decorated: HardwareFakeInterface) {
        super(decorated);
        this._isCupPresent = true;
    }

    IsCupPresent(): boolean {
        this._invocationsIsCupPresent++
        return false;
    }

    ProvideCup(): void {
        this._invocationsProvideCup++
        throw new Error("Plus de gobelets")
    }
}