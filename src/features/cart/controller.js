import { postToCart, readCart } from "./api";

export default class CartController {
  static async retrieveCart() {
    return await readCart();
  }

  static async addToCart(productID, quantity=1) {
    console.log('running addToCart method in controller. details =>', { productID, quantity });
    return await postToCart(productID, quantity);
  }
}