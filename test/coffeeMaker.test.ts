import { CoffeeMaker } from '../src/CoffeeMaker';
import { Piece } from '../src/Piece';
import { HardwareFake } from './utils/hardwareFake';
import './utils/hardwareMatchers';

describe('MVP', () => {
  test.each([Piece.CTS_50, Piece.EUR_1, Piece.EUR_2])(
    'Cas nominal : %s',
    (piece: Piece) => {
      // ETANT DONNE une machine a café
      // ET une pièce d'une valeur supérieure à 50cts

      const hardware = new HardwareFake();
      const coffeeMaker = new CoffeeMaker(hardware);

      // QUAND on insère la pièce
      hardware.SimulerInsertionPièce(piece);

      // ALORS il a été demandé au hardware de servir un café
      expect(hardware).OneCoffeeDelivered();

      // ET l'argent est encaissé
      expect(coffeeMaker.getReceivedMoney()).toEqual(piece.getValue());
    },
  );

  test('Cas 2 cafés', () => {
    // ETANT DONNE une machine a café
    const hardware = new HardwareFake();
    const coffeeMaker = new CoffeeMaker(hardware);

    // QUAND on insère 50cts, 2 fois
    coffeeMaker.insertCoins(Piece.CTS_50);
    coffeeMaker.insertCoins(Piece.CTS_50);

    // ALORS il a été demandé au hardware de servir deux cafés
    expect(hardware).NCoffeeDelivered(2);

    // ET l'argent est encaissé
    expect(coffeeMaker.getReceivedMoney()).toEqual(100);
  });

  test.each([
    Piece.CTS_1,
    Piece.CTS_2,
    Piece.CTS_5,
    Piece.CTS_10,
    Piece.CTS_20,
  ])('Cas pas assez argent %s cts', (piece: Piece) => {
    // ETANT DONNE une machine a café
    // ET une pièce d'une valeur inférieure 50cts
    const hardware = new HardwareFake();
    let coffeeMaker = new CoffeeMaker(hardware);

    // QUAND on insère la pièce
    hardware.SimulerInsertionPièce(piece);

    // ALORS il n'a pas été demandé au hardware de servir un café
    expect(hardware).NoCoffeeDelivered();

    // ET l'argent n'est pas encaissé
    expect(coffeeMaker.getReceivedMoney()).toEqual(0);
  });
});
