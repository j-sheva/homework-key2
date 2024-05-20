function Product(name, quantity, pricePerUnit, isBought = false) {
  this.name = name;
  this.quantity = quantity;
  this.pricePerUnit = pricePerUnit;
  this.isBought = isBought;
  this.sum = this.quantity * this.pricePerUnit;
}

function ShoppingList() {
  this.list = [];

  // Функція для виведення всього списку на екран
  this.displayList = function () {
    const notBought = this.list.filter((product) => !product.isBought);
    const bought = this.list.filter((product) => product.isBought);

    console.log('Не придбані продукти:');
    notBought.forEach((product) => console.log(product));

    console.log('Придбані продукти:');
    bought.forEach((product) => console.log(product));
  };

  // Функція для відзначення продукту як придбаний
  this.buyProduct = function (productName) {
    const product = this.list.find((product) => product.name === productName);
    if (product) {
      product.isBought = true;
      console.log(`Продукт "${productName}" відзначений як придбаний.`);
    } else {
      console.log(`Продукт "${productName}" не знайдений.`);
    }
  };

  // Функція для видалення продукту зі списку
  this.removeProduct = function (productName) {
    this.list = this.list.filter((product) => product.name !== productName);
    console.log(`Продукт "${productName}" видалено зі списку.`);
  };

  // Функція для додавання покупки в список
  this.addProduct = function (name, quantity, pricePerUnit) {
    const existingProduct = this.list.find((product) => product.name === name);
    if (existingProduct) {
      existingProduct.quantity += quantity;
      existingProduct.sum =
        existingProduct.quantity * existingProduct.pricePerUnit;
      console.log(`Кількість продукту "${name}" збільшена.`);
    } else {
      const newProduct = new Product(name, quantity, pricePerUnit);
      this.list.push(newProduct);
      console.log(`Продукт "${name}" додано до списку.`);
    }
  };

  // Функція для підрахунку суми всіх продуктів
  this.calculateTotalSum = function () {
    const totalSum = this.list.reduce((sum, product) => sum + product.sum, 0);
    console.log(`Загальна сума всіх продуктів: ${totalSum}`);
    return totalSum;
  };

  // Функція для підрахунку суми всіх придбаних або не придбаних продуктів
  this.calculateSumByStatus = function (isBought) {
    const sum = this.list
      .filter((product) => product.isBought === isBought)
      .reduce((sum, product) => sum + product.sum, 0);
    const status = isBought ? 'придбаних' : 'не придбаних';
    console.log(`Загальна сума ${status} продуктів: ${sum}`);
    return sum;
  };

  // Функція для сортування продуктів за сумою
  this.sortBySum = function (ascending = true) {
    this.list.sort((a, b) => (ascending ? a.sum - b.sum : b.sum - a.sum));
    console.log(
      `Список відсортовано за сумою (${
        ascending ? 'від меншого до більшого' : 'від більшого до меншого'
      }).`
    );
  };
}

// Створення списку покупок
const shoppingList = new ShoppingList();

// Додавання продуктів
shoppingList.addProduct('Молоко', 2, 15);
shoppingList.addProduct('Хліб', 1, 10);
shoppingList.addProduct('Яблука', 5, 7);

// Виведення списку
shoppingList.displayList();

// Покупка продукту
shoppingList.buyProduct('Молоко');

// Виведення списку після покупки
shoppingList.displayList();

// Видалення продукту
shoppingList.removeProduct('Хліб');

// Виведення списку після видалення
shoppingList.displayList();

// Додавання продукту з існуючою назвою
shoppingList.addProduct('Яблука', 3, 7);

// Виведення списку після додавання
shoppingList.displayList();

// Підрахунок суми всіх продуктів
shoppingList.calculateTotalSum();

// Підрахунок суми всіх придбаних продуктів
shoppingList.calculateSumByStatus(true);

// Підрахунок суми всіх не придбаних продуктів
shoppingList.calculateSumByStatus(false);

// Сортування продуктів за сумою
shoppingList.sortBySum(true); // від меншого до більшого
shoppingList.displayList();
shoppingList.sortBySum(false); // від більшого до меншого
shoppingList.displayList();
