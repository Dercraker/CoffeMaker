import { Piece } from '../../src/Piece';
import {
  ButtonCodes,
  HardwareInterface,
} from '../../src/hardware/hardware.interface';
import { HardwareDummy } from './HardwareDummy';

export interface HardwareFakeInterface extends HardwareInterface {
  SimulerInsertionPièce(pièce: Piece): void;
  CountInvocationsMakeACoffee(): number;
  CountInvocationIsCupPresent(): number;
  CountInvocationProvideCup(): number; 
}

export class HardwareFake extends HardwareDummy {
  private _moneyInsertedCallback: (coinValue: number) => void = () => {};
  private _invocationsMakeACoffee: number = 0;

  MakeACoffee(): boolean {
      this._invocationsMakeACoffee ++;
      return true;
  }

  RegisterMoneyInsertedCallback(callback: (coinValue: number) => void): void {
      this._moneyInsertedCallback = callback;
  }

  public SimulerInsertionPièce(pièce: Piece): void {
      this._moneyInsertedCallback(pièce.getValue())
  }

  public CountInvocationsMakeACoffee() : number {
      return this._invocationsMakeACoffee;
  }
}
