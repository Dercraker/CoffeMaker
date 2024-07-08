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
  // TODO Si un récipient n'est pas detecté > Mettre un gobelet ET vérifier la présence d'un goblet ET couler un café
  test('Cas pas de récipient et stock de globlet OK', () => {
    //* Arrange
    // ETANT DONNE une machine a café
    const coffeeMaker = CoffeeMakerBuilder.Default();
    
    // QUAND aucun goblet est detecter
    expect(coffeeMaker).NoCupDetected()

    //* Act
    // Et on insère une pièce
    coffeeMaker.SimulerInsertionPièce(Piece.CTS_50)
    coffeeMaker.ProvideCup()

    //* Assert
    //Alors un goblet est ajouté
    expect(coffeeMaker).OneCupProvided()
    //ET un goblet est detecter
    expect(coffeeMaker).OneCupDetected()

  })


  // TODO Si un récipient est detecté -> servir un café ET verifier qu'il n'y a pas de gobelet qui soit envoyé
  // TODO Si un gobelet est insérer vérifier que le stock de goblet est décrémenté
  // TODO Si un récipient n'est pas detecté ET que le stock de goblet == 0 -> Pas de café ET remboursement
  // TODO Si un stock de goblet est réapprovisionné -> Stock de goblet > 0
})

//? Que faire en cas de rupture de stock de goblet ? Servire dès qu'il a une tasse et remboursser si pas de tasse
//? Est ce que le client peut mettre ont propre goblet ? Oui 
//? Est ce que le nous devons vérifier la possibilitée a remplire le contenant ? Non
//? Devons nous géré le remboursement client en cas de problèmes ? Oui