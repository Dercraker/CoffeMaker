import { HardwareFake, HardwareFakeInterface } from './hardwareFake';
import { HardwareFakeDecorator, PénurieGobeletsDecorator } from './HardwareFakeDecorator';
import { CoffeeMakerHarness } from './CoffeeMakerHarness';

export class CoffeeMakerBuilder {
  public static Default() {
    return new CoffeeMakerBuilder().Build();
  }

    public static WithPénurieGobelets() {
    return new CoffeeMakerBuilder().BuildWithPénurieGobeletsDecorator();
  }

  public Build(): CoffeeMakerHarness  {
    let hardware: HardwareFakeInterface = new HardwareFake();
    return new CoffeeMakerHarness (hardware);
  }

  public BuildWithPénurieGobeletsDecorator(): CoffeeMakerHarness {
    let hardware: HardwareFakeInterface = new HardwareFake();
    let CoffeeMaker: PénurieGobeletsDecorator = new PénurieGobeletsDecorator(hardware);
    return new CoffeeMakerHarness (CoffeeMaker);
  }
}
