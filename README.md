# Subtle Zero-Handling Bug in JavaScript Function

This repository demonstrates a common yet easily missed bug in JavaScript related to handling zero values in a function.  The `myFunction` example shows how an early return statement can lead to unexpected results when dealing with zero inputs.

The `bug.js` file contains the flawed code, while `bugSolution.js` provides a corrected version. This example highlights the importance of careful consideration when using early returns in conditional logic.

## Bug Description

The function is designed to add two numbers. However, due to an error in how zero values are handled, it prematurely returns 0 if *either* input is 0. This is different from the intended behavior of only returning 0 if *both* inputs are 0.