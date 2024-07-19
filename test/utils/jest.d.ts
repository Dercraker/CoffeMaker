declare global {
  namespace jest {
    interface Matchers<R> {
      NCoffeeDelivered(expected: number): R;
      NoCoffeeDelivered(): R;
      OneCoffeeDelivered(): R;
      NoCupDetected(): R;
      OneCupDetected(): R;
      NoCupProvided(): R;
      OneCupProvided(): R;
      OneCoffeeDeliveredWithCup(): R;
    }
  }
}

export {};
