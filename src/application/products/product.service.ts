import { prisma } from "../../infrastructure/prisma/client";

export const productService = {
  async listAll() {
    return prisma.product.findMany();
  },

  async findById(id: string) {
    return prisma.product.findUnique({
      where: { id },
    });
  },

  async create(data: { 
    name: string; 
    price: number;
    description: string;
    imageUrl: string;
  }) {
    return prisma.product.create({
      data,
    });
  },

  async update(
    id: string,
    data: { name?: string; price?: number }
  ) {
    return prisma.product.update({
      where: { id },
      data,
    });
  },

  async remove(id: string) {
    return prisma.product.delete({
      where: { id },
    });
  },
};
