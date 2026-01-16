import { productService } from "../../application/products/product.service";

export const productController = {
  async listAll() {
    return productService.listAll();
  },

  async findById(id: string) {
    return productService.findById(id);
  },

  async create(body: any) {
    return productService.create(body);
  },

  async update(id: string, body: any) {
    return productService.update(id, body);
  },

  async remove(id: string) {
    return productService.remove(id);
  },
};
