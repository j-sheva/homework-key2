'use strict';

let shoppingList = [];

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

function sortByPurchased(list) {
  list.sort((a, b) => a.purchased - b.purchased);
}

sortByPurchased(shoppingList);

function displayShoppingList(list) {
  console.log(JSON.parse(JSON.stringify(list)));
}
displayShoppingList(shoppingList);

// Функція для відзначення продукту як придбаний
let buyProduct = function (shoppingList, productName) {
  const product = shoppingList.find((product) => product.name === productName);
  if (product) {
    product.purchased = true;
    console.log(` "${productName}" is purchased.`);
  } else {
    console.log(` "${productName}" not found.`);
  }
};
buyProduct(shoppingList, 'Milk');

// Видалення продукту
let removeProduct = function (productName) {
  const newList = shoppingList.filter(
    (product) => product.name !== productName
  );
  console.log(` "${productName}" is deleted.`);
  console.log(newList);
  return newList;
};

shoppingList = removeProduct('Bread');

// Функція для додавання покупки в список
let addProduct = function (shoppingList, name, quantity) {
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

  displayShoppingList(shoppingList);
};

addProduct(shoppingList, 'Cheese', 1);
addProduct(shoppingList, 'Butter', 55);

// Функція для підрахунку суми всіх продуктів
let calculateTotalSum = function (shoppingList) {
  const totalSum = shoppingList.reduce(
    (total, product) => total + parseInt(product.total),
    0
  );
  console.log(`Total sum: ${totalSum}$`);
};
calculateTotalSum(shoppingList);

// Функція для підрахунку суми всіх придбаних або не придбаних продуктів
let calculateSumByStatus = function (shoppingList, purchased) {
  const sum = shoppingList
    .filter((product) => product.purchased === purchased)
    .reduce((total, product) => total + product.total, 0);

  console.log(`Total sum putchased items: ${sum}$`);
};
calculateSumByStatus(shoppingList, true);

// Функція для сортування продуктів за сумою
let sortBySum = function (shoppingList, ascending = true) {
  shoppingList.sort((a, b) => {
    return ascending ? a.total - b.total : b.total - a.total;
  });
  console.log(`(${ascending ? 'lower --> higher' : 'higher --> lower'}).`);
};
sortBySum(shoppingList, true);
displayShoppingList(shoppingList);
sortBySum(shoppingList, false);
displayShoppingList(shoppingList);
