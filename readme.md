## Estrutura do projeto.

mini-store-api/
├── prisma/
│ ├── schema.prisma
│ └── migrations/
│
├── src/
│ ├── app.ts # Configuração do Fastify (plugins, middlewares)
│ ├── server.ts # Entry point (inicia o servidor)
│ ├── prisma/
│ │ └── client.ts # Instância única do PrismaClient
│ └── modules/
│ └── product/
│ ├── product.routes.ts # Rotas HTTP
│ └── product.service.ts # Regras de negócio + Prisma
│
├── .env.local
├── tsconfig.json
├── package.json
└── package-lock.json

