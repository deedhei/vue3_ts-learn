// type CalcFn = (n1: number, n2: number) => number;

function calc(num1: number, num2: number, calcFn: CalcFn) {}

const add: CalcFn = function (num1, num2) {
  return num1 + num2;
};
calc(10, 20, add);

export {};
