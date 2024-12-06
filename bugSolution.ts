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
    return 0; // Handle division by zero by returning a default value
  }
  return a / b;
}

let result = add(5, 3); // result is 8
result = subtract(10, 4); // result is 6
result = multiply(7, 2); // result is 14
result = divide(15, 3); // result is 5
result = divide(10,0) // result is 0