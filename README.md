# TypeScript Runtime Error Despite Type Safety

This example demonstrates a scenario where TypeScript's type safety system doesn't prevent a runtime error.  Even though the code is type-safe, a division by zero error can still occur during execution.

The code includes basic arithmetic functions (add, subtract, multiply, divide) with proper type definitions.  The `divide` function includes error handling for division by zero, but the bug lies in the possibility of calling it with a zero divisor at runtime. 

The solution shows how to implement more robust runtime checks or use techniques like optional chaining to prevent these types of issues.