// Функція, яка перевіряє, чи є передане число досконалим

function isPerfectNumber(num) {
  if (num <= 1) return false;
  let sum = 0;
  for (let i = 1; i <= num / 2; i++) {
    if (num % i === 0) {
      sum += i;
    }
  }
  return sum === num;
}

console.log(isPerfectNumber(6));
console.log(isPerfectNumber(28));
console.log(isPerfectNumber(12));

// Функція, яка виводить досконалі числа в заданому діапазоні

function findPerfectNumbersInRange(min, max) {
  const perfectNumbers = [];
  for (let i = min; i <= max; i++) {
    if (isPerfectNumber(i)) {
      perfectNumbers.push(i);
    }
  }
  return perfectNumbers;
}

console.log(findPerfectNumbersInRange(1, 1000));
console.log(findPerfectNumbersInRange(1, 10000));
