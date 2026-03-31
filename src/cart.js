function addItem(cart, item, price) {
  cart.push({ item, price });
  return cart;
}

function removeItem(cart, name) {
  const index = cart.findIndex((entry) => entry.item === name);
  if (index !== -1) {
    cart.splice(index, 1);
  }
  return cart;
}

function getTotal(cart) {
  return parseFloat(cart.reduce((sum, entry) => sum + entry.price, 0).toFixed(2));
}

module.exports = { addItem, removeItem, getTotal };
