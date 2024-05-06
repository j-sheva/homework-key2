// Мінімум

// Завдання 1:
const userAge = prompt('Вкажіть свій вік:');
if (!isNaN(userAge) && userAge >= 0) {
  if (userAge >= 0 && userAge <= 11) {
    console.log('Вітаю, ви дитина!');
  } else if (userAge >= 12 && userAge <= 17) {
    console.log('Вітаю (але не точно), ви підліток!');
  } else if (userAge >= 18 && userAge <= 59) {
    console.log('Співчуваю, ви дорослий!');
  } else {
    console.log('Ви пенсіонер.');
  }
} else {
  console.log('Будь ласка, введіть коректний вік.'); // Якщо вік невірний, запитуємо знову
}

// Завдання 2:
const number = prompt('Введіть число від 0 до 9');

if (number == 1) {
  console.log('!');
} else if (number == 2) {
  console.log('@');
} else if (number == 3) {
  console.log('#');
} else if (number == 4) {
  console.log('$');
} else if (number == 5) {
  console.log('%');
} else if (number == 6) {
  console.log('^');
} else if (number == 7) {
  console.log('&');
} else if (number == 8) {
  console.log('*');
} else if (number == 9) {
  console.log('(');
} else if (number == 0) {
  console.log(')');
} else {
  console.log('Будь ласка!!!! ВВЕДІТЬ ЧИСЛО ВІД 0 ДО 9!!!!');
}

// Завдання 3:
const operant1 = prompt('Введіть перше число');
const operant2 = prompt('Введіть друге число');

if (!isNaN(operant1) && !isNaN(operant2)) {
  if (operant1 <= operant2) {
    let sum = 0;
    for (let i = +operant1; i <= +operant2; i++) {
      sum += i;
    }
    console.log(`Сумма: ${sum}`);
  } else {
    let sum = 0;
    for (let i = +operant2; i <= +operant1; i++) {
      sum += i;
    }
    console.log(`Сумма: ${sum}`);
  }
} else {
  console.log('Будь ласка, введіть коректні числа.');
}

// Завдання 4:

const numberOne = prompt('Введіть перше число');
const numberTwo = prompt('Введіть друге число');
if (!isNaN(numberOne) && !isNaN(numberTwo)) {
  let a = Math.abs(numberOne);
  let b = Math.abs(numberTwo);

  while (b !== 0) {
    let temp = b;
    b = a % b;
    a = temp;
  }
  console.log(
    `Найбільший спільний дільник ${numberOne} і ${numberTwo} - це ${a}.`
  );
} else {
  console.log('Будь ласка, введіть коректні числа.');
}

// Завдання 5:

const num = prompt('Введіть число');

if (!isNaN(num)) {
  let c = Math.abs(num);

  for (let i = 1; i <= c; i++) {
    let ost = c % i;
    if (ost === 0) {
      console.log(`Дільник числа: ${i}`);
    }
  }
} else {
  console.log('Будь ласка, введіть коректне число.');
}

// Норма

// Завдання 1:

const num5 = prompt('Введіть 5ти значне число');
if (num5.length === 5 && !isNaN(num5)) {
  if (num5[0] === num5[num5.length - 1] && num5[1] === num5[num5.length - 2]) {
    console.log(`Число ${num5} - паліндром`);
  } else {
    console.log(`Число ${num5} - НЕ паліндром`);
  }
} else {
  console.log('Будь ласка, введіть коректне число.');
}

// Завдання 2:

const summa = prompt('Введіть суму покупки');
let finalSumma = 0;
if (!isNaN(summa)) {
  if (summa < 200) {
    console.log(`Ваша знижка 0%, сумма до сплати: ${summa}`);
  } else if (200 <= summa && summa < 300) {
    finalSumma = summa - summa * 0.03;
    console.log(`Ваша знижка 3%, сумма до сплати: ${finalSumma.toFixed(2)}`);
  } else if (300 <= summa && summa < 500) {
    finalSumma = summa - summa * 0.05;
    console.log(`Ваша знижка 5%, сумма до сплати: ${finalSumma.toFixed(2)}`);
  } else {
    finalSumma = summa - summa * 0.07;
    console.log(`Ваша знижка 7%, сумма до сплати: ${finalSumma.toFixed(2)}`);
  }
} else {
  console.log('Будь ласка, введіть коректну суму.');
}

// Завдання 3:

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;
let evenCount = 0;
let oddCount = 0;

for (let i = 0; i < 10; i++) {
  let number = parseFloat(prompt('Введіть число (' + (i + 1) + '/10):'));

  if (number > 0) {
    positiveCount++;
  } else if (number < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }

  if (number % 2 === 0) {
    evenCount++;
  } else {
    oddCount++;
  }
}

console.log(`Додатніх чисел: ${positiveCount}`);
console.log(`Від’ємних чисел: ${negativeCount}`);
console.log(`Нулів: ${zeroCount}`);
console.log(`Парних чисел: ${evenCount}`);
console.log(`Непарних чисел: ${oddCount}`);

// Завдання 4:

const daysOfWeek = [
  'Понеділок',
  'Вівторок',
  'Середа',
  'Четвер',
  "П'ятниця",
  'Субота',
  'Неділя',
];

let currentIndex = 0;
let continueLoop = true;

while (continueLoop) {
  continueLoop = confirm(
    'Сьогодні: ' + daysOfWeek[currentIndex] + '. Хочеш побачити наступний день?'
  );
  currentIndex = (currentIndex + 1) % daysOfWeek.length;
}

alert('Пака!');

// Максимум

// Завдання 1:

let min = 0;
let max = 100;
let guess;

while (min <= max) {
  guess = Math.floor((min + max) / 2);
  let answer = prompt('Ваше число >, < або = ' + guess + '?');

  if (answer === '>') {
    min = guess + 1;
  } else if (answer === '<') {
    max = guess - 1;
  } else if (answer === '=') {
    alert('Я вгадав! Ваше число: ' + guess);
    break;
  } else {
    alert('Невірна відповідь. Будь ласка, використовуйте тільки >, < або =.');
  }
}

if (min > max) {
  alert('Щось пішло не так. Спробуйте ще раз.');
}

// Завдання 2:
let firstNum = 2;
let secondNum = 9;

for (let i = 2; i <= 9; i++) {
  for (let j = 1; j <= 10; j++) {
    console.log(`${i} * ${j} = ${i * j} `);
  }
}

// Завдання 3:

// Завдання з уроку:

let width = parseInt(prompt('Введіть ширину прямокутника:'));
let height = parseInt(prompt('Введіть висоту прямокутника:'));
if (isNaN(width) || isNaN(height) || width < 2 || height < 2) {
  console.log(
    'Будь ласка, введіть коректні значення для ширини та висоти (мінімум 2).'
  );
} else {
  console.log(' * '.repeat(width));

  for (let i = 1; i < height - 1; i++) {
    console.log(' * ' + '   '.repeat(width - 2) + ' * ');
  }

  if (height > 1) {
    console.log(' * '.repeat(width));
  }
}
