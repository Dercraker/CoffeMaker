import { Piece } from '../src/Piece';
import { CoffeeMakerBuilder } from './utils/CoffeeMakerBuilder';
import './utils/hardwareMatchers';

describe('MVP', () => {
  test.each([Piece.CTS_50, Piece.EUR_1, Piece.EUR_2])(
    'Cas nominal : %s',
    (piece: Piece) => {
      // ETANT DONNE une machine a café
      // ET une pièce d'une valeur supérieure à 50cts
      const coffeeMaker = CoffeeMakerBuilder.Default();

      // QUAND on insère la pièce
      coffeeMaker.SimulerInsertionPièce(piece);

      // ALORS il a été demandé au hardware de servir un café
      expect(coffeeMaker).OneCoffeeDelivered();

      // ET l'argent est encaissé
      expect(coffeeMaker.getReceivedMoney()).toEqual(piece.getValue());
    },
  );

  test('Cas 2 cafés', () => {
    // ETANT DONNE une machine a café
    const coffeeMaker = CoffeeMakerBuilder.Default();

    // QUAND on insère 50cts, 2 fois
    coffeeMaker.insertCoins(Piece.CTS_50);
    coffeeMaker.insertCoins(Piece.CTS_50);

    // ALORS il a été demandé au hardware de servir deux cafés
    expect(coffeeMaker).NCoffeeDelivered(2);

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
    const coffeeMaker = CoffeeMakerBuilder.Default();

    // QUAND on insère la pièce
    coffeeMaker.SimulerInsertionPièce(piece);

    // ALORS il n'a pas été demandé au coffeeMaker de servir un café
    expect(coffeeMaker).NoCoffeeDelivered();

    // ET l'argent n'est pas encaissé
    expect(coffeeMaker.getReceivedMoney()).toEqual(0);
  });
});


describe('Gestion goblet', () => {
  test('Cas pas de récipient et stock de globlet OK', () => {
    //* Arrange
    // ETANT DONNE une machine a café avec aucun gobelet détecté
    const coffeeMaker = CoffeeMakerBuilder.Default();

    //* Act
    // QUAND on insère une pièce
    coffeeMaker.SimulerInsertionPièce(Piece.CTS_50)

    //* Assert
    //Alors un goblet est ajouté
    expect(coffeeMaker).OneCupProvided()

    //ET un café est coulé
    expect(coffeeMaker).OneCoffeeDelivered()
  })

  test('Cas récipient présent', () => {
    // TODO Si un récipient est detecté -> servir un café ET verifier qu'il n'y a pas de gobelet qui soit envoyé
    //* Arrange
    // ETANT DONNE une machine a café avec un gobelet détecté
    const coffeeMaker = CoffeeMakerBuilder.Default(true);
    //* Act
    // QUAND on insère une pièce
    coffeeMaker.SimulerInsertionPièce(Piece.CTS_50)

    //* Assert
    //Alors un goblet est ajouté
    expect(coffeeMaker).NoCupProvided()
    //ET un café est coulé
    expect(coffeeMaker).OneCoffeeDeliveredWithoutCup()
  })

  test('Cas récipient non-présent envoie et remboursement si pas de gobelet', () => {
    //* Arrange
    // ETANT DONNE une machine a café avec un gobelet détecté
    const coffeeMaker = CoffeeMakerBuilder.WithPénurieGobeletsAndNoCup()

    //* Act
    // QUAND on insère une pièce
    coffeeMaker.SimulerInsertionPièce(Piece.CTS_50)

    //* Assert
    //Alors un goblet est ajouté
    expect(coffeeMaker).NoCupProvided()
    //ET un café est coulé
    expect(coffeeMaker).OneCoffeeDeliveredWithCup()

    expect(coffeeMaker).RepaymentProvided()
  })

  // TODO Rendre 10cts si le gobelet est présent 
})

//? Que faire en cas de rupture de stock de goblet ? Servire dès qu'il a une tasse et remboursser si pas de tasse
//? Est ce que le client peut mettre ont propre goblet ? Oui 
//? Est ce que le nous devons vérifier la possibilitée a remplire le contenant ? Non
//? Devons nous géré le remboursement client en cas de problèmes ? Oui