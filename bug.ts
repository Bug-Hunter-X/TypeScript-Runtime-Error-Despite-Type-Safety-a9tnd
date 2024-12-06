function add(a: number, b: number): number {
  return a + b;
}

function subtract(a: number, b: number): number {
  return a - b;
}

function multiply(a: number, b: number): number {
  return a * b;
}

function divide(a: number, b: number): number {
  if (b === 0) {
    throw new Error('Cannot divide by zero');
  }
  return a / b;
}

let result = add(5, 3); // result is 8
result = subtract(10, 4); // result is 6
result = multiply(7, 2); // result is 14
result = divide(15, 3); // result is 5

// Uncommon bug: Type safety doesn't prevent runtime errors 
result = divide(10,0); // throws an error at runtime even though it is type safe