import { postToCart, readCart } from "./api";

export default class CartController {
  static async retrieveCart() {
    return await readCart();
  }

  static async addToCart(productID, quantity=1) {
    return await postToCart(productID, quantity);
  }
}