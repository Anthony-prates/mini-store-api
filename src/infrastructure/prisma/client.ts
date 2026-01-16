import { PrismaClient } from "@prisma/client";

// Instância única para toda a aplicação
export const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});