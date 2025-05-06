function calFactorial(num) {
    if (num < 0) return 0;
    if (num === 0 || num === 1) return 1; // Base case: 0! and 1! are 1
    return num * calFactorial(num - 1);
  }

  console.log('*********', calFactorial(4));

//*************************** */
// Please note:
//   Factorial of 0 is 1