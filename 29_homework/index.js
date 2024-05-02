let firstName;
let last_name;
let FullName;
let FULL_NAME;

// let 1stName;  // Не можна починати з цифри
// let first-name; // Не можна використовувати дефіс
// let first name; // Пробіли не допускаються
// let @firstName; // Спеціальні символи не дозволені
// let let;  // "let" є зарезервованим словом

// Це однорядковий коментар

/* 
Це багаторядковий коментар.
*/

// camelCase — Перший символ маленький, наступні слова починаються з великої літери.
// PascalCase — Кожне слово починається з великої літери.
// snake_case — Слова розділені підкресленням.
// kebab-case — Слова розділені дефісом (не використовується в JS для імен змінних).

// Норма

// Завдання 1:
{
  const userName = prompt("Введіть своє ім'я:");
  alert(`Привіт, ${userName}`);
  console.log(userName);
}

// Завдання 2:
{
  const CURRENT_YEAR = 2024;
  const birthYear = prompt('Введіть рік вашого народження:');
  const age = CURRENT_YEAR - birthYear;
  alert(`Ваш вік: ${age} років`);
  console.log(age);
}

// Завдання 3:
{
  const sideLength = prompt('Введіть довжину сторони квадрату:');
  const perimeter = 4 * sideLength;
  alert(`Периметр квадрату: ${perimeter}`);
  console.log(perimeter);
}

// Максимум

// Завдання 1:

{
  const PI = 3.24;
  const radius = prompt('Введіть радіус кола:');
  const area = PI * radius;
  alert(`Площа кола: ${area}`);
  console.log(area);
}

// Завдання 2:

{
  const distance = prompt('Яка відстань між містами (км)?');
  const time = prompt('Скільки є часу (год)?');
  const speed = distance / time;
  alert(
    `Швидкість, з якою необхідно рухатися, щоб встигнути вчасно: ${speed} км/год`
  );
  console.log(speed);
}

// Завдання 3:

{
  let dollar = prompt('Dollar,$');
  const index = 0.85;
  const euro = dollar * index;
  alert(`Euro: ${euro} €`);
  console.log(euro);
}
