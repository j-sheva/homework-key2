'use strict';

let shoppingList = [];

function Product(name, quantity, purchased, pricePerUnit) {
  this.name = name;
  this.quantity = quantity;
  this.purchased = purchased;
  this.pricePerUnit = pricePerUnit;
  this.total = this.quantity * this.pricePerUnit;
}

let product1 = new Product('Milk', 2, false, 1.5);
let product2 = new Product('Bread', 1, true, 1.0);
let product3 = new Product('Eggs', 10, false, 0.1);
let product4 = new Product('Cheese', 1, true, 1.8);
let product5 = new Product('Butter', 2, false, 2.5);

shoppingList.push(product1, product2, product3, product4, product5);

function displayShoppingList(list) {
  list.sort((a, b) => a.purchased - b.purchased);
  console.log(list);
}

displayShoppingList(shoppingList);

let buyProduct = function (productName) {
  const product = shoppingList.find((product) => product.name === productName);
  if (product) {
    product.purchased = true;
    console.log(`"${productName}" is purchased.`);
  } else {
    console.log(`"${productName}" not found.`);
  }
};

buyProduct('Milk');

let removeProduct = function (productName) {
  shoppingList = shoppingList.filter((product) => product.name !== productName);
  console.log(`"${productName}" is deleted.`);
  console.log(shoppingList);
};

removeProduct('Bread');

let addProduct = function (name, quantity, pricePerUnit) {
  const existingProduct = shoppingList.find((product) => product.name === name);
  if (existingProduct) {
    existingProduct.quantity += quantity;
    existingProduct.total =
      existingProduct.quantity * existingProduct.pricePerUnit;
    console.log(`The quantity of the product "${name}" has been increased.`);
  } else {
    const newProduct = new Product(name, quantity, false, pricePerUnit);
    shoppingList.push(newProduct);
    console.log(`"${name}" has been added.`);
  }
  console.log(shoppingList);
};

addProduct('Cheese', 10, 1.8);
addProduct('Butter', 55, 2.5);

let calculateTotalSum = function () {
  const totalSum = shoppingList.reduce(
    (total, product) => total + product.total,
    0
  );
  console.log(`Total sum: ${totalSum}$`);
  return totalSum;
};

calculateTotalSum();

let calculateSumByStatus = function (purchased) {
  const sum = shoppingList
    .filter((product) => product.purchased === purchased)
    .reduce((total, product) => total + product.total, 0);

  console.log(
    `Total sum ${purchased ? 'purchased' : 'not purchased'} items: ${sum}$`
  );
  return sum;
};

calculateSumByStatus(true);
calculateSumByStatus(false);

let sortBySum = function (ascending = true) {
  shoppingList.sort((a, b) =>
    ascending ? a.total - b.total : b.total - a.total
  );
  console.log(
    `Sorted by sum (${ascending ? 'lower to higher' : 'higher to lower'}).`
  );
};

sortBySum(true);
displayShoppingList(shoppingList);
sortBySum(false);
displayShoppingList(shoppingList);
