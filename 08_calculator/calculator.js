const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function ([...theArgs]) {
  return theArgs.reduce((previous, current) => previous + current, 0)
};

const multiply = function ([...theArgs]) {
  return theArgs.reduce((previous, current) => previous * current, 1)
};

const power = function (a, b) {
  return a ** b
};

const factorial = function (a) {
  if (a === 0) {
    return 1
  } else {
    for (let i = a - 1; i > 0; i--) {
      a *= i
    }
    return a;
  }
};

// another implementation of Factorial that uses recursion from the solutions
// const recursiveFactorial = function(n) {
//   if (n === 0) {
//     return 1;
//   }
//   return n * recursiveFactorial (n-1);
// };

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
