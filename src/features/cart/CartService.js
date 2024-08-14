import localStorageKeys from "../../utils/localstoragekeys";

const CartService = {
  cacheCartBackup (cart) {
    localStorage.setItem(localStorageKeys.CART, JSON.stringify(cart))
  },
  cacheCart (cart) {
    localStorage.setItem(localStorageKeys.CART, JSON.stringify(cart))
  }
}

export default CartService;