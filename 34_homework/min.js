const shoppingList = [];

function Product(name, quantity, purchased, pricePerUnit) {
  (this.name = name),
    (this.quantity = quantity),
    (this.purchased = purchased),
    (this.pricePerUnit = pricePerUnit),
    (this.total = this.quantity * this.pricePerUnit);
}

let product1 = new Product('Milk', 2, false, 1.5);
let product2 = new Product('Bread', 1, true, 1.0);
let product3 = new Product('Eggs', 10, false, 0.1);
let product4 = new Product('Cheese', 1, true, 1.8);
let product5 = new Product('Butter', 2, false, 2.5);

shoppingList.push(product1, product2, product3, product4, product5);

function displayShoppingList(list) {
  list.sort((a, b) => a.purchased - b.purchased);
  console.log(shoppingList);
}
displayShoppingList(shoppingList);

// Функція для відзначення продукту як придбаний
buyProduct = function (productName) {
  const product = shoppingList.find((product) => product.name === productName);
  if (product) {
    product.purchased = true;
    console.log(` "${productName}" is purchased.`);
  } else {
    console.log(` "${productName}" not found.`);
  }
};
buyProduct('Milk');

// Видалення продукту

removeProduct = function (productName) {
  const newList = shoppingList.filter(
    (product) => product.name !== productName
  );
  console.log(` "${productName}" is deleted.`);
  console.log(newList);
  return newList;
};

removeProduct('Bread');

// Функція для додавання покупки в список
addProduct = function (name, quantity) {
  const existingProduct = shoppingList.find((product) => product.name === name);
  if (existingProduct) {
    existingProduct.quantity += quantity;
    existingProduct.total =
      existingProduct.quantity * existingProduct.pricePerUnit;
    console.log(`The quantity of the product "${name}" has been increased.`);
  } else {
    const newProduct = new Product(name, quantity);
    shoppingList.push(newProduct);
    console.log(`"${name}" has been added `);
  }
  console.log(shoppingList);
};

addProduct('Cheese', 1);
addProduct('Butter', 55);

// Функція для підрахунку суми всіх продуктів
calculateTotalSum = function () {
  const totalSum = shoppingList.reduce(
    (total, product) => total + parseInt(product.total),
    0
  );
  console.log(`Total sum: ${totalSum}$`);
  return totalSum;
};
calculateTotalSum();

// Функція для підрахунку суми всіх придбаних або не придбаних продуктів
calculateSumByStatus = function (purchased) {
  const sum = shoppingList
    .filter((product) => product.purchased === purchased)
    .reduce((total, product) => total + product.total, 0);

  console.log(`Total sum putchased items: ${sum}$`);
  return sum;
};
calculateSumByStatus(true);

// Функція для сортування продуктів за сумою
this.sortBySum = function (ascending = true) {
  shoppingList.sort((a, b) =>
    ascending ? a.total - b.total : b.total - a.total
  );
  console.log(`(${ascending ? 'lower --> higher' : 'higher --> lower'}).`);
};
sortBySum(true);
displayShoppingList(shoppingList);
sortBySum(false);
displayShoppingList(shoppingList);
