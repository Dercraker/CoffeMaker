declare global {
  namespace jest {
    interface Matchers<R> {
      NCoffeeDelivered(expected: number): R;
      NoCoffeeDelivered(): R;
      OneCoffeeDelivered(): R;
    }
  }
}

export {};
