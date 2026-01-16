import { startApp } from './app';

const PORT = 3333;

startApp()
  .then(app => {
    app.listen({ port: PORT }, (err, address) => {
      if (err) {
        console.error(err);
        process.exit(1);
      }
      console.log(`Server running at ${address}`);
    });
  })
  .catch(err => {
    console.error('Erro ao iniciar servidor:', err);
    process.exit(1);
  });