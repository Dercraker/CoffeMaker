import { Piece } from '../../src/Piece';
import {
  ButtonCodes,
  HardwareInterface,
} from '../../src/hardware/hardware.interface';

export class HardwareFake implements HardwareInterface {
  private _moneyInsertedCallback: (value: number) => void = () => {};
  private _invocationsMakeCoffee: number = 0;

  MakeACoffee(): boolean {
    this._invocationsMakeCoffee++;
    return true;
  }

  RegisterMoneyInsertedCallback(callback: (value: number) => void): void {
    this._moneyInsertedCallback = callback;
  }

  public SimulerInsertionPièce(piece: Piece): void {
    this._moneyInsertedCallback(piece.getValue());
  }

  public CountInvocationsMakeCoffee() {
    return this._invocationsMakeCoffee;
  }

  FlushStoredMoney(): void {
    throw new Error('Method not implemented.');
  }
  CollectStoredMoney(): void {
    throw new Error('Method not implemented.');
  }
  IsCupPresent(): boolean {
    throw new Error('Method not implemented.');
  }
  ProvideCup(): void {
    throw new Error('Method not implemented.');
  }
  RegisterButtonPressedCallback(
    callback: (buttonCode: ButtonCodes) => void,
  ): void {
    throw new Error('Method not implemented.');
  }
  TryPullWater(): boolean {
    throw new Error('Method not implemented.');
  }
  PourMilk(): boolean {
    throw new Error('Method not implemented.');
  }
  PourWater(): boolean {
    throw new Error('Method not implemented.');
  }
  PourSugar(): boolean {
    throw new Error('Method not implemented.');
  }
}
