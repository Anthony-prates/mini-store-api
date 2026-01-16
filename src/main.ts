import { app } from "./server";

const start = async () => {
    await app.listen({ port: 3333 });
    console.log("Server running on http://localhost:3333"); 
}

start();
