import { Piece } from '../../src/Piece';
import { HardwareInterface } from '../../src/hardware/hardware.interface';
import { HardwareDummy } from './HardwareDummy';

export interface HardwareFakeInterface extends HardwareInterface {
  SimulerInsertionPièce(pièce: Piece): void;
  CountInvocationsMakeACoffee(): number;
  CountInvocationIsCupPresent(): number;
  CountInvocationProvideCup(): number;
  GetIsCupPresent(): boolean;
}

export class HardwareFake extends HardwareDummy {
  protected _moneyInsertedCallback: (coinValue: number) => void = () => {};
  protected _invocationsMakeACoffee: number = 0;
  protected _invocationsProvideCup: number = 0;
  protected _invocationsIsCupPresent: number = 0;
  protected _isCupPresent: boolean = false;

  MakeACoffee(): boolean {
      this._invocationsMakeACoffee ++;
      this._isCupPresent = false;
      return true;
  }

  ProvideCup(): void {
    this._invocationsProvideCup++;
    this._isCupPresent = true;
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

  IsCupPresent(): boolean {
    this._invocationsIsCupPresent++;
    return this._isCupPresent; 
  }

  public CountInvocationIsCupPresent() : number {
      return this._invocationsIsCupPresent;
  }

  public GetIsCupPresent(): boolean {
    return this._isCupPresent;
  }

  public CountInvocationProvideCup() : number {
      return this._invocationsProvideCup;
  }
}
