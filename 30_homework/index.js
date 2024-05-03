// Мінімум

// Завдання 1:
{
  let x = 0.1;
  let y = 0.2;
  let answer = x + y;
  console.log(answer.toFixed(1));
}

// Завдання 2:
{
  let x = '1';
  let y = 2;
  let answer = +x + y;
  console.log(answer);
}

// Завдання 3:

{
  const volume = prompt('Вкажіть обсяг флешки (Гб)?');
  const fileSizeMB = 820;
  const fileSizeGB = fileSizeMB / 1024;

  const fileNumbers = volume / fileSizeGB.toFixed(4);
  alert(
    `Кількість файлів, що поміститься на флешку: ${Math.floor(fileNumbers)} `
  );
  console.log(Math.floor(fileNumbers));
}

// Норма

// Завдання 1:
{
  const moneyAmound = prompt('Вкажіть суму грошей в гаманці (грн)?');
  const chocolatePrice = prompt('Вкажіть ціну однієї шоколадки (грн)?');

  const chockolateAmount = moneyAmound / chocolatePrice;
  const rest = moneyAmound % chocolatePrice;

  alert(
    `Ви можете купити ${Math.floor(
      chockolateAmount
    )} шоколадок і у вас залишиться ${rest.toFixed(2)} грн решти.`
  );
  console.log(Math.floor(chockolateAmount));
  console.log(rest.toFixed(2));
}

// Завдання 2:
{
  let number = prompt('Введіть тризначне число:');
  let num = parseInt(number);

  let hundreds = Math.floor(num / 100);
  let tens = Math.floor((num % 100) / 10);
  let units = num % 10;
  let reversed = units * 100 + tens * 10 + hundreds;
  alert(`Число задом наперед: ${reversed}`);
  console.log(reversed);
}

// Максимум

// Завдання 1:

{
}

// Завдання 2:

// 2 && 0 && 3; --> 0

// 2 || 0 || 3; --> 2

// 2 && 0 || 3; --> 3
