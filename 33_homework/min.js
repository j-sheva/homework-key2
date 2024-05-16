// Function Declaration
function funcName1() {
  // тіло функції
}

// Function Expression
const funcName2 = function () {
  // тіло функції
};

// Arrow Function
const funcName3x = () => {
  // тіло функції
};

// Функція, яка виводить кількість переданих їй аргументів
function countArguments(...args) {
  console.log(args.length);
}

countArguments(1, 2, 3);

// Функція порівняння двох чисел
function compareNumbers(a, b) {
  return a < b ? -1 : a > b ? 1 : 0;
}

console.log(compareNumbers(5, 3));
console.log(compareNumbers(3, 5));
console.log(compareNumbers(5, 5));

// Функція обчислення факторіалу
function factorial(n) {
  if (n === 0 || n === 1) {
    return 1;
  }
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log(factorial(5));

// Функція перетворення трьох цифр в одне число
function combineDigits(a, b, c) {
  return a * 100 + b * 10 + c;
}
console.log(combineDigits(1, 0, 7));

// Функція обчислення площі прямокутника або квадрата
function calculateArea(length, width) {
  return width === undefined ? length * length : length * width;
}

console.log(calculateArea(5));
console.log(calculateArea(5, 10));
