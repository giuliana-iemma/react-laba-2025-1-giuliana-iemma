interface Result {
  value: number;
  error: string;
}

interface Calculator {
  add(num1: number, num2: number): Result;
  substract(num1: number, num2: number): Result;
  multiply(num1: number, num2: number): Result;
  divide(num1: number, num2: number): Result;
  power(base: number, exponent: number): Result;
  sqrt(num: number): Result;
}

class BasicCalculator implements Calculator {
  public add(num1: number, num2: number): Result {
    return { value: num1 + num2, error: '' };
  }

  public substract(num1: number, num2: number): Result {
    return { value: num1 - num2, error: '' };
  }

  public multiply(num1: number, num2: number): Result {
    return { value: num1 * num2, error: '' };
  }

  public divide(num1: number, num2: number): Result {
    return { value: num1 / num2, error: '' };
  }

  public power(base: number, exponent: number): Result {
    if (exponent < 0) {
      return { value: exponent, error: 'Exponent must be a positive integer' };
    }

    return { value: base ** exponent, error: '' };
  }

  public sqrt(num: number): Result {
    if (num < 0) {
      return { value: num, error: 'Cannot calculate square root of negative number' };
    }

    return { value: Math.sqrt(num), error: '' };
  }
}

const calculator = new BasicCalculator();

console.log(calculator.add(4, 6));
console.log(calculator.substract(4, 6));
console.log(calculator.multiply(4, 6));
console.log(calculator.divide(24, 6));
console.log(calculator.power(2, 3));
console.log(calculator.power(2, -3));
console.log(calculator.sqrt(16));
console.log(calculator.sqrt(-5));
