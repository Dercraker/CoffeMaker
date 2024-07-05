// @ts-ignore
import { expect } from '@jest/globals';
// @ts-ignore
import type { MatcherFunction } from 'expect';
import { HardwareFake } from './hardwareFake';

const NoCoffeeDelivered: MatcherFunction = (actual: unknown) => {
  if (!(actual instanceof HardwareFake))
    throw new Error('Only works with CoffeeMaker HardWare');

  const delta = actual.CountInvocationsMakeCoffee();
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
  if (!(actual instanceof HardwareFake))
    throw new Error('Only works with MachineACaféHarness');

  const delta = actual.CountInvocationsMakeCoffee();
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
  if (!(actual instanceof HardwareFake))
    throw new Error('Only works with HardwareFake');

  if (!Number.isInteger(expected)) throw new Error('Only works with integer');

  const delta = actual.CountInvocationsMakeCoffee();
  const pass = delta == expected;
  const message = pass
    ? `${expected} cafés devaient être servis, ${delta} l'a été.`
    : `Il était demandé de ne pas service ${expected}, ce fut le cas.`;

  return {
    message: () => message,
    pass: pass,
  };
};

expect.extend({
  NoCoffeeDelivered,
  NCoffeeDelivered,
  OneCoffeeDelivered,
});
