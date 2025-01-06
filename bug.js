function myFunction(a, b) {
  if (a === 0 || b === 0) {
    return 0; // This line is problematic
  }
  return a + b;
}

console.log(myFunction(5, 0)); //Outputs 0
console.log(myFunction(0, 5)); //Outputs 0
console.log(myFunction(5, 5)); //Outputs 10