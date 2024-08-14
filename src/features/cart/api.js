import commerce from "../../lib/commerce";

export const readCart = async () => {
  return await commerce.cart.retrieve();
}

export const readCartContents = async () => {
  return await commerce.cart.contents();
}

export const postToCart = async (productID, quantity) => {
  const response = await commerce.cart.add(productID, quantity);
  return response.cart;
}

export const refreshCart = async () => {
  return await commerce.cart.refresh();
}

export const updateCart = async (itemID, propertyYouWantToUpdate, value) => {
  return await commerce.cart.update(itemID, { [propertyYouWantToUpdate]: value });
}

export const removeFromCart = async (itemID) => {
  return await commerce.cart.remove(itemID);
}

export const clearCart = async () => {
  return await commerce.cart.empty();
}