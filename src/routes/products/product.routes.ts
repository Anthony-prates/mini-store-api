import { FastifyInstance } from "fastify";
import { productController } from "./product.controller";

export async function productRoutes(app: FastifyInstance) {
  app.get("/", async () => {
    return productController.listAll();
  });

  app.get("/:id", async (request) => {
    const { id } = request.params as { id: string };
    return productController.findById(id);
  });

  app.post("/", async (request, reply) => {
    const product = await productController.create(request.body);
    reply.status(201);
    return product;
  });

  app.put("/:id", async (request) => {
    const { id } = request.params as { id: string };
    return productController.update(id, request.body);
  });

  app.delete("/:id", async (request, reply) => {
    const { id } = request.params as { id: string };
    await productController.remove(id);
    reply.status(204);
    return null;
  });
}
