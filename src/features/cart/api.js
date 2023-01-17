import commerce from "../../lib/commerce";

export const readCart = async () => {
  const cart = await commerce.cart.retrieve();
  return cart;
}

export const postToCart = async (productID, quantity) => {
  const response = await commerce.cart.add(productID, quantity);
  return response.cart;
}

export const refreshCart = async () => {
  return await commerce.cart.refresh();
}