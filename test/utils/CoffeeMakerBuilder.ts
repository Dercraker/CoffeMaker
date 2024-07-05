import { CoffeeMaker } from '../../src/CoffeeMaker';
import { HardwareFake } from './hardwareFake';

export class CoffeeMakerBuilder {
  public static Default() {
    return new CoffeeMakerBuilder().Build();
  }

  public Build(): CoffeeMaker {
    return new CoffeeMaker(new HardwareFake());
  }
}
