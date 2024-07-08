import { HardwareFake, HardwareFakeInterface } from './hardwareFake';
import { CoffeeMakerHarness } from './CoffeeMakerHarness';

export class CoffeeMakerBuilder {
  public static Default() {
    return new CoffeeMakerBuilder().Build();
  }

  public Build(): CoffeeMakerHarness  {
    let hardware: HardwareFakeInterface = new HardwareFake();
    return new CoffeeMakerHarness (hardware);
  }
}
