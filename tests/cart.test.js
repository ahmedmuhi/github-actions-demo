const { addItem, removeItem, getTotal } = require("../src/cart");

describe("addItem", () => {
  test("adds an item to an empty cart", () => {
    const cart = [];
    addItem(cart, "Apple", 1.5);
    expect(cart).toEqual([{ item: "Apple", price: 1.5 }]);
  });

  test("adds multiple items to the cart", () => {
    const cart = [];
    addItem(cart, "Apple", 1.5);
    addItem(cart, "Banana", 0.75);
    expect(cart).toHaveLength(2);
    expect(cart[1]).toEqual({ item: "Banana", price: 0.75 });
  });

  test("returns the updated cart", () => {
    const cart = [];
    const result = addItem(cart, "Apple", 1.5);
    expect(result).toBe(cart);
  });
});

describe("removeItem", () => {
  test("removes an existing item by name", () => {
    const cart = [
      { item: "Apple", price: 1.5 },
      { item: "Banana", price: 0.75 },
    ];
    removeItem(cart, "Apple");
    expect(cart).toEqual([{ item: "Banana", price: 0.75 }]);
  });

  test("does nothing when item is not in the cart", () => {
    const cart = [{ item: "Apple", price: 1.5 }];
    removeItem(cart, "Mango");
    expect(cart).toEqual([{ item: "Apple", price: 1.5 }]);
  });

  test("removes only the first occurrence of a duplicate item", () => {
    const cart = [
      { item: "Apple", price: 1.5 },
      { item: "Apple", price: 2.0 },
    ];
    removeItem(cart, "Apple");
    expect(cart).toEqual([{ item: "Apple", price: 2.0 }]);
  });

  test("returns the updated cart", () => {
    const cart = [{ item: "Apple", price: 1.5 }];
    const result = removeItem(cart, "Apple");
    expect(result).toBe(cart);
  });
});

describe("getTotal", () => {
  test("returns 0 for an empty cart", () => {
    expect(getTotal([])).toBe(0);
  });

  test("returns the price of a single item", () => {
    const cart = [{ item: "Apple", price: 1.5 }];
    expect(getTotal(cart)).toBe(1.5);
  });

  test("sums prices of multiple items", () => {
    const cart = [
      { item: "Apple", price: 1.5 },
      { item: "Banana", price: 0.75 },
      { item: "Milk", price: 3.0 },
    ];
    expect(getTotal(cart)).toBe(5.25);
  });
});
