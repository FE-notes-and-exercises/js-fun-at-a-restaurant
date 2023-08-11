function nameMenuItem(name) {
  return `Delicious ${name}`
}

function createMenuItem(menuItemName, price, type) {
  return {
    name: menuItemName,
    price: price,
    type: type
  }
}

function addIngredients(item, ingredients) {
  if (!ingredients.includes(item)) {
    ingredients.push(item)
  }
}

function formatPrice(initialPrice) {
    return `$${initialPrice}`
    // return '$' + `${initialPrice}`
}

function decreasePrice(menuItemPrice) {
  return menuItemPrice * .9;
}

function createRecipe(title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}


