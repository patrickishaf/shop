class Cart {
  cart;
  
  constructor(cart) {
    this.cart = cart;
  }

  addItem(productID, quantity) {
    // TODO: implement addItem
  }

  removeItem() {
    // TODO: implement removeItem
  }

  updateItem() {
    // TODO: implement updateItem
  }

  getItems() {
    return this.cart.line_items;
  }

  getLength() {
    return this.cart.total_items;
  }
}