import { readProducts } from "./api";

export default class ProductsController {
  static async getProducts() {
    return await readProducts();
  }

  static async addReview(id) {
    console.log('...coming soon...');
  }
}
