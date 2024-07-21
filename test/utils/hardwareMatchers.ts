// @ts-ignore
import { expect } from '@jest/globals';
// @ts-ignore
import type { MatcherFunction } from 'expect';
import { CoffeeMakerHarness } from './CoffeeMakerHarness';

const NoCoffeeDelivered: MatcherFunction = (actual: unknown) => {
  if (!(actual instanceof CoffeeMakerHarness))
    throw new Error('Only works with CoffeeMaker HardWare Harness');

  const delta = actual.CountInvocationsMakeACoffee();
  const pass = delta == 0;
  const message = pass
    ? `Au moins un café devait être servi, aucun ne l'a été.`
    : `Aucun café ne devait être servi, ${delta} ont été servis.`;

  return {
    message: () => message,
    pass: pass,
  };
};

const OneCoffeeDelivered: MatcherFunction = (actual: unknown) => {
  if (!(actual instanceof CoffeeMakerHarness))
    throw new Error('Only works with CoffeeMaker HardWare Harness');

  const delta = actual.CountInvocationsMakeACoffee();
  const pass = delta == 1;
  const message = pass
    ? `Un café devait être servi, ${delta} ne l'a été.`
    : `Zéro ou plusieurs cafés devaient être servis, Un a été servi.`;

  return {
    message: () => message,
    pass: pass,
  };
};

const OneCoffeeDeliveredWithCup: MatcherFunction = (actual: unknown) => {
  if (!(actual instanceof CoffeeMakerHarness))
    throw new Error('Only works with CoffeeMaker HardWare Harness');

  const delta = actual.CountInvocationsMakeACoffee();
  const pass = delta == 1;
  const message = pass
    ? `Un café devait être servi, ${delta} ne l'a été.`
    : `Zéro ou plusieurs cafés devaient être servis, Un a été servi.`;

  return {
    message: () => message,
    pass: pass,
  };
};

const NCoffeeDelivered: MatcherFunction<[expected: unknown]> = (
  actual: unknown,
  expected: unknown,
) => {
  if (!(actual instanceof CoffeeMakerHarness))
    throw new Error('Only works with CoffeeMakerHarness');

  if (!Number.isInteger(expected)) throw new Error('Only works with integer');

  const delta = actual.CountInvocationsMakeACoffee();
  const pass = delta == expected;
  const message = pass
    ? `${expected} cafés devaient être servis, ${delta} l'a été.`
    : `Il était demandé de ne pas service ${expected}, ce fut le cas.`;

  return {
    message: () => message,
    pass: pass,
  };
};

const NoCupDetected: MatcherFunction<[expect: unknown]> = (
  actual: unknown
) => {
if (!(actual instanceof CoffeeMakerHarness))
    throw new Error('Only works with CoffeeMaker HardWare Harness');

  const delta = actual.CountInvocationIsCupPresent();
  const isPresent = actual.GetIsCupPresent();
  const pass = delta == 1 && !isPresent;
  const message = pass
    ? `Aucun gobelet n'est détecté, aucun ne l'a été.`
    : `Aucun gobelet n'est détecté, ${delta} ont été servis.`;

  return {
    message: () => message,
    pass: pass,
  };
}

const OneCupDetected: MatcherFunction<[expect: unknown]> = (
  actual: unknown
) => {
if (!(actual instanceof CoffeeMakerHarness))
    throw new Error('Only works with CoffeeMaker HardWare Harness');

  const delta = actual.CountInvocationIsCupPresent();
  const isPresent = actual.GetIsCupPresent();
  const pass = delta == 2 && isPresent;
  const message = pass
    ? `Un gobelet devait être détecté, 1 goblet a été détecté.`
    : `Un gobelet devait être détecté, aucun ne l'a été.`;

  return {
    message: () => message,
    pass: pass,
  };
}

const NoCupProvided: MatcherFunction<[expect: unknown]> = (
  actual: unknown
) => {
if (!(actual instanceof CoffeeMakerHarness))
    throw new Error('Only works with CoffeeMaker HardWare Harness');

  const delta = actual.CountInvocationProvideCup();
  const pass = delta == 0;
  const message = pass
    ? `Aucun gobelet n'est détecté, aucun ne l'a été.`
    : `Aucun gobelet n'est détecté, ${delta} ont été servis.`;

  return {
    message: () => message,
    pass: pass,
  };
}

const OneCupProvided: MatcherFunction<[expect: unknown]> = (
  actual: unknown
) => {
if (!(actual instanceof CoffeeMakerHarness))
    throw new Error('Only works with CoffeeMaker HardWare Harness');

  const delta = actual.CountInvocationProvideCup();
  const pass = delta == 1;
  const message = pass
    ? `Un gobelet devait être servi, 1 a été servi.`
    : `Un gobelet devait être servi, ${delta} ont été servis.`;

  return {
    message: () => message,
    pass: pass,
  };
}

const OneCoffeeDeliveredWithoutCup: MatcherFunction = (actual: unknown) => {
  if (!(actual instanceof CoffeeMakerHarness))
    throw new Error('Only works with CoffeeMaker HardWare Harness');

  const delta = actual.CountInvocationsMakeACoffee();
  const pass = delta == 1;
  const message = pass
    ? `Un café devait être servi, 1 l'a été.`
    : `Un café devait être servi, ${delta} a été servi.`;

  return {
    message: () => message,
    pass: pass,
  };
};

const RepaymentProvided: MatcherFunction = (actual: unknown) => {
  if (!(actual instanceof CoffeeMakerHarness))
    throw new Error('Only works with CoffeeMaker HardWare Harness');

  const delta = actual.CountRepayment();
  const pass = delta == 1;
  const message = pass
    ? `Un remboursement devait être effectué, 1 l'a été.`
    : `Un remboursement devait être effectué, ${delta} l'a été.`;

  return {
    message: () => message,
    pass: pass,
  };
}

expect.extend({
  NoCoffeeDelivered,
  NCoffeeDelivered,
  OneCoffeeDelivered,
  NoCupDetected,
  OneCupDetected,
  NoCupProvided,
  OneCupProvided,
  OneCoffeeDeliveredWithCup,
  OneCoffeeDeliveredWithoutCup,
  RepaymentProvided,
});
