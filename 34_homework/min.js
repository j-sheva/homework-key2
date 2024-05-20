const shoppingList = [
  {
    name: 'Milk',
    quantity: 2,
    purchased: false,
    pricePerUnit: 1.5,
    total: 3.0,
  },
  {
    name: 'Bread',
    quantity: 1,
    purchased: true,
    pricePerUnit: 1.0,
    total: 1.0,
  },
  {
    name: 'Eggs',
    quantity: 12,
    purchased: false,
    pricePerUnit: 0.1,
    total: 1.2,
  },
  {
    name: 'Cheese',
    quantity: 1,
    purchased: true,
    pricePerUnit: 2.5,
    total: 2.5,
  },
  {
    name: 'Butter',
    quantity: 1,
    purchased: false,
    pricePerUnit: 1.8,
    total: 1.8,
  },
];

function displayShoppingList(list) {
  console.log('Shopping List:');

  console.log('Not Purchased:');
  list.forEach((item) => {
    if (!item.purchased) {
      console.log(
        `- ${item.name}: ${item.quantity} Price: ${item.pricePerUnit} Total price: ${item.total}`
      );
    }
  });

  console.log('Purchased:');
  list.forEach((item) => {
    if (item.purchased) {
      console.log(
        `- ${item.name}: ${item.quantity} Price: ${item.pricePerUnit} Total price: ${item.total}`
      );
    }
  });
}

displayShoppingList(shoppingList);

// Видалення продукту

function removeProduct() {
  let { shoppingList, ...rest } = shoppingList;
  return rest;
}

const updatedListAfterRemoval = removeProduct(shoppingList, 'Bread');
console.log('After removal of Bread:');
displayShoppingList(updatedListAfterRemoval);

// Додавання або оновлення продукту

function addOrUpdateProduct(list, product) {
  const existingProduct = list.find((item) => item.name === product.name);
  if (existingProduct) {
    existingProduct.quantity += product.quantity;
    existingProduct.total =
      existingProduct.quantity * existingProduct.pricePerUnit;
  } else {
    list.push(product);
  }
  return list;
}

const updatedListAfterAddition = addOrUpdateProduct(shoppingList, {
  name: 'Milk',
  quantity: 1,
  pricePerUnit: 1.5,
  total: 1.5,
  purchased: false,
});
console.log('After adding/updating Milk:');
displayShoppingList(updatedListAfterAddition);
