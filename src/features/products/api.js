import commerce from "../../lib/commerce";

export const readProducts = async () => {
  const products = await commerce.products.list();
  return products.data;
}
