import Fastify from 'fastify';
import { productRoutes } from './routes/products/product.routes';


export const app = Fastify({
logger: true,
});


// Registro de rotas
app.register(productRoutes, { prefix: '/products' });


export async function startApp() {
    await app.ready();
    return app;
}