import CartService from "./CartService";
import { postToCart, readCart, updateCart } from "./api";

const CartItemProperties = {
  QUANTITY: 'quantity',
};
export default class CartController {
  static async retrieveCart() {
    const cart = await readCart();
    CartService.cacheCartBackup(cart)
    return cart;
  }

  static async addToCart(productID, quantity=1) {
    return await postToCart(productID, quantity);
  }

  static async changeItemQuantity(itemID, quantity) {
    return await updateCart(itemID, CartItemProperties.QUANTITY, quantity);
  }
}