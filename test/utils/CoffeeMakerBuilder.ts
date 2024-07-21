import { HardwareFake, HardwareFakeInterface } from './hardwareFake';
import { PénurieGobeletsWithCupDecorator, PénurieGobeletsWithoutCupDecorator, DefaultWithCupDecorator} from './HardwareFakeDecorator';
import { CoffeeMakerHarness } from './CoffeeMakerHarness';

export class CoffeeMakerBuilder {
  public static Default(withCup: boolean = false) {
    if (withCup) {
      return new CoffeeMakerBuilder().BuildWithCup()
    }else{
      return new CoffeeMakerBuilder().Build();
    }
  }

    public static WithPénurieGobeletsAndNoCup() {
    return new CoffeeMakerBuilder().BuildWithPénurieGobeletsWithoutCupDecorator();
  }
    public static WithPénurieGobeletsAndCup() {
    return new CoffeeMakerBuilder().BuildWithPénurieGobeletsWithCupDecorator();
  }

  public Build(): CoffeeMakerHarness  {
    let hardware: HardwareFakeInterface = new HardwareFake();
    return new CoffeeMakerHarness (hardware);
  }
  public BuildWithCup(): CoffeeMakerHarness  {
    let hardware: HardwareFakeInterface = new HardwareFake();
    let CoffeeMaker: DefaultWithCupDecorator = new DefaultWithCupDecorator(hardware);
    CoffeeMaker.SetCupPresent(true);
    return new CoffeeMakerHarness (CoffeeMaker);
  }

  public BuildWithPénurieGobeletsWithoutCupDecorator(): CoffeeMakerHarness {
    let hardware: HardwareFakeInterface = new HardwareFake();
    let CoffeeMaker: PénurieGobeletsWithoutCupDecorator = new PénurieGobeletsWithoutCupDecorator(hardware);
    return new CoffeeMakerHarness (CoffeeMaker);
  }

  public BuildWithPénurieGobeletsWithCupDecorator(): CoffeeMakerHarness {
    let hardware: HardwareFakeInterface = new HardwareFake();
    let CoffeeMaker: PénurieGobeletsWithCupDecorator = new PénurieGobeletsWithCupDecorator(hardware);
    return new CoffeeMakerHarness (CoffeeMaker);
  }
}
