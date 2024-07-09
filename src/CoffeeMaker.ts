import envJson from '../env.json';
import { Piece } from './Piece';
import { HardwareInterface } from './hardware/hardware.interface';
import ENV_TYPE from './types/env';

export class CoffeeMaker {
  private readonly _hardware: HardwareInterface;
  private readonly _ENV: ENV_TYPE = envJson;
  private _coffeeNumber: number = 0;
  private _receivedMoney: number = 0;
  protected _isCupPresent: boolean = false;

  public getReceivedMoney() {
    return this._receivedMoney;
  }

  constructor(hardware: HardwareInterface) {
    hardware.RegisterMoneyInsertedCallback(amount =>
      this.insertCoins(Piece.Parse(amount)),
    );

    this._hardware = hardware;
  }

  insertCoins(coin: Piece) {
    if (coin.isLowerThan(Piece.Parse(this._ENV.coffees.coffee.price))) return;

    if (!this._hardware.IsCupPresent()) this._hardware.ProvideCup();

    // if (this._hardware.IsCupProvided()) throw new Error("refund the client");

    this._hardware.MakeACoffee();
    this._receivedMoney += coin.getValue();
  }
}
